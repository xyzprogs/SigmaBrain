import React from 'react'
import { useStyles } from './style'
import Login from '../../components/Login/index.js'
import SearchBar from '../../components/SearchBar/index'

const LoginPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageContainer}>
            <div className={classes.loginContainer}>
                <SearchBar/>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage
