import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';
import { userStyles, useStyles } from "./style";


const QuizResult = (props) =>{

    let history = useHistory();
    const classes = userStyles();
    const answerChoices = props.answerChoices;
    const questions = props.questions;
    const restartQuiz = props.restartQuiz;
    const correctChoices = props.correctChoices;
    let correct = 0;
    for (let i = 0; i < answerChoices.length; i++){
        if (parseInt(answerChoices[i]) === correctChoices[i]){
            correct++;
        }
    }
    console.log(correctChoices);
    const renderCards = (index, question, answerChoices) => {
        console.log(answerChoices);
        let correct = answerChoices[0] === correctChoices[index];
        return (
            <Card className={correct ? classes.resultCorrectCardContainer : classes.resultWrongtCardContainer}>
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
            <Card className={classes.congratualtionCardContainer}>
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