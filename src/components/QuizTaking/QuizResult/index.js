import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { userStyles, useStyles } from "./style";
import userApis from '../../../api/user-api'


const QuizResult = (props) =>{

    let history = useHistory();
    const classes = userStyles();
    const answerChoices = props.answerChoices;
    const questions = props.questions;
    const restartQuiz = props.restartQuiz;
    const correctChoices = props.correctChoices;
    const [loadOnce, setLoadOnce] = useState(true);

    let correct = 0;
    for (let i = 0; i < answerChoices.length; i++){
        if (parseInt(answerChoices[i]) === correctChoices[i]){
            correct++;
        }
    }

    const convertExperienceToLevel = (experience) =>{
        console.log(experience);
        let level = 1;
        let threshHold = 3;
        while(experience !== 0){
            if (threshHold > experience){
                experience = 0;
            }else{
                experience -= threshHold;
                level += 1;
                threshHold *= 2;
            }
        }
        return level;
    }
    
    useEffect(() => {
        const handleExperience = async () => {
            let id = localStorage.getItem("uid");
            let response = await userApis.getUserInfo(id);
            if(response.data.length <= 0){
                return
            }
            let currentLevel = convertExperienceToLevel(response.data[0].experience);
            let newLevel = convertExperienceToLevel(response.data[0].experience + correct);
            const payload = {
                "userId" : id,
                "experience" : response.data[0].experience + correct
            }
            let response2 = await userApis.updateUserExperience(payload);
            if(response2.data.length <= 0){
                return
            }

            if(currentLevel !== newLevel){
                alert(`Congratulations, you leveled up! ${currentLevel} -> ${newLevel}`);
            }

            setLoadOnce(false);
        }
        if(loadOnce){
            handleExperience();
        }
    })



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