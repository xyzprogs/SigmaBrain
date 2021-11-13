import {useState} from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { useStyles } from './style';

const QuizSideBar = (props) => {
    const classes = useStyles()
    const index = props.index;
    const num = props.num;
    const array = [];
    for(let i = 0 ; i < num; i++){
        array.push(i);
    }

    const changeQuestions = (event) =>{
        props.changeIndex(-1, parseInt(event.target.value));
    }

    const buttonRender = (questionNum) => {
        if(index === questionNum){
            return(
                <div className={classes.sideBarSelect} onMouseEnter={showQuestions} key={questionNum}>
                    <Button variant="success" onClick={changeQuestions} value={questionNum}>Question {questionNum + 1}</Button>
                </div>
            );
        }else{
            return(
                <div className={classes.sideBarSelect} onMouseEnter={showQuestions} key={questionNum}>
                    <Button onClick={changeQuestions} value={questionNum}>Question {questionNum + 1}</Button>
                </div>
            );
        }
    }

    const showQuestions = (event) => {

    }

    return (
        <div className={classes.sideBarContainer}>
            {array.map((questionNum) => buttonRender(questionNum))}  
        </div>
    )
}

export default QuizSideBar
