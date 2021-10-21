import React from 'react'
import { useStyles } from './style'

const SearchInput = ({searchInput,setSearchInput}) => {
    const classes = useStyles();
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
            <button>Search</button>
        </div>
    )
}

export default SearchInput
