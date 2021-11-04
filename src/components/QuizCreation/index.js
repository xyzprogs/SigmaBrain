import React from 'react';
import { userStyles, useStyles } from "./style";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


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
        <div>
            <form>
                <Row>
                    <Card className={classes.creationCardContainer}>
                    <Card.Body>
                        <Col>
                            <Button>
                                <Card.Img className={classes.imageContainer} src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"/>
                            </Button>
                        </Col>
                        <Col>
                            <input type="text" className={classes.inputContainer} placeholder="Title"></input><br />
                            <input type="text" className={classes.inputContainer} placeholder="Timer"></input><br />
                            <input type="text" className={classes.inputContainer} placeholder="Description"></input><br />
                        </Col>
                    </Card.Body>
                    </Card>
                </Row>
                        {/* Use map on state array to render each question into a card object */}

                    <hr />
                    <Row>
                        {tempAnswers
                            .map((answers) => 
                                <div>
                                    <Card className={classes.creationCardContainer}>
                                        <Card.Header>
                                            Question {answers.QuestionNum + 1}
                                        </Card.Header>
                                        <Card.Title>
                                            <input type="text" className={classes.inputContainer} value={answers.QuestionText}></input>
                                        </Card.Title>
                                    </Card>
                                </div>)}
                        
                    </Row>
                <input type="submit" value="Save"></input>
            </form>
        </div>
    )
}

export default QuizCreation;
