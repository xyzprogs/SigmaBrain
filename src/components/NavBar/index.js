import {useState} from 'react';
import { useStyles } from './style';
import SearchInput from './SearchBar'
import Logo from './Logo'
import UserLogin from './UserLogin';
import UserControl from './UserControls';

const NavBar = () => {
    //or create a context?
    const [searchString, setSearchString] = useState("")
    //temp is Logged IN variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    const classes = useStyles()
    return (
        <div className={classes.barContainer}>
            <div className={classes.icon}>
                <Logo/>
            </div>

            <div className={classes.search}>
                <SearchInput searchString = {searchString} setSearchString = {setSearchString}/>
            </div>

            <div className={classes.buttons}>
                {isLoggedIn ? <UserControl/> : <UserLogin/>}
            </div>
        </div>
    )
}

export default NavBar