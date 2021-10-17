import {useState} from 'react';
import { useStyles } from './style';
import { login } from '../../firebase/firebase_auth';
import { app } from '../../firebase/firebase_init';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {

    const classes = useStyles()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const confirmLogin = (event) => {
        console.log("login with " + email + " and " + password);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user)
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error")
          console.log(errorMessage)
            
        });
    }

    return (
        <div className={classes.loginForm}>
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>Sign In</h3>
            </div>
            <div className={classes.loginWrapper}>
                <div className={classes.formGroup}>
                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="text"
                            name="email"
                            placeholder="Email"
                            onKeyUp = {updateEmail}
                        />
                    </div>

                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onKeyUp={updatePassword}
                        />
                    </div>
                </div>
                {/* {
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
} */}
                <div className={classes.buttonContainer}>
                    <button type="submit" className={classes.button} onClick={confirmLogin}>
                        Continue
                    </button>
                </div>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}

export default Login
