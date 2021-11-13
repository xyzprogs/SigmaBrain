import React from 'react'
import { useStyles } from './style'
import { SideBar} from '../../components/Home'
import SearchResult from '../../components/SearchResult'


const SearchResultPage = () => {
    const classes = useStyles()

    return (
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.searchResults}>
                <SearchResult />
            </div>
        </div>
    )
}

export default SearchResultPage;