import { useStyles } from './style'
import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import quizApis from '../../api/quiz-api';
import QuizTaking from '../../components/QuizTaking'
import Countdown from 'react-countdown';
import HEADER from '../../constant/header';
import AuthContext from '../../context/auth-context';


const QuizTakingPage = () => {
    const classes = useStyles();
    const { auth } = useContext(AuthContext)
    const { quizId } = useParams();

    const [quizTime, setQuizTime] = useState(0)
    const [flag, setFlag] = useState(false);
    const [answerChoices, setAnswerChoices] = useState([[]]);
    const [correctChoices, setCorrectChoices] = useState([]);


    useEffect(() => {
        const getQuiz = async () => {
            let quiz = await quizApis.getQuiz(quizId)
            let timeLimit = quiz.data[0].timeLimit * 60 * 1000
            setQuizTime(timeLimit)
        }
        getQuiz()
    }, [])

    const saveResults = async (correct) => {
        const payload = {
            "quizId": quizId,
            "quizGrade": (correct / answerChoices.length).toFixed(2)
        }

        if (auth.user !== null) {
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN]: token
            }
            await quizApis.createQuizGrade(payload, headers);
        }
    }

    const changeFlag = () => {
        setFlag(true);
        let correct = 0;
        for (let i = 0; i < answerChoices.length; i++) {
            if (parseInt(answerChoices[i]) === correctChoices[i]) {
                correct++;
            }
        }
        saveResults(correct);
    }

    return (

        <div className={classes.pageContainer}>

            <QuizTaking
                flag={flag}
                setFlag={setFlag}
                answerChoices={answerChoices}
                setAnswerChoices={setAnswerChoices}
                correctChoices={correctChoices}
                setCorrectChoices={setCorrectChoices}
                changeFlag={changeFlag}
            />


            {!flag &&
                <Countdown
                    key={quizTime.toString()}
                    date={Date.now() + quizTime}
                    onTick={() => setQuizTime(quizTime - 1000)}
                    onComplete={() => changeFlag()}
                />
            }
        </div>
    )
}

export default QuizTakingPage;