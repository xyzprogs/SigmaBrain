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
import QuizListCard from '../../components/QuizListCard'
const CategoryPage = () => {
    const {categoryId} = useParams()
    const classes = useStyles()
    const [quizzes, setQuizzes] = useState([])
    const [end, setEnd] = useState(false)
    useEffect(()=>{
        const loadCategoryQuiz = async ()=>{
            const response = await quizApis.getCategoryQuiz(categoryId)
            updateQuizzes(response)
        }
        loadCategoryQuiz()
    },[categoryId])

    const updateQuizzes = (response) => {
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length !== 10){
                setEnd(true)
            }
            let new_quizzes = [...quizzes]
            for(var i = 0; i < sub_arr.length; i++){
                new_quizzes.push(sub_arr[i])
            }
            setQuizzes(new_quizzes)
        }
        else{
            setEnd(true)
        }
    }

    const getMore = async ()=>{
        // event.preventDefault()
        if(quizzes.length>0){
            let last_quiz_id = quizzes[quizzes.length-1][BODY.QUIZID]
            let payload = {
                [BODY.QUIZID]: last_quiz_id,
                [BODY.QUIZCATEGORY]: categoryId
            }
            const response = await quizApis.getMoreQuizByCategoryById(payload)
            updateQuizzes(response)
        }        
    }

    return(
        // <div className={classes.pageContainer}>
        //     <div>
        //         <SideBar className={classes.sidebar}/>
        //     </div>
        //     <div className={classes.boardContainer}>
        //             <div>
        //                 <div className={classes.title}>Category: {QUIZ_CATEGORY_NAME[categoryId]}</div>
        //             </div>
        //             <div className={classes.quizContainer}>
        //                 {quizzes.map((quiz, i) => {
        //                     return <QuizCard key={i} quiz={quiz} redirect={true}/>
        //                 })}
        //             </div>
        //             {
        //                 end?<div>no more</div>:
        //                 <Button onClick={getMore}>More</Button>
        //             }
        //     </div>
        // </div>
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.pageContainer}>
                <div>
                    <div className={classes.title}>Category: {QUIZ_CATEGORY_NAME[categoryId]}</div>
                    <div>
                        {quizzes.map((quiz, i) => {
                                    return <QuizListCard key={i} quiz={quiz}/>
                        })}
                    </div>
                    {
                        end?<div className={classes.endLine}>No More</div>
                        :<Button onClick={getMore}>More</Button>
                    }
                </div>
            </div>
        </div>
    )
}


export default CategoryPage