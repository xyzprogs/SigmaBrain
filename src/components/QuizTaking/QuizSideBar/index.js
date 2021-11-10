import {useState} from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { useStyles } from './style';
import {QuestionContext} from '../../QuizTaking';


const QuizSideBar = (props) => {
    const classes = useStyles()
    const object = React.useContext(QuestionContext);
    const array = [];
    for(let i = 1 ; i <= object.num; i++){
        array.push(i);
    }

    const changeQuestions = (event) =>{
        props.changeIndex(-1, event.target.value - 1);
    }

    const showQuestions = (event) => {
        console.log(event);
    }

    return (
        <div className={classes.sideBarContainer}>
            {array
                .map((questionNum) => 
                    <div className={classes.sideBarSelect} onMouseEnter={showQuestions} key={questionNum}>
                         <Button onClick={changeQuestions}
                                 value={questionNum}>Question {questionNum}</Button>
                    </div>)}  
        </div>
    )
}

export default QuizSideBar
