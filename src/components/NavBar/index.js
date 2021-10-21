import {useState} from 'react';
import { useStyles } from './style';
import SearchInput from '../SearchBar/index'
const NavBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.barContainer}>
            <div className={classes.icon}>
                icon
            </div>

            <div className={classes.search}>
                <SearchInput/>
            </div>

            <div className={classes.buttons}>
                buttons
            </div>
        </div>
    )
}

export default NavBar