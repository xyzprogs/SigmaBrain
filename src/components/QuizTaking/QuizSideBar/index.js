import {useState} from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { useStyles } from './style';

const QuizSideBar = (props) => {
    const classes = useStyles()
    const object = props;
    const array = [];
    for(let i = 1 ; i <= object.num; i++){
        array.push(i);
    }

    const changeQuestions = (event) =>{
        props.changeIndex(-1, event.target.value - 1);
    }

    const buttonRender = (questionNum) => {
        // eslint-disable-next-line eqeqeq
        if(object.questions.questionNum == questionNum - 1){
            return(
                <div className={classes.sideBarSelect} onMouseEnter={showQuestions} key={questionNum}>
                    <Button variant="success" onClick={changeQuestions} value={questionNum}>Question {questionNum}</Button>
                </div>
            );
        }else{
            return(
                <div className={classes.sideBarSelect} onMouseEnter={showQuestions} key={questionNum}>
                    <Button onClick={changeQuestions} value={questionNum}>Question {questionNum}</Button>
                </div>
            );
        }
    }



    const showQuestions = (event) => {
        console.log(event);
    }

    return (
        <div className={classes.sideBarContainer}>
            {array.map((questionNum) => buttonRender(questionNum))}  
        </div>
    )
}

export default QuizSideBar
