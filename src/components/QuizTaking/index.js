import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth-context';
import { useStyles } from "./style"
import HEADER from '../../constant/header';
import QuestionCard from './QuestionCard';
import QuizSideBar from './QuizSideBar';
import QuizResult from './QuizResult';
import quizApis from '../../api/quiz-api';
// The following array is hard coded and will be replaced with
// data queried from the database.

const QuizTaking = () => {
    // const classes = userStyles()
    const classes = useStyles();
    const { auth } = useContext(AuthContext)
    const [index, setIndex] = useState(0);
    const [flag, setFlag] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answerChoices, setAnswerChoices] = useState([[]]);
    const [correctChoices, setCorrectChoices] = useState([]);
    

    const quizId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const loadQuestions = async () =>{
            let response = await quizApis.getQuestion(quizId);
            if(response.data.length <= 0){
                return
            }
            setQuestions(response.data);
            setAnswerChoices(new Array(response.data.length).fill(new Array(2).fill(-1)));
            setCorrectChoices(new Array(response.data.length).fill(-1));
        }
        if(questions.length === 0){
            loadQuestions();
        }

    }, [quizId, questions, index])

    const changeIndex = (type, num) => {
        let temp;
        if (type === 0){
            temp = index + num;
        }else{
            temp = num;
        }
        setIndex(temp);
    }

    const restartQuiz = () => {
        setFlag(false);
        setQuestions([]);
        setIndex(0);
    }

    const saveResults = async (correct) => {
        const payload = {
        "quizId" : quizId,
        "quizGrade" : (correct/answerChoices.length).toFixed(2)
        }

        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        await quizApis.createQuizGrade(payload, headers);
    }

    const changeFlag = () => {
        setFlag(true);
        let correct = 0;
        for (let i = 0; i < answerChoices.length; i++){
            if (parseInt(answerChoices[i]) === correctChoices[i]){
                correct++;
            }
        }
        saveResults(correct);
    }

    const changeCorrectChoice = (index, choice) => {
        let temp = [];
        for (let i = 0; i < answerChoices.length; i++){
            temp.push(correctChoices[i]);
        }
        temp[index] = choice;
        setCorrectChoices(temp);
    }

    const changeAnswerChoice = (choice) =>{
        let temp = [];
        for (let i = 0; i < answerChoices.length; i++){
            temp.push(answerChoices[i]);
        }
        let firstComma = choice.indexOf(",");
        temp[index] = [].fill(-1);
        temp[index][0] = parseInt(choice.substring(0, firstComma));
        temp[index][1] = choice.substring(firstComma + 1);
        setAnswerChoices(temp);
    }

    const renderCheck = () => {
        if(flag){
            return(
                <div>
                    <div className={classes.quizContainer}>
                        <QuizResult quizId={quizId} answerChoices={answerChoices} correctChoices={correctChoices} questions={questions}
                            restartQuiz={restartQuiz}
                        />
                    </div>
                </div>
            );
        }else{
            return (
                <div>
                    <div className={classes.sidebar}>
                        <QuizSideBar index={index} num={questions.length} changeIndex={changeIndex} />
                    </div>
                    <div className={classes.quizContainer}>
                        <QuestionCard 
                            questions={questions[index]} index={index} answerChoices={answerChoices} correctChoices={correctChoices}
                            changeIndex={changeIndex} 
                            changeFlag={changeFlag} 
                            changeCorrectChoice={changeCorrectChoice}
                            changeAnswerChoice={changeAnswerChoice}
                        />
                    </div>
                </div>
            );
        }
    }

    return(
        <div>
            {renderCheck()}
        </div>
    )
}

export default QuizTaking;