import { createContext, useState } from 'react';
import quizApis from '../api/quiz-api';
import { useHistory } from 'react-router-dom'
const SearchContext = createContext()

function SearchContextProvider(props){
    const [searchResult, setSearchResult] = useState([])
    const history = useHistory()
    const searchAndRedirect = async (keyword)=>{
        // let response = await quizApis.getQuizSearchResult(keyword)
        // console.log("search quiz:", response.data)
        // setSearchResult(response.data)
        let response = await quizApis.getQuizSearchResult(keyword)
        setSearchResult(response.data)
        console.log("search and redirect", response.data)
        history.push(`/searchResult`)
    }

    return(
        <SearchContext.Provider value={{searchResult, searchAndRedirect}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext
export { SearchContextProvider }