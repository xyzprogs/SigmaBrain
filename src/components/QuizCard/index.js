import { userStyles, useStyles } from "./style"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const QuizCard = ()=>{
    const classes = userStyles()
    return(
        <div>
            <Card className={classes.quizCardContainer}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Quiz Title</Card.Title>
                    <Card.Text>
                        Something
                    </Card.Text>
                    <Button variant="primary">Visit Quiz</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default QuizCard