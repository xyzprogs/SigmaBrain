import React from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router-dom'
const Logo = () => {
    const classes = useStyles()
    const history = useHistory()

    const redirectHome = ()=>{
        history.push('/')
    }
    return (
        <div className={classes.changeCursor} onClick={redirectHome}>
            SigmaBrain
        </div>
    )
}

export default Logo
