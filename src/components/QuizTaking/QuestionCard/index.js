import React from 'react';
import { userStyles} from "./style";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const QuestionCard = (props) => {
    const classes = userStyles();
    const questions = props.questions;
    const answers = props.answers;
    const answerChoices = props.answerChoices;
    const index = props.index;

    const changeQuestionHandler = (event) =>{
        if (event.target.name === 'next'){
            props.changeIndex(0, 1);
        }
        if (event.target.name === 'prev'){
            props.changeIndex(0, -1);
        }
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
        props.changeAnswerChoice(event.target.value);
    }

    const buttonRender = (choice, index) => {
        if (index === parseInt(answerChoices[props.index][0])){
            return(
                <div key={choice.choiceId}>
                    <Button variant="success btn-lg" className={classes.buttonMargin} onClick={answerHandler} value={[index, choice.choice]}>
                        {choice.choice}
                    </Button>
                    <br />
                </div>
            );
        }else{
            return (
                <div key={choice.choiceId}>
                    <Button variant="success btn-lg" className={classes.buttonMargin} onClick={answerHandler} value={[index, choice.choice]}>
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
            return(<Button variant="contained" className={classes.nextButton} name='submit' onClick={props.changeFlag}>Submit</Button>)
        }else{
            return(<Button variant="contained" className={classes.nextButton} name='next' onClick={changeQuestionHandler}>Next Question</Button>)
        }  
    }

    const prevButtonRender = () =>{
        if (index !== 0){
            return(<Button variant="contained" className={classes.previousButton} name='prev' onClick={changeQuestionHandler}>Previous Question</Button>)
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
        if(answers === undefined){
            return
        }
        return(answers.map((choice, index) => buttonRender(choice, index)));
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