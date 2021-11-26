import React from 'react'
import { useStyles } from './style'
import quizApi from '../../../api/quiz-api'
import { useState, useContext } from 'react'
import SearchContext from '../../../context/search-context';

const SearchInput = ({searchInput,setSearchInput}) => {
    const classes = useStyles();
    const [searches, setSearches] = useState([])
    const [userSearch, setUserSearch] = useState("")
    const { searchAndRedirect } = useContext(SearchContext)
    const onSearch = async (event)=>{
        setUserSearch(event.target.value)
        let response = await quizApi.getQuizNameSearchResult(event.target.value)
        setSearches(response.data)   
    }


    const chooseSearch = (i)=>{
        console.log("choose", searches[i])
        searchAndRedirect(searches[i])
        setSearches([])
    }

    const redirectToSearchResult = async ()=>{
        searchAndRedirect(userSearch)
        setSearches([])
    }


    return (
        <div className = {classes.searchBarContainer}>
            <input 
                value = {userSearch}
                type="text"
                id="header-search"
                placeholder="Search All Quizzes"
                name="s"
                className = {classes.searchBar}
                onChange = {onSearch}
            />

            <button className={classes.buttonBar} onClick={redirectToSearchResult}>Search</button>
            <div className={classes.searchResult}>
                {searches.map((search,i)=>{
                    return (
                    <div onClick={()=>{chooseSearch(i)}} className={classes.resultBox}>
                        <div className={classes.resultText}>
                            {search}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchInput