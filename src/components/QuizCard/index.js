import { userStyles } from "./style"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import BODY from '../../constant/body'
import quizApis from "../../api/quiz-api"
import default_thumbnail from "../../images/default_quiz_thumbnail.png"
import view_number from "../../images/viewNumber.png"
const QuizCard = (props)=>{
    const classes = userStyles()
    const history = useHistory()
    const [image, setImage] = useState("")

    const clickQuiz = ()=>{
        if(props.redirect){
            let quiz = props.quiz
            history.push(`/quizDescription/${quiz[BODY.QUIZID]}`)
        }
    }

    useEffect(()=>{
        const loadImage = async ()=>{
            try{
                let response = await quizApis.getQuizThumbnail(props.quiz[BODY.QUIZID])
                setImage(response.data)
            }catch(e){
                setImage(default_thumbnail)
            }

        }

        if(props.quiz!==undefined){
            loadImage()
        }

        return ()=>{
            setImage()
        }
    },[props.quiz])
    
    function CreateDate(date){
        console.log(date)
        const array=date.split('T');

        return array[0];
    }


    if(props.quiz!==undefined){
        return(
            <div onClick={clickQuiz}>
                <Card className={classes.quizCardContainer}>
                    <Card.Body>
                        <div>
                            <img className={classes.imgSize} src={image} alt="quizimage"/>
                        </div>
                        <div className={classes.titleText}>
                            {props.quiz.quizName}
                        </div>
                        <div className={classes.descriptionText}>
                        <Card.Text>
                            {props.quiz.quizDescription}
                        </Card.Text>
                        </div>
                        <div className={classes.informationContainer}>
                            <div className={classes.dateText}>
                                {CreateDate(props.quiz.creationTime)}
                            </div>
                            <div className={classes.viewNumberContainer}>
                                <img className={classes.viewNumberImage} src={view_number}/>
                                &nbsp;{props.quiz.takeCounts}
                            </div>
                        </div>
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
                        <Card.Title>loading</Card.Title>
                        <Card.Text>
                            loading
                        </Card.Text>
                        <Button variant="primary">Visit Quiz</Button>
                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}

export default QuizCard