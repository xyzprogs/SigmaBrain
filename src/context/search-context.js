import { createContext, useState, useEffect } from 'react';
import quizApis from '../api/quiz-api';
import { useHistory } from 'react-router-dom'
import LOCAL_CONSTANT from '../constant/local-storage';
const SearchContext = createContext()

function SearchContextProvider(props){
    const [searchResult, setSearchResult] = useState([])
    const [end, setEnd] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const loadSearches = async ()=>{
            let keyword = localStorage.getItem(LOCAL_CONSTANT.SEARCH_KEYWORD)
            if(keyword!=null && keyword !== undefined){
                let response = await quizApis.getQuizSearchResult(keyword)
                updateSearches(response)
            }
            else{
                setEnd(true)
            }
        }
        loadSearches()
    }, [])

    const searchAndRedirect = async (keyword)=>{
        // let response = await quizApis.getQuizSearchResult(keyword)
        // console.log("search quiz:", response.data)
        // setSearchResult(response.data)
        let response = await quizApis.getQuizSearchResult(keyword)
        localStorage.setItem(LOCAL_CONSTANT.SEARCH_KEYWORD, keyword)
        // setSearchResult(response.data)
        updateSearches(response)
        console.log("search and redirect", response.data)
        history.push(`/searchResult`)
    }

    const updateSearches = (response) => {
        if(response.data.length==0)return
        let sub_arr = response.data
        console.log(response.data)
        if(sub_arr.length<5){
            setEnd(true)
        }
        let new_searches = [...searchResult]
        for(var i = 0; i < sub_arr.length; i++){
            new_searches.push(sub_arr[i])
        }
        setSearchResult(new_searches)
        localStorage.setItem(LOCAL_CONSTANT.LAST_SEARCH_ROW, new_searches.length-1)
    }

    const getMoreSearchResult = async ()=>{
        let keyword = localStorage.getItem(LOCAL_CONSTANT.SEARCH_KEYWORD)
        let row = localStorage.getItem(LOCAL_CONSTANT.LAST_SEARCH_ROW)
        let response = await quizApis.getMoreSearchResult(keyword, row)
        console.log(response.data)
        updateSearches(response)
    }

    return(
        <SearchContext.Provider value={{searchResult, end, searchAndRedirect, getMoreSearchResult}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext
export { SearchContextProvider }