import React from 'react';
import { userStyles, useStyles } from "./style";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const CreationCard = () => {
    const classes = userStyles();

    return (
        <div>
            <form>
                <Card className={classes.creationCardContainer}>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Img className={classes.imageContainer} src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"/>
                        </Col>
                        <Col>
                            <input type="text" className={classes.inputContainer} placeholder="Title"></input><br />
                            <input type="text" className={classes.inputContainer} placeholder="Timer"></input><br />
                            <input type="text" className={classes.inputContainer} placeholder="Description"></input><br />
                        </Col>
                    </Row>
                        {/* Use map on state array to render each question into a card object */}

                    <hr />
                    <Row>
                        <Card className={classes.creationCardContainer}>
                            <Card.Header>Question #</Card.Header>
                            <ol>
                                <li>Answer 1 <Button variant="danger">Delete</Button></li>
                                <li>Answer 2 <Button variant="danger">Delete</Button></li>
                                <li>Answer 3 <Button variant="danger">Delete</Button></li>
                            </ol>
                            <Button variant="primary"> Add answer</Button>
                        </Card>
                    </Row>
                    </Card.Body>
                </Card>
                <input type="submit" value="Save"></input>
            </form>
        </div>
    )
}

export default CreationCard;
