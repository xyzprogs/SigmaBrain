import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { userStyles, useStyles } from "./style";
import userApis from '../../../api/user-api'
import ExperienceModal from './ExperienceModal';


const QuizResult = (props) =>{

    let history = useHistory();
    const classes = userStyles();
    const answerChoices = props.answerChoices;
    const questions = props.questions;
    const restartQuiz = props.restartQuiz;
    const correctChoices = props.correctChoices;
    const [loadOnce, setLoadOnce] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [experience, setExperience] = useState(0);

    let correct = 0;
    for (let i = 0; i < answerChoices.length; i++){
        if (parseInt(answerChoices[i]) === correctChoices[i]){
            correct++;
        }
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleExperience = (value) => {
        setExperience(value);
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
            const payload = {
                "userId" : id,
                "experience" : response.data[0].experience + correct
            }
            let response2 = await userApis.updateUserExperience(payload);
            if(response2.data.length <= 0){
                return
            }
            setShowModal(true);
            setLoadOnce(false);
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
        let correct = answerChoices[0] === correctChoices[index];
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
            <Card key={-1} className={classes.congratualtionCardContainer}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Congratulations!</Card.Title>
                    <Card.Text>
                        You got {correct} out of {answerChoices.length} questions right! {showModal + ""}
                    </Card.Text>
                    <Button onClick={restartQuiz}>Retake Quiz</Button>
                    <Button onClick={() => history.push('/')}>Return Home</Button>
                </Card.Body>
            </Card>
            <ExperienceModal prevExperience={experience - correct < 0 ? 0 : experience - correct} experience={experience} showModal={showModal} 
                            handleClose={handleClose} 
                            handleExperience={handleExperience}/>
            {questions.map((content, index) => renderCards(index, content.question, answerChoices[index]))}
        </div>
    );
}

export default QuizResult;