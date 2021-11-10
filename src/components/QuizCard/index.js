import { userStyles } from "./style"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import BODY from '../../constant/body'
import quizApis from "../../api/quiz-api"
const QuizCard = (props)=>{
    const classes = userStyles()
    const history = useHistory()
    const [image, setImage] = useState("")

    const loadImage = async ()=>{
        let response = await quizApis.getQuizThumbnail(props.quiz[BODY.QUIZID])
        setImage(response.data)
    }

    const clickQuiz = ()=>{
        if(props.redirect){
            let quiz = props.quiz
            history.push(`/quizDescription/${quiz[BODY.QUIZID]}`)
        }
    }

    useEffect(()=>{
        if(props.quiz!=undefined){
            loadImage()
        }
    },[])



    if(props.quiz!=undefined){
        return(
            <div onClick={clickQuiz}>
                <Card className={classes.quizCardContainer}>
                    <Card.Body>
                        <Card.Title>{props.quiz.quizName}</Card.Title>
                        <div>
                            <img className={classes.imgSize} src={image}/>
                        </div>
                        <Card.Text>
                            {props.quiz.quizDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>   
        )
    }
    else{
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
}

export default QuizCard