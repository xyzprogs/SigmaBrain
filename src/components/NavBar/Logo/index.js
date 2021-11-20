import React from 'react'
import { useRef, useContext, useState, useEffect } from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router-dom'
import logo2 from "../../../images/logo2.png"
const Logo = () => {
    const classes = useStyles()
    const history = useHistory()
    const redirectHome = ()=>{
        history.push('/')
    }
    return (
        <img className={classes.changeCursor}  onClick={redirectHome} src={logo2}/>
    )
}

export default Logo
