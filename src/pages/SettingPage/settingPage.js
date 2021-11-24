import { useStyles } from './style'
import AuthContext from '../../context/auth-context'
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import userApis from '../../api/user-api'
import BODY from '../../constant/body'
import HEADER from '../../constant/header'
import { updatePassword, signInWithEmailAndPassword } from 'firebase/auth'
import ERRORCODE from '../../constant/firebase-error-code'
const SettingPage = ()=>{
    const classes = useStyles()
    const {auth, passwordError} = useContext(AuthContext)
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState()
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [originalPassword, setOriginalPassword] = useState("")
    const [errorMessages, setErrorMessages] = useState([])
    const [sucessMessages, setSucessMessages] = useState([])
    const history = useHistory()
    useEffect(()=>{
        const loadUserInfo = async (userId)=>{
            console.log("loading user info for setting page")
            let response = await userApis.getUserInfo(userId)
            setUser(response.data[0])
        }
        setLogin(auth.loggedIn)
        if(auth.user!=null){
            loadUserInfo(auth.user.uid)
        }
        setLogin(auth.loggedIn)
        if(passwordError !== undefined){

            if(passwordError[0] === 1){
                //update sucessfully
                setSucessMessages([passwordError[1]])
                setErrorMessages([])
                return
            }
            setSucessMessages([])
            if(passwordError[1] === ERRORCODE.WRONG_PASSWORD){
                setErrorMessages([ERRORCODE.WRONG_PASSWORD_MSG])
            }
            else if(passwordError[1] === ERRORCODE.TOO_MANY_ATTEMPTS){
                setErrorMessages([ERRORCODE.TOO_MANY_ATTEMPTS_MSG])
            }
            else{
                setErrorMessages([ERRORCODE.LOGIN_UNSUCESS_MSG])
            }
        }
    }, [auth.loggedIn, auth.user, passwordError])

    if(!login){
        history.push('/')
    }

    const onChangeDisplayName = (event)=>{
        setDisplayName(event.target.value)
    }

    const submitChangeDisplayName = async ()=>{
        if(displayName !== "" && auth.user != null){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let paylaod = {
                [BODY.DISPLAYNAME]: displayName
            }
            await userApis.updateUserDisplayNamem(paylaod, headers)
            setDisplayName("")
            let newUser = {...user}
            newUser[BODY.DISPLAYNAME] = displayName
            setUser(newUser)
        }
    }

    const changePassword = ()=>{
        if(password==="" || confirmPassword ===""){
            setErrorMessages([ERRORCODE.PASS_EMPTY_MSG])
            return
        }
        if(password !== confirmPassword){
            setErrorMessages([ERRORCODE.PASSWORD_NOT_MATCH_MSG])
            return
        }
        if(auth.user != null){
            auth.changePassword(originalPassword, password)
        }
    }


    return(
        <div className={classes.container}>
            Setting Page
            <div>
                <div>Current Displayname: {user===undefined?"loading":user[BODY.DISPLAYNAME]}</div>
                <div>
                    <div className={classes.nameField}>Change to: </div>
                    <input onChange={onChangeDisplayName} value={displayName} className={classes.inputField}/>
                </div>
                <div onClick={submitChangeDisplayName} className={classes.btn}>Change Displayname</div>
            </div>
            ----------------------------------------------------------------------
            <div className={classes.changePasswordContainer}>
                {
                    sucessMessages.map((sucess, i)=>{
                        return <div key={i} className="alert alert-success" role="alert">
                            {sucess}
                        </div>
                    })
                }
                {
                    errorMessages.map((error, i)=>{
                        return <div key={i} className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    })
                }
                <div>
                    <div className={classes.nameField}>Original Password: </div>
                    <input value={originalPassword} onChange={(e)=>{setOriginalPassword(e.target.value)}} className={classes.inputField}/>
                </div>
                <div>
                    <div className={classes.nameField}>New Password: </div>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className={classes.inputField}/>
                </div>
                <div>
                    <div className={classes.nameField}>Confirm Password: </div>
                    <input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} className={classes.inputField}/></div>
                    <div onClick={changePassword} className={classes.btn}>Update Password</div>
            </div>
        </div>
    )
}

export default SettingPage