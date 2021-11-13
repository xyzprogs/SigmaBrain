import React from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router-dom'
const LOGO = () => {
    const classes = useStyles()

    return (
        <div className={classes.changeCursor}>
            SigmaBrain Forum
        </div>
    )
}

export default LOGO
