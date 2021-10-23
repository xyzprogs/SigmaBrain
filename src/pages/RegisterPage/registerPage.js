import React from 'react'
import { useStyles } from './style'
import Register from '../../components/Register/index'
import SearchBar from '../../components/SearchBar/index'

const RegisterPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageContainer}>
            <div className={classes.loginContainer}>
                <SearchBar />
                <Register />
            </div>
        </div>
    )
}

export default RegisterPage
