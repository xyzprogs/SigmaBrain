import React from 'react'
import { useStyles } from './style'

const UserLogin = ({setLogin}) => {

    const classes = useStyles()

    return (
        <div className={classes.userControlsContainers}>

            <div className={classes.signUpButtonContainter}>
                <div className={classes.signUpBtn}>
                    Sign Up
                </div>
            </div>


            <div className = {classes.LoginBtnContainer}>
                <div className = {classes.LoginBtn} onClick={()=> setLogin(true)}>
                    Log In
                </div>
            </div>
        </div>
    )
}

export default UserLogin
