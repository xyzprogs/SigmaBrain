import {useState} from 'react';
import { useStyles } from './style';
const MainBoard = () => {
    const classes = useStyles()
    return (
        <div className={classes.item1}>
            Main
        </div>
    )
}

export default MainBoard