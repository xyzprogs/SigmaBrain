import React from 'react';
import { userStyles, useStyles } from "./style";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {QuestionContext} from '../QuizTaking';



const QuestionCard = (props) => {
    const classes = userStyles();
    const object = React.useContext(QuestionContext);
    const questions = object.questions;
    const answers = object.answers;
    const buttonHandler = (event) =>{
        if (event.target.name === 'next'){
            props.changeIndex(1);
        }
        if (event.target.name === 'prev'){
            props.changeIndex(-1);
        }
    
        console.log(event.target.name);
    }

    return(
        <div>
            <Card className={classes.questionCardContainer}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title className={classes.titleFont}>Question {questions.questionNum + 1}</Card.Title>
                    <Card.Text className={classes.quizTextFont}>
                        {questions.question}
                    </Card.Text>
                    {answers.answerChoices
                        .map((choice) => 
                            <div key={answers.answerChoices.indexOf(choice)}>
                                <Button variant="primary btn-lg btn-block" className={classes.buttonMargin} onClick={buttonHandler} id={answers.answerChoices.indexOf(choice)}>
                                    {choice}
                                </Button>
                                <br />
                            </div>)}
                    
                    <Button variant="info" className={classes.buttonMargin} name='prev' onClick={buttonHandler}>Previous Question</Button>
                    <Button variant="info" className={classes.buttonMargin} name='next' onClick={buttonHandler}>Next Question</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default QuestionCard;