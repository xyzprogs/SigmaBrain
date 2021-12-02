import { useStyles } from './style'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import quizApis from '../../api/quiz-api';
import QuizTaking from '../../components/QuizTaking'
import Countdown from 'react-countdown';

const QuizTakingPage = () => {
    const classes = useStyles();
    const { quizId } = useParams();
    const [quizTime, setQuizTime] = useState(0)

    useEffect(() => {
        const getQuiz = async () =>{
            let quiz = await quizApis.getQuiz(quizId)
            let timeLimit = quiz.data[0].timeLimit * 60 * 1000
            setQuizTime(timeLimit)
        }   

        getQuiz()
    }, [])


    return (

        <div className={classes.pageContainer}>
            <QuizTaking />
            <Countdown 
            key = {quizTime.toString()}
            date = {Date.now() + quizTime} 
            />
        </div>
    )
}

export default QuizTakingPage;