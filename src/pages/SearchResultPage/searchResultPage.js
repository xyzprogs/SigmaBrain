import React, { useContext } from 'react'
import { useStyles } from './style'
import { SideBar} from '../../components/Home'
import SearchResult from '../../components/SearchResult'
import { useEffect, useState } from 'react'
import SearchContext from '../../context/search-context'
const SearchResultPage = () => {
    const classes = useStyles()
    const [results, setResults] = useState([])
    const {searchResult} = useContext(SearchContext)
    useEffect(()=>{
        setResults(searchResult)
    },[searchResult])
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