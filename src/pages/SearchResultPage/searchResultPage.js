import React from 'react'
import { useStyles } from './style'
import { SideBar} from '../../components/Home'
import NavBar from '../../components/NavBar/index'
import SearchResult from '../../components/NavBar/SearchBar/SearchResult'


const SearchResultPage = () => {
    const classes = useStyles()

    return (
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.header}>
                <NavBar />
            </div>
            <div className={classes.searchResults}>
                <SearchResult />
            </div>
        </div>
    )
}

export default SearchResultPage;