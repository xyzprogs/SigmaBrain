import { useStyles } from './style'
import { SideBar } from '../../components/Home'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth-context';
import quizApis from "../../api/quiz-api"
import HEADER from '../../constant/header';
import QuizCard from '../../components/QuizCard';
import { Button } from '@mui/material';
const TakeLaterPage = ()=>{
    const classes = useStyles()
    const {auth} = useContext(AuthContext)
    const [quizzes, setQuizzes] = useState([])
    const [end, setEnd] = useState(false)
    useEffect(()=>{
        const loadTakeLaterQuiz = async ()=>{
            if(auth.user != null){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await quizApis.getTakeLaterQuiz(headers)
                updateTakeLater(response)
            }
        }

        loadTakeLaterQuiz()
    },[auth.user])

    const updateTakeLater = (response)=>{
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length !== 10){
                setEnd(true)
            }
            let newarr = [...quizzes]
            for(var i = 0; i < sub_arr.length; i++){
                newarr.push(sub_arr[i])
            }
            setQuizzes(newarr)
        }
    }

    const loadMore = async ()=>{
        if(auth.user != null){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let row = quizzes.length
            let response = await quizApis.getTakeLaterQuiz(headers, row)
            updateTakeLater(response)
        }
    }


    return(
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.quizListContainer}>
                MyQuizList
                <div className={classes.displayBoardContainer}>
                    {quizzes.map((quiz, i) => {
                                return <QuizCard key={i} quiz={quiz} redirect={true}/>
                    })}
                </div>
                {
                    end?<div>No More</div>
                    :<Button onClick={loadMore}>More</Button>
                }
            </div>
        </div>
    )
}

export default TakeLaterPage