import { useStyles } from './style'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import quizApis from '../../api/quiz-api'
import QuizCard from '../../components/QuizCard'
import { QUIZ_CATEGORY_NAME } from '../../constant/quiz-category'
import { Button } from '@mui/material'
const CategoryPage = () => {
    const {categoryId} = useParams()
    const classes = useStyles()
    const [quizzes, setQuizzes] = useState([])
    useEffect(()=>{
        const loadCategoryQuiz = async ()=>{
            const response = await quizApis.getCategoryQuiz(categoryId)
            console.log("calling this")
            setQuizzes(response.data)
        }
        loadCategoryQuiz()
    },[categoryId])

    const getMore = (event)=>{
        // event.preventDefault()
        console.log("get more")
    }

    return(
        <div className={classes.pageContainer}>
            <div className={classes.title}>{QUIZ_CATEGORY_NAME[categoryId]}</div>
            <div className={classes.quizContainer}>
                {quizzes.map((quiz, i) => {
                    return <QuizCard key={i} quiz={quiz} redirect={true}/>
                })}
            </div>
            <Button onClick={getMore}>More</Button>
        </div>
    )
}


export default CategoryPage