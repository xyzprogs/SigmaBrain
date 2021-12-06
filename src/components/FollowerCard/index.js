import {useStyles} from './style'
import BODY from '../../constant/body'
import {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import default_profile from '../../images/Default_profile.png'
import userApis from '../../api/user-api'
import HEADER from '../../constant/header'
import AuthContext from '../../context/auth-context'
import LOCAL_CONSTANT from '../../constant/local-storage'
const FollowerCard = ({follower})=>{

    const classes = useStyles()
    const [image, setImage] = useState("")
    const [name, setName] = useState("loading")
    const [subscribeStatus, setSubscribeStatus] = useState(false)
    const {auth} = useContext(AuthContext)
    const history = useHistory()
    useEffect(()=>{
        const loadDisplayName = async()=>{
            let response = await userApis.getUserDisplayName(follower[BODY.USERID])
            if(response.data.length>0){
                setName(response.data[0][BODY.DISPLAYNAME])
            }
        }
        const loadProfileImage = async()=>{
            try{
                let response = await userApis.getProfileImage(follower[BODY.USERID])
                if(response.data==null || response.data==""){
                    setImage(default_profile)
                    return
                }
                setImage(response.data)
            }catch{
                setImage(default_profile)
            }
        }

        const getSubscribeStatus = async ()=>{
            console.log("check")
            if(auth.user!=null && auth.user!==undefined){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await userApis.checkSubscribeStatus(follower[BODY.USERID], headers)
                console.log(response)
                if(response.data.length>0){
                    setSubscribeStatus(true)
                }
                else{
                    setSubscribeStatus(false)
                }
            }
        }

        loadDisplayName()
        loadProfileImage()
        getSubscribeStatus()
    }, [auth.user])

    const onSubscribe = async () => {
        console.log("subscribe", follower[BODY.USERID])
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let payload = {
            [BODY.SUBSCRIBETO]: follower[BODY.USERID]
        }
        await userApis.subscribe(payload, headers)
        setSubscribeStatus(true)
    }

    const unsubscribe = async()=>{
        if(auth.user!=null && auth.user!==undefined && follower!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN]: token
            }
            let payload = {
                [BODY.SUBSCRIBETO]: follower[BODY.USERID] 
            }
            await userApis.unsubscribe(payload, headers)
            setSubscribeStatus(false)
        }
    }

    const redirectProfile = (uid)=>{
        localStorage.setItem(LOCAL_CONSTANT.PROFILE_TAG, 0)
        history.push(`/profile/${uid}`)
    }

    return(
        <div className={`${classes.userContainer} ${classes.btn}`}>
            <div onClick={()=>{redirectProfile([follower[BODY.USERID]])}}>
                <img className={classes.imgSize} src={image}/>
            </div>
            <div>
                <div className={classes.userName}>
                    {name}
                </div>
            </div>
            <div>
                {!subscribeStatus && <div onClick={onSubscribe} className={`${classes.btn} ${classes.colorGreen}`}>Subscribe</div>}
                {subscribeStatus && <div  onClick={unsubscribe} className={`${classes.btn} ${classes.colorRed}`}>Unsubscribe</div>}
            </div>
        </div>
    )
}


export default FollowerCard