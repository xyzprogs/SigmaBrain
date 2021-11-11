import { useStyles } from './style'
import QuizCard from '../../QuizCard'
import { useState, useEffect } from 'react'
import quizApis from '../../../api/quiz-api'
const MyQuizList = (props) => {
    const classes = useStyles()
    const [quizzes, setQuizzes] = useState([])


    useEffect(()=>{
        const loadUserQuiz = async ()=>{
            const response = await quizApis.getUserQuiz(props.userId)
            console.log(response.data)
            setQuizzes(response.data)
        }

        loadUserQuiz()
    },[props.userId])
    return(
        <div className={classes.quizListContainer}>
            MyQuizList
            <div className={classes.displayBoardContainer}>
                {quizzes.map((quiz, i) => {
                            return <QuizCard key={i} quiz={quiz} />
                })}
            </div>
        </div>
    )
}

export default MyQuizList