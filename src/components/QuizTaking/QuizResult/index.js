import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { userStyles, useStyles } from "./style";
import userApis from '../../../api/user-api'
import { Modal } from 'react-bootstrap/';


const QuizResult = (props) =>{

    let history = useHistory();
    const classes = userStyles();
    const answerChoices = props.answerChoices;
    const questions = props.questions;
    const restartQuiz = props.restartQuiz;
    const correctChoices = props.correctChoices;
    const [showModal, setShowModal] = useState(false);
    const [experience, setExperience] = useState(0);
    const [prevExperience, setPrevExperience] = useState(0);

    let correct = 0;
    for (let i = 0; i < answerChoices.length; i++){
        for(let j = 0; j < correctChoices[i].length; j++){
            if(answerChoices[i][0] === correctChoices[i][j]){
                correct++;
            }
        }
    }

    const handleClose = () => {
        setShowModal(false);
    }
    const convertExperienceToLevel = (experience) =>{
        let level = 1;
        let threshHold = 5;
        let flag = true;
        while(flag){
            if (threshHold > experience){
                flag = false;
            }else{
                experience -= threshHold;
                level += 1;
            }
        }
        return {"level": level, "experience": experience, "leftOver": threshHold - experience}
    }

    useEffect(() => {
        const handleExperience = async () => {
            let id = localStorage.getItem("uid");
            if (id === null){
                alert(`Create an account to save your results!`);
                return
            }
            let response = await userApis.getUserInfo(id);
            if(response.data.length <= 0){
                return
            }
            setPrevExperience(response.data[0].experience);
            const payload = {
                "userId" : id,
                "experience" : response.data[0].experience + correct
            }
            let response2 = await userApis.updateUserExperience(payload);
            if(response2.data.length <= 0){
                return
            }
            setShowModal(true);
            setExperience(response.data[0].experience + correct);
        }
        
        handleExperience();
        
    }, [])

    const renderCards = (index, question, answerChoices) => {
        if(answerChoices[1] === -1){
            return (
                <Card key={index} className={classes.resultNoSelectionCardContainer}>
                    <Card.Header>
                        Question {index + 1}
                    </Card.Header>
                    <Card.Title>
                        {question}
                    </Card.Title>
                    <Card.Text>
                        You selected: No Answer Choice Selected
                    </Card.Text>
                </Card>
            );
        }
        let correct = false;
        for(let x = 0; x < correctChoices[index].length; x++){
            if(answerChoices[0] === correctChoices[index][x]){
                correct = true;
                break;
            }
        }
        return (
            <Card key={index} className={correct ? classes.resultCorrectCardContainer : classes.resultWrongtCardContainer}>
                <Card.Header>
                    Question {index + 1}
                </Card.Header>
                <Card.Title>
                    {question}
                </Card.Title>
                <Card.Text>
                    You selected: {answerChoices[1] === -1 ? "No Answer Choice Selected" : answerChoices[1]}
                </Card.Text>

            </Card>
        );
    }

    return(
        <div>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {convertExperienceToLevel(prevExperience).level !== convertExperienceToLevel(experience).level ?
                        `Conratulations! You Level Up` : 
                        `Experience needed for next level: ${convertExperienceToLevel(experience).leftOver}`}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Card key={-1} className={classes.congratualtionCardContainer}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Header>Congratulations!</Card.Header>
                    <Card.Text>
                        You got {correct} out of {answerChoices.length} questions right!
                    </Card.Text>
                    <Button onClick={restartQuiz}>Retake Quiz</Button>
                    <Button onClick={() => history.push('/')}>Return Home</Button>
                </Card.Body>
            </Card>
            
            {questions.map((content, index) => renderCards(index, content.question, answerChoices[index]))}
        </div>
    );
}

export default QuizResult;