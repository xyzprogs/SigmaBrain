import { useStyles } from './style'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import quizApis from '../../api/quiz-api'
import QuizCard from '../../components/QuizCard'
import { QUIZ_CATEGORY_NAME } from '../../constant/quiz-category'
import { Button } from '@mui/material'
import LOCAL_CONSTANT from '../../constant/local-storage'
import SideBar from '../../components/Home/SideBar'
import BODY from '../../constant/body'
const CategoryPage = () => {
    const {categoryId} = useParams()
    const classes = useStyles()
    const [quizzes, setQuizzes] = useState([])
    const [end, setEnd] = useState(false)
    useEffect(()=>{
        const loadCategoryQuiz = async ()=>{
            const response = await quizApis.getCategoryQuiz(categoryId)
            // setQuizzes(response.data)
            // if(response.data.length>0){
            //     localStorage.setItem(LOCAL_CONSTANT.LAST_QUIZ_ID, response.data[response.data.length-1][BODY.QUIZID])
            //     localStorage.setItem(LOCAL_CONSTANT.LAST_QUIZ_DATE, response.data[response.data.length-1]["creationTime"])
            // }
            updateQuizzes(response)
        }
        loadCategoryQuiz()
    },[categoryId])

    const updateQuizzes = (response) => {
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length == 11){
                console.log("last quiz id",response.data[response.data.length-1][BODY.QUIZID] )
                localStorage.setItem(LOCAL_CONSTANT.LAST_QUIZ_ID, response.data[response.data.length-1][BODY.QUIZID])
                localStorage.setItem(LOCAL_CONSTANT.LAST_QUIZ_DATE, response.data[response.data.length-1]["creationTime"])
                sub_arr.pop()
            }
            else{
                setEnd(true)
            }
            let new_quizzes = [...quizzes]
            for(var i = 0; i < sub_arr.length; i++){
                new_quizzes.push(sub_arr[i])
            }
            setQuizzes(new_quizzes)
        }
    }

    const getMore = async ()=>{
        // event.preventDefault()
        console.log("calling get more!")
        let last_quiz_id = localStorage.getItem(LOCAL_CONSTANT.LAST_QUIZ_ID)
        if(last_quiz_id != null){
            
            let payload = {
                [BODY.QUIZID]: last_quiz_id,
                [BODY.QUIZCATEGORY]: categoryId
            }
            const response = await quizApis.getMoreQuizByCategoryById(payload)
            // if(response.data.length>0){
            //     let more = [...quizzes]
            //     for(var i = 0; i < response.data.length; i++){
            //         more.push(response.data[i])
            //     }
            //     setQuizzes(more)
            //     localStorage.setItem(LOCAL_CONSTANT.LAST_QUIZ_ID, response.data[response.data.length-1][BODY.QUIZID])
            //     localStorage.setItem(LOCAL_CONSTANT.LAST_QUIZ_DATE, response.data[response.data.length-1]["creationTime"])
            // }
            updateQuizzes(response)
        }
    }

    return(
        <div className={classes.pageContainer}>
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.boardContainer}>
                    <div>
                        <div className={classes.title}>{QUIZ_CATEGORY_NAME[categoryId]}</div>
                    </div>
                    <div className={classes.quizContainer}>
                        {quizzes.map((quiz, i) => {
                            return <QuizCard key={i} quiz={quiz} redirect={true}/>
                        })}
                    </div>
                    {
                        end?<div>no more</div>:
                        <Button onClick={getMore}>More</Button>
                    }
            </div>
        </div>
    )
}


export default CategoryPage