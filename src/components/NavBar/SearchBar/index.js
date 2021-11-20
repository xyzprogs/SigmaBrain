import React from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router';
import quizApi from '../../../api/quiz-api'
import { useState } from 'react'
import QUERY_PARAMS from '../../../constant/query_params';
const SearchInput = ({searchInput,setSearchInput}) => {
    const classes = useStyles();
    let history = useHistory()
    const [searches, setSearches] = useState([])
    const [userSearch, setUserSearch] = useState("")
    const onSearch = async (event)=>{
        setUserSearch(event.target.value)
        let response = await quizApi.getQuizNameSearchResult(event.target.value)
        setSearches(response.data)
        
    }

    const chooseSearch = (i)=>{
        console.log("choose", searches[i])
    }

    const redirectToSearchResult = ()=>{
        history.push(`/searchResult/?${QUERY_PARAMS.SEARCH_RESULT}=${userSearch}`)
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
            <button onClick={redirectToSearchResult}>Search</button>
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