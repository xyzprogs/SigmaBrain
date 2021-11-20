import React from 'react'
import { useStyles } from './style';
import SearchResultCard from './SearchResultCard';

const SearchResult = ({results}) => {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            {results.map(r => {
                return  <div><SearchResultCard
                            result={r}
                        /></div>
            })}
        </div>
    )
}

export default SearchResult