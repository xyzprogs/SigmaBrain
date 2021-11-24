import { useState, useEffect, useContext } from 'react';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/auth-context'
import ERRORCODE from '../../constant/firebase-error-code';
const Login = () => {

    const classes = useStyles()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()
    const { auth, error } = useContext(AuthContext)
    const [errorMsg, setErrorMsg] = useState([])
    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const confirmLogin = () => {
        auth.login(email, password)
    }

    useEffect(()=>{

        if(auth.user!=null){
            history.push('/')
        }

        if(error != null ){
            if(error === ERRORCODE.INVALID_EMAIL){
                setErrorMsg([ERRORCODE.INVALID_EMAIL_MSG])
            }
            else if(error === ERRORCODE.USER_NOT_FOUND){
                setErrorMsg([ERRORCODE.USER_NOT_FOUND_MSG])
            }
            else if(error === ERRORCODE.WRONG_PASSWORD){        
                setErrorMsg([ERRORCODE.WRONG_PASSWORD_MSG])
            }
            else{
                setErrorMsg([ERRORCODE.LOGIN_UNSUCESS_MSG])
            }
        }
    }, [auth.user, error, history])

    return (
        <div className={classes.loginForm}>
            {
                errorMsg.map((error, i)=>{
                    return <div key={i} className="alert alert-danger" role="alert">
                        {error}
                    </div>
                })
            }
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>Sign In</h3>
            </div>
            <div className={classes.loginWrapper}>
                <div className={classes.formGroup}>
                    <div className={classes.textToLeft}>Email</div>
                    <div className={classes.inputWrapper}>
                        <input
                            className={ `${classes.input} ${classes.bottomBorder}` }
                            type="text"
                            name="email"
                            placeholder="Email"
                            onKeyUp = {updateEmail}
                        />
                    </div>
                    <div className={classes.textToLeft}>Password</div>
                    <div className={classes.inputWrapper}>
                        <input
                            className={ `${classes.input} ${classes.bottomBorder}` }
                            type="password"
                            name="password"
                            placeholder="Password"
                            onKeyUp={updatePassword}
                        />
                    </div>
                </div>
                {
                <div className={classes.loginOptions}>
                    <div className={classes.checkboxContainer}>
                        <input type="checkbox" />
                        <span>Stay Logged In</span>
                    </div>
                    <span className={classes.forgotPassword}>
                        <Link to="/forgetPassword" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                            forgot password?
                        </Link>
                    </span>
                </div>
                }
                <div className={classes.buttonContainer}>
                    <button type="submit" className={classes.button} onClick={confirmLogin}>
                        Login
                    </button>
                </div>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}

export default Login
