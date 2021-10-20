import {useState} from 'react';
import { useStyles } from './style';
const SearchBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.barContainer}>
            <div className={classes.icon}>
                icon
            </div>

            <div className={classes.search}>
                search
            </div>

            <div className={classes.buttons}>
                buttons
            </div>
        </div>
    )
}

export default SearchBar