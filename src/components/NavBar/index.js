import {useState} from 'react';
import { useStyles } from './style';
import SearchInput from './SearchBar/index'
const NavBar = () => {
    //or create a context?
    const [searchString, setSearchString] = useState("")

    const classes = useStyles()
    return (
        <div className={classes.barContainer}>
            <div className={classes.icon}>
                Icon
            </div>

            <div className={classes.search}>
                <SearchInput searchString = {searchString} setSearchString = {setSearchString}/>
            </div>

            <div className={classes.buttons}>
                Temp User Buttons
            </div>
        </div>
    )
}

export default NavBar