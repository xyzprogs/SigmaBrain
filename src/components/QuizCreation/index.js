import React from 'react';
import { userStyles, useStyles } from "./style";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const tempAnswers = [
    {
        QuestionNum: 0,
        QuestionText: "What is the name of our website?",
        Answers: ["Hello", "Cheese", "SigmaBrain"],
        CorrectAnswer: 2
    },
    {
        QuestionNum: 1,
        QuestionText: "What is best anime?",
        Answers: ["Hello", "Cheese", "Shingeki No Kyojin"],
        CorrectAnswer: 2
    },
]


const QuizCreation = () => {
    const classes = userStyles();

    return (
        <div className={classes.creationCardContainer}>
            <form>
                <Row>
                    <Card>
                    <Card.Body>
                        <Col>
                            <Button>
                                <Card.Img className={classes.imageContainer} src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"/>
                            </Button>
                        </Col>
                        <Col>
                            <input type="text" className={classes.inputContainer} placeholder="Title"></input>
                            <input type="text" className={classes.inputContainer} placeholder="Timer"></input>
                            <input type="text" className={classes.inputContainer} placeholder="Description"></input>
                        </Col>
                    </Card.Body>
                    </Card>
                </Row>
                        {/* Use map on state array to render each question into a card object */}

                    <hr />
                    <Row>
                        {tempAnswers.map((answers) => 
                                <div>
                                    <Card className={classes.creationCardContainer}>
                                        <Card.Header>
                                            Question {answers.QuestionNum + 1}
                                        </Card.Header>
                                        <Card.Body>
                                        <Card.Title>
                                            <input type="text" className={classes.inputContainer} value={answers.QuestionText}></input>
                                        </Card.Title>
                                        
                                        <ListGroup>
                                        {answers.Answers.map((answerChoices) => 
                                            <ListGroupItem><input type="text" className={classes.inputContainer} value={answerChoices}></input></ListGroupItem>)}

                                        </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>)}
                        
                    </Row>
                <input type="submit" value="Save"></input>
            </form>
        </div>
    )
}

export default QuizCreation;
