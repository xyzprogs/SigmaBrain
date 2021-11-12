import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';


const QuizResult = (props) =>{

    let history = useHistory();
    const answerChoices = props.answerChoices;
    const tempAnswers = props.answers;
    const restartQuiz = props.restartQuiz;

    console.log(answerChoices);
    console.log(tempAnswers);

    let correct = 0;
    for (let i = 0; i < answerChoices.length; i++){
        if (parseInt(answerChoices[i]) === tempAnswers[i].correctAnswer){
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
                        You got {correct} out of {tempAnswers.length} questions right!
                    </Card.Text>
                    <Button onClick={restartQuiz}>Retake Quiz</Button>
                    <Button onClick={() => history.push('/')}>Return Home</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default QuizResult;