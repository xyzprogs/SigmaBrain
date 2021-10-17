import {useState} from 'react';
import { useStyles } from './style';
import { register } from '../../firebase/firebase_auth';

const Register = () => {

    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const updateConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const confirmRegister = (event) => {
        console.log("login with " + email + " and " + password + " and " + confirmPassword);
        if(password != confirmPassword)return;
        register(email, password)
    }

    return (
        <div className={classes.loginForm}>
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>Register Here</h3>
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

                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="password"
                            name="password"
                            placeholder="Enter Password Again"
                            onKeyUp={updateConfirmPassword}
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
                    <button type="submit" className={classes.button} onClick={confirmRegister}>
                        Continue
                    </button>
                </div>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}

export default Register