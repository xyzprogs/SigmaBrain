import { useState, useEffect, useContext } from 'react';
import { useStyles } from './style';
import { app } from '../../firebase/firebase_init';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/auth-context'
const Login = () => {

    const classes = useStyles()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()
    const { auth } = useContext(AuthContext)
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
        if(auth.loggedIn){
            history.push('/')
        }
    })

    return (
        <div className={classes.loginForm}>
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
                        <Link to="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
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
