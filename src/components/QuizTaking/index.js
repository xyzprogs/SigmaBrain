import React, { useState } from 'react'
// import { userStyles, useStyles } from "./style"
import QuestionCard from '../QuestionCard'

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
        answerChoices: ["SigmaBrain", "CandyCane", "Santa Claus", "JoJo"]
    },
    {
        choiceNum: 4,
        answerChoices: ["SigmaBrain", "StoneBlue", "420 Blaze IT", "Jhinigami"]
    },
    {
        choiceNum: 4,
        answerChoices: ["Erasure Head", "Present Mic", "All Might", "Professor McKenna"]
    }
]


const QuizTaking = () => {
    // const classes = userStyles()

    const [index, setIndex] = useState(0);
    const changeIndex = (num) => {
        let temp = index + num;
        setIndex(temp);
    }

    return(
        <QuestionContext.Provider value={{questions: tempQuestions[index], answers: tempAnswers[index]}}>
            <QuestionCard changeIndex={changeIndex}/>
        </QuestionContext.Provider>
    );
}

const handleCallBack = (num) => {
    this.state.index += num;
}

export default QuizTaking;