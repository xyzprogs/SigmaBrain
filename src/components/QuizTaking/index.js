import React, { useState, useEffect } from 'react'
import { useContext, useStyles } from "./style"
import QuestionCard from './QuestionCard';
import QuizSideBar from './QuizSideBar';
import QuizResult from './QuizResult';
import quizApis from '../../api/quiz-api';
// The following array is hard coded and will be replaced with
// data queried from the database.

const QuizTaking = () => {
    // const classes = userStyles()
    const classes = useStyles();

    const [index, setIndex] = useState(0);
    const [flag, setFlag] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answerChoices, setAnswerChoices] = useState([]);
    const [correctChoices, setCorrectChoices] = useState([]);
    

    const quizId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const loadQuestions = async () =>{
            let response = await quizApis.getQuestion(quizId);
            if(response.data.length <= 0){
                return
            }
            setQuestions(response.data);
            setAnswerChoices(new Array(response.data.length).fill(-1));
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

    const changeFlag = () => {
        setFlag(true);
    }

    const changeChoice = (type, index, choice) => {
        let temp = [];
        for (let i = 0; i < answerChoices.length; i++){
            if(type === 0){
                temp.push(answerChoices[i]);
            }else{
                temp.push(correctChoices[i]);
            }
        }
        temp[index] = choice;
        if(type === 0){
            setAnswerChoices(temp);
        }else{
            setCorrectChoices(temp);
        }
    }


    const renderCheck = () => {
        if(flag){
            return(
                <div>
                    <div className={classes.quizContainer}>
                        <QuizResult answerChoices={answerChoices} correctChoices={correctChoices} 
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
                            changeChoice={changeChoice}
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