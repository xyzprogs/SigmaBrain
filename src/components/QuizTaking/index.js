import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth-context';
import { useStyles } from "./style"
import QuestionCard from './QuestionCard';
import QuizSideBar from './QuizSideBar';
import QuizResult from './QuizResult';
import quizApis from '../../api/quiz-api';
import NoUserModal from '../NoUserModal';
// The following array is hard coded and will be replaced with
// data queried from the database.

const QuizTaking = ({ flag, setFlag, answerChoices, setAnswerChoices, correctChoices, setCorrectChoices, changeFlag }) => {
    // const classes = userStyles()
    const classes = useStyles();
    const { auth } = useContext(AuthContext)
    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const quizId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const loadQuestions = async () => {
            let response = await quizApis.getQuestion(quizId);
            if (response.data.length <= 0) {
                return
            }
            let answerArray = [];
            let correctArray = [];

            let answerChoices = await quizApis.getQuestionChoiceByQuizId(quizId);
            if (answerChoices.data.length <= 0) {
                return
            }

            let answerArrayBuilder = [];
            let correctArrayBuilder = [];

            for(let i = 0; i < response.data.length; i++){
                let index = 0;
                for(let j = 0; j < answerChoices.data.length; j++){
                    if (answerChoices.data[j].questionId === response.data[i].questionId){
                        answerArrayBuilder.push(answerChoices.data[j])
                        if(answerChoices.data[j].is_right_choice){
                            correctArrayBuilder.push(index);
                        }
                        index++;
                    }

                }
                answerArray.push(answerArrayBuilder);
                correctArray.push(correctArrayBuilder);
                answerArrayBuilder = [];
                correctArrayBuilder = [];
            }

            setQuestions(response.data);
            setAnswers(answerArray);
            setCorrectChoices(correctArray);
            setAnswerChoices(new Array(response.data.length).fill(new Array(2).fill(-1)));
        }
        if (!auth.loggedIn) {
            setShowModal(true);
        }

        if (questions.length === 0) {
            loadQuestions();
        }

    }, [quizId, questions, auth])

    const changeIndex = (type, num) => {
        let temp;
        if (type === 0) {
            temp = index + num;
        } else {
            temp = num;
        }
        setIndex(temp);
    }

    const restartQuiz = () => {
        setFlag(false);
        setQuestions([]);
        setIndex(0);
    }


    const changeAnswerChoice = (choice) => {
        let temp = [];
        for (let i = 0; i < answerChoices.length; i++) {
            temp.push(answerChoices[i]);
        }
        let firstComma = choice.indexOf(",");
        temp[index] = [].fill(-1);
        temp[index][0] = parseInt(choice.substring(0, firstComma));
        temp[index][1] = choice.substring(firstComma + 1);
        setAnswerChoices(temp);
    }

    const renderCheck = () => {
        if (flag) {
            return (
                <div>
                    <div className={classes.quizContainer}>
                        <QuizResult quizId={quizId} answerChoices={answerChoices} correctChoices={correctChoices} questions={questions}
                            restartQuiz={restartQuiz}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className={classes.sidebar}>
                        <QuizSideBar index={index} num={questions.length} changeIndex={changeIndex} />
                    </div>
                    <div className={classes.quizContainer}>
                        <QuestionCard
                            questions={questions[index]} answers={answers[index]} index={index} answerChoices={answerChoices} correctChoices={correctChoices}
                            changeIndex={changeIndex}
                            changeFlag={changeFlag}
                            changeAnswerChoice={changeAnswerChoice}
                        />
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            <NoUserModal show={showModal} continue={false} handleClose={() => setShowModal(false)}></NoUserModal>
            {renderCheck()}
        </div>
    )
}

export default QuizTaking;