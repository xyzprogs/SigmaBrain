import React from 'react'
import { useStyles } from './style'
import { SideBar} from '../../components/Home'
import SearchResult from '../../components/SearchResult'
import QUERY_PARAMS from '../../constant/query_params'
import { useEffect, useState } from 'react'
import quizApis from '../../api/quiz-api'
const SearchResultPage = () => {
    const classes = useStyles()
    const [results, setResults] = useState([])
    useEffect(()=>{
        const getResults = async (search)=> {
            let response = await quizApis.getQuizSearchResult(search)
            console.log(response.data)
            setResults(response.data)
        }
        const params = new URLSearchParams(window.location.search)
        let search = params.get(QUERY_PARAMS.SEARCH_RESULT)
        console.log("searching", search)
        if(search!=null && search!==undefined){
            getResults(search)
        }
    },[window.location.search])
    return (
        <div className={classes.homeContainer}> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.searchResults}>
                <SearchResult 
                results={results}/>
            </div>
        </div>
    )
}

export default SearchResultPage;