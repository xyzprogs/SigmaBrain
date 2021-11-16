import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';


const QuizResult = (props) =>{

    let history = useHistory();
    const answerChoices = props.answerChoices;
    const restartQuiz = props.restartQuiz;
    const correctChoices = props.correctChoices;
    let correct = 0;
    for (let i = 0; i < answerChoices.length; i++){
        if (parseInt(answerChoices[i]) === correctChoices[i]){
            correct++;
        }
    }

    return(
        <div>
            <Card>
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
        </div>
    );
}

export default QuizResult;