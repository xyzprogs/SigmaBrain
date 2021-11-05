import React, { useState } from 'react'
// import { userStyles, useStyles } from "./style"
import QuestionCard from '../QuestionCard'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router';

export const QuestionContext = React.createContext();

// The following array is hard coded and will be replaced with
// data queried from the database.
const tempQuestions = [
    {
        questionNum: 0,
        question: "What is the name of our website?"
    },
    {
        questionNum: 1,
        question: "What is the name our team?"
    },
    {
        questionNum: 2,
        question: "Who likes container stores?"
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

    const [index, setIndex] = useState(0);
    const [flag, setFlag] = useState(false);
    const [answerChoices, setAnswerChoices] = useState(new Array(tempQuestions.length).fill(-1));

    const changeIndex = (num) => {
        let temp = index + num;
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

    const handleSubmit = () => {
        let correct = 0;
        for (let i = 0; i < answerChoices.length; i++){
            if (answerChoices[i] == tempAnswers[i].correctAnswer){
                correct++;
            }
        }
        return(
            <div>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Congratulations!</Card.Title>
                    <Card.Text>
                        You got {correct} out of {tempQuestions.length} questions right!
                    </Card.Text>
                    <Button onClick={restartQuiz}>Retake Quiz</Button>
                    <Button onClick={() => history.push('/')}>Return Home</Button>
                </Card.Body>
            </Card>
        </div>
        );
    }

    const renderCheck = () => {
        if(flag){
            return(handleSubmit());
        }else{
            return (
                <QuestionContext.Provider value={{questions: tempQuestions[index], answers: tempAnswers[index], num: 3}}>
                    <QuestionCard changeIndex={changeIndex} handleSubmit={handleSubmit} changeFlag={changeFlag} changeAnswerChoice={changeAnswerChoice}/>
                </QuestionContext.Provider>
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