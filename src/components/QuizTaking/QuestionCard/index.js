import React from 'react';
import { userStyles, useStyles } from "./style";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import quizApis from '../../../api/quiz-api';
import { useState, useEffect } from 'react';

const QuestionCard = (props) => {
    const classes = userStyles();
    const questions = props.questions;
    const answerChoices = props.answerChoices;
    const correctChoices = props.correctChoices;
    const index = props.index;
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        const loadQuestionChoices = async () => {
            if(questions !== undefined){
                let response = await quizApis.getQuestionChoice(questions.questionId);
                if(response.data.length <= 0){
                    return
                }
                setAnswer(response.data);
                if(correctChoices[index] === -1){
                    for(let i = 0; i < response.data.length; i++){
                        if(parseInt(response.data[i].is_right_choice) === 1){
                            props.changeChoice(1, index, i);
                        }
                    }
                }
            }
        }
    if(answer.length === 0){
        loadQuestionChoices();
        console.log("once");
    }
        
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [correctChoices, answer])

    const changeQuestionHandler = (event) =>{
        if (event.target.name === 'next'){
            props.changeIndex(0, 1);
        }
        if (event.target.name === 'prev'){
            props.changeIndex(0, -1);
        }
        setAnswer([]);
    }

    const renderImage = () => {
        if(questions === undefined){
            return
        }
        if (questions.image !== null){
            return(<Card.Img variant="bottom" src={questions.image} className={classes.image} alt="No image Found"/>)
        }
    }

    const answerHandler = (event) => {
        props.changeChoice(0, index, event.target.value);
    }

    const buttonRender = (choice, index) => {
        if (index === parseInt(answerChoices[props.index])){
            return(
                <div key={choice.choiceId}>
                    <Button variant="success btn-lg btn-block" className={classes.buttonMargin} onClick={answerHandler} value={index}>
                        {choice.choice}
                    </Button>
                    <br />
                </div>
            );
        }else{
            return (
                <div key={choice.choiceId}>
                    <Button variant="primary btn-lg btn-block" className={classes.buttonMargin} onClick={answerHandler} value={index}>
                        {choice.choice}
                    </Button>
                    <br />
                </div>
            );
        }    
    }

    const nextButtonRender = () =>{
        if(questions === undefined){
            return
        }
        if ((index + 1) === answerChoices.length){
            return(<Button variant="danger" className={classes.buttonMargin} name='submit' onClick={props.changeFlag}>Submit</Button>)
        }else{
            return(<Button variant="info" className={classes.buttonMargin} name='next' onClick={changeQuestionHandler}>Next Question</Button>)
        }  
    }

    const prevButtonRender = () =>{
        if (index !== 0){
            return(<Button variant="info" className={classes.buttonMargin} name='prev' onClick={changeQuestionHandler}>Previous Question</Button>)
        }
    }

    const renderQuestion = () =>{
        if(questions === undefined){
            return
        }
        return(
            <div>
                <Card.Text className={classes.quizTextFont}> 
                    {questions.question}
                </Card.Text>
            </div>
        );
    }

    const renderAnswer = () =>{
        if(answer === undefined){
            return
        }
        return(answer.map((choice, index) => buttonRender(choice, index)));
    }

    return(
        // <div>

        // </div>
        <div>
            <Card className={classes.questionCardContainer}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title className={classes.titleFont}>
                        Question {props.index + 1}
                    </Card.Title>
                    {renderQuestion()}
                    {renderImage()}
                    {renderAnswer()}
                    {prevButtonRender()}
                    {nextButtonRender()}

                </Card.Body>
            </Card>
        </div>
    )
}


export default QuestionCard;