import { useStyles } from './style'
import { SideBar } from '../../components/Home'
import { useState, useEffect, useContext } from 'react'
import HistoryResult from '../../components/HistoryResult'
import { Button } from '@mui/material'
import HEADER from '../../constant/header'
import quizApis from '../../api/quiz-api'
import AuthContext from '../../context/auth-context'
import LOCAL_CONSTANT from '../../constant/local-storage'
import BODY from '../../constant/body'
import QuizListCard from '../../components/QuizListCard'
const HistoryPage = ()=>{
    const classes = useStyles()
    const {auth} = useContext(AuthContext)
    const [end, setEnd] = useState(false)
    const [histories, setHistories] = useState([])
    useEffect(()=>{
        const loadHistories = async()=>{
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {}
            let response = await quizApis.getQuizHistory(payload, headers)
            updateHistories(response)
        }
        if(auth.user!=null && auth.user!==undefined){
            loadHistories()
        }
    },[auth.user])

    const updateHistories = (response) => {
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length === 10){
                sub_arr.pop()
            }
            else{
                setEnd(true)
            }
            let new_histories = [...histories]
            for(var i = 0; i < sub_arr.length; i++){
                new_histories.push(sub_arr[i])
            }
            setHistories(new_histories)
        }
    }
    
    const getMore = async ()=>{
        if(auth.user!=null && auth.user!==undefined){
            // let payload
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {
                [BODY.ROW]: histories.length
            }
            const response = await quizApis.getQuizHistory(payload, headers)
            updateHistories(response)
        }
    }

    return(
        <div className={classes.homeContainer}> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.pageContainer}>
                <div className={classes.title}>Reults</div>
                <div>
                    {histories.map((quiz, i) => {
                                return <QuizListCard key={i} quiz={quiz}/>
                    })}
                </div>
            </div>
            <div>
                {   
                    end?<div>No More</div>:
                    <Button onClick={getMore}>More</Button>
                }
            </div>
        </div>
    )
}

export default HistoryPage