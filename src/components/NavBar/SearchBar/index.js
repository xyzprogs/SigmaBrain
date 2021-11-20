import React from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router';

const SearchInput = ({searchInput,setSearchInput}) => {
    const classes = useStyles();
    let history = useHistory()
    return (
        <div className = {classes.searchBarContainer}>
            <input 
                type="text"
                id="header-search"
                placeholder="Search All Quizzes"
                name="s"
                className = {classes.searchBar}
                onChange = {(e)=> console.log(e.target.value)}
            />
            <button className={classes.buttonBar} onClick={()=>history.push('/searchResult')}>Search</button>
        </div>
    )
}

export default SearchInput