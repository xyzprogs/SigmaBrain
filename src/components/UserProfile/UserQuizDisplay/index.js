import { useStyles } from "./style"
import QuizCard from "../../QuizCard"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import quizApis from "../../../api/quiz-api"

const UserQuizDisplay = (props) => {
    const classes = useStyles()
    const [quizzes, setQuizzes] = useState([])
    const { userId } = useParams()
    useEffect(() => {
        const loadUserQuizzes = async () => {
            let response = await quizApis.getUserQuiz(userId)
            setQuizzes(response.data)
        }
        loadUserQuizzes()
    }, [userId])


    return (
        <div className={classes.displayBoardContainer}>
            <div className={classes.headerContainer}>
                <div className={classes.title}>
                    All Quizzes
                </div>
            </div>
            <div className={classes.quizContainer}>
                {quizzes.map((quiz, i) => {
                    return <QuizCard key={i} quiz={quiz} redirect={true}/>
                })}
            </div>
        </div>
    )
    
}

export default UserQuizDisplay