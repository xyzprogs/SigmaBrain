import { useState, useEffect, useContext } from 'react';
import { useStyles } from './style';
import { sendResetPasswordEmail } from '../../firebase/firebase_auth';
const ResetPasword = () => {

    const classes = useStyles()
    const [email, setEmail] = useState("");
    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const sendPasswordResetEmail = ()=>{
        sendResetPasswordEmail(email);
        console.log('resetEmail sent')
    }


    return (
        <div className={classes.loginForm}>
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>Reset Password</h3>
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
                </div>
                <div className={classes.buttonContainer}>
                    <button type="submit" className={classes.button} onClick={sendPasswordResetEmail}>
                        Submit
                    </button>
                </div>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}

export default ResetPasword
