import {useState} from 'react';
import { useStyles } from './style';
import { register } from '../../firebase/firebase_auth';
import { Link } from 'react-router-dom';
import userApi from '../../api/user-api';
import BODY_CONSTANT from '../../constant/body';
import HEADER_CONSTANT from '../../constant/header';
import {getAuth} from 'firebase/auth'
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

    const confirmRegister = async (event) => {
        console.log("login with " + email + " and " + password + " and " + confirmPassword);
        if(password != confirmPassword)return;
        await register(email, password)
        let payload = {}
        let axios_config = {}
        let headers = {}
        const token = await getAuth().currentUser.getIdToken()
        // console.log(token)
        headers[HEADER_CONSTANT.TOKEN] = token
        payload[BODY_CONSTANT.EMAIL] = email
        payload[BODY_CONSTANT.DISPLAYNAME] = "tester"
        axios_config = {
            headers: headers
        }
        // console.log(axios_config)
        // console.log("payload: " + payload)
        // console.log("axios config: " + axios_config)
        let response = await userApi.createUser(payload, axios_config)
        // console.log(response)
    }

    return (
        <div className={classes.loginForm}>
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>Register Here</h3>
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
                    <div className={classes.textToLeft}>Confirm Password</div>
                    <div className={classes.inputWrapper}>
                        <input
                            className={ `${classes.input} ${classes.bottomBorder}` }
                            type="password"
                            name="password"
                            placeholder="Enter Password Again"
                            onKeyUp={updateConfirmPassword}
                        />
                    </div>
                </div>
                {
                <div className={classes.loginOptions}>
                    <span className={classes.forgotPassword}>
                        <Link to="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                           Have An Account?
                        </Link>
                    </span>
                    <span className={classes.forgotPassword}>
                        <Link to="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                            forgot password?
                        </Link>
                    </span>
                </div>
}
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