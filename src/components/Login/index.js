import React from 'react'
import { useStyles } from './style'


const Login = () => {

    const classes = useStyles()

    return (
        <form className={classes.loginForm}>
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>Sign In</h3>
            </div>
            <div className={classes.loginWrapper}>
                <div className={classes.formGroup}>
                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                    </div>

                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="password"
                            name="password"
                            placeholder="Password"
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
                    <button type="submit" className={classes.button}>
                        Continue
                    </button>
                </div>
            </div>
            <div className={classes.divider}></div>
        </form>
    )
}

export default Login
