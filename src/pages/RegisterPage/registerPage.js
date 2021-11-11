// import React from 'react'
import { useStyles } from './style'
import Register from '../../components/Register/index'
import NavBar from '../../components/NavBar'

const RegisterPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageContainer}>
            <div className={classes.loginContainer}>
                <Register />
            </div>
        </div>
    )
}

export default RegisterPage
