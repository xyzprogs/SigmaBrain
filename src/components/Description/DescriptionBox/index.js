import { useStyles } from './style'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import quizApis from '../../../api/quiz-api'
import BODY from '../../../constant/body'
import Card from "react-bootstrap/Card"
import Button from "@mui/material/Button"
const DescriptionBox = (props)=>{
    
    const classes = useStyles()
    const [quiz, setQuiz] = useState()
    const [image, setImage] = useState("")
    let history = useHistory();

    useEffect(()=>{
        console.log("load quiz")
        const loadQuiz = async () => {
            let response = await quizApis.getQuiz(props.quizId)
            if(response.data.length <= 0){
                return
            }
            setQuiz(response.data[0])
            let response2 = await quizApis.getQuizThumbnail(response.data[0][BODY.QUIZID])
            setImage(response2.data)
        }
        loadQuiz()
    }, [props.quizId])




    if(quiz === undefined){
        return(
            <div>loading</div>
        )
    }


    return (
    // <div className={classes.boxContainer}>
    //     <div>{quiz[BODY.QUIZNAME]}</div>
    //     <div>{quiz[BODY.CREATIONTIME]}</div>
    //     <div>{quiz[BODY.QUIZDESCRIPTION]}</div>
    //     <img className={classes.imgSize} src={image} alt="quiz thumbnail"/>
    //     <div onClick={() => history.push(`/quizTaking/${props.quizId}`)}>Button</div>
    // </div>
    <div className={classes.cardContainer}>
        <Card className={classes.cardSize}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{quiz[BODY.QUIZNAME]}</Card.Title>
                <Card.Text>
                    {quiz[BODY.QUIZDESCRIPTION]}
                </Card.Text>
                <Button onClick={() => history.push(`/quizTaking/${props.quizId}`)}>Start Quiz</Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default DescriptionBox