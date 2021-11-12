import React, { useState } from 'react'
import { useStyles } from "./style"
import QuestionCard from './QuestionCard';
import QuizSideBar from './QuizSideBar';
import QuizResult from './QuizResult';
import { useHistory } from 'react-router';

// The following array is hard coded and will be replaced with
// data queried from the database.
const tempQuestions = [
    {
        questionNum: 0,
        question: "What is the name of our website?",
        image: null
    },
    {
        questionNum: 1,
        question: "What is the name our team?",
        image: null
    },
    {
        questionNum: 2,
        question: "Who likes container stores?",
        image: "https://www3.cs.stonybrook.edu/~richard/images/personal_pics/McKennaProfile.jpg"
    }
]

// The following array is hard coded and will be replaced with
// data queried from the database.

const tempAnswers = [
    {
        choiceNum: 4,
        answerChoices: ["SigmaBrain", "CandyCane", "Santa Claus", "JoJo"],
        correctAnswer: 0
    },
    {
        choiceNum: 4,
        answerChoices: ["SigmaBrain", "StoneBlue", "420 Blaze IT", "Jhinigami"],
        correctAnswer: 1
    },
    {
        choiceNum: 4,
        answerChoices: ["Erasure Head", "Present Mic", "All Might", "Professor McKenna"],
        correctAnswer: 3
    }
]


const QuizTaking = () => {
    // const classes = userStyles()

    let history = useHistory();
    const classes = useStyles();

    const [index, setIndex] = useState(0);
    const [flag, setFlag] = useState(false);
    const [answerChoices, setAnswerChoices] = useState(new Array(tempQuestions.length).fill(-1));

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
        setAnswerChoices(new Array(tempQuestions.length).fill(-1));
        setIndex(0);
    }

    const changeFlag = () => {
        setFlag(true);
    }

    const changeAnswerChoice = (index, choice) => {
        let temp = [];
        for (let i = 0; i < answerChoices.length; i++){
            temp.push(answerChoices[i]);
        }
        temp[index] = choice;
        setAnswerChoices(temp);
    }

    const renderCheck = () => {
        if(flag){
            return(
                <div>
                    <div className={classes.quizContainer}>
                        <QuizResult answerChoices={answerChoices} restartQuiz={restartQuiz} answers={tempAnswers}/>
                    </div>
                </div>
            );
        }else{
            return (
                <div>
                     <div className={classes.sidebar}>
                        <QuizSideBar questions={tempQuestions[index]} num={tempQuestions.length} changeIndex={changeIndex} />
                    </div>
                    <div className={classes.quizContainer}>
                        <QuestionCard answerChoices={answerChoices} questions={tempQuestions[index]} answers={tempAnswers[index]} num={tempQuestions.length} changeIndex={changeIndex} changeFlag={changeFlag} changeAnswerChoice={changeAnswerChoice}/>
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