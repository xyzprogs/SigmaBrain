import React, { useContext } from 'react'
import { useStyles } from './style'
import { SideBar} from '../../components/Home'
import SearchResult from '../../components/SearchResult'
import { useEffect, useState } from 'react'
import SearchContext from '../../context/search-context'
import { Button } from '@mui/material'
const SearchResultPage = () => {
    const classes = useStyles()
    const [results, setResults] = useState([])
    const {searchResult, getMoreSearchResult, end} = useContext(SearchContext)
    useEffect(()=>{
        setResults(searchResult)
    },[searchResult])
    return (
        <div className={classes.homeContainer}> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.searchResults}>
                <div className={classes.title}>Reults</div>
                <SearchResult 
                results={results}/>
            </div>
            <div>
                {   
                    end?<div>No More</div>:
                    <Button onClick={getMoreSearchResult}>More</Button>
                }
            </div>
        </div>
    )
}

export default SearchResultPage;