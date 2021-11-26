import { useStyles } from './style'
import { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import quizApis from '../../../api/quiz-api'
import BODY from '../../../constant/body'
import Card from "react-bootstrap/Card"
import Button from "@mui/material/Button"
import AuthContext from '../../../context/auth-context'
import HEADER from '../../../constant/header'
import NoUserModal from '../../NoUserModal'

const DescriptionBox = (props)=>{
    const classes = useStyles()
    const {quizId} = useParams()
    const [quiz, setQuiz] = useState()
    const [image, setImage] = useState("")
    const [showModal, setShowModal] = useState(false);
    const {auth} = useContext(AuthContext)
    const history = useHistory()
    useEffect(()=>{
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

    const likeQuiz = async ()=>{
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        let payload = {
            [BODY.QUIZID]: quizId
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
       await quizApis.likedQuiz(payload, headers)
        console.log(`like quiz ${quizId} by ${localStorage.getItem(BODY.UID)}`)
    }

    const dislikeQuiz = async ()=>{
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        await quizApis.dislikeQuiz(quizId, headers)
        console.log(`dislike quiz ${quizId} by ${localStorage.getItem(BODY.UID)}`)
    }

    const takeLater = async ()=>{
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        let payload = {
            [BODY.QUIZID]: quizId
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        await quizApis.takeLaterQuiz(payload, headers)
        console.log(`user ${localStorage.getItem(BODY.UID)} puts quiz ${quizId} into take later`)
    }

    const startQuiz = () => {
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        history.push(`/quizTaking/${props.quizId}`);
    }

    if(quiz === undefined){
        return(
            <div>loading</div>
        )
    }


    return (
    <div>
        <div>
            <NoUserModal show={showModal} continue={true} handleClose={() => setShowModal(false)}></NoUserModal>
        </div>
        <div className={classes.cardContainer}>
        <div className={classes.title}>{quiz[BODY.QUIZNAME]}</div>
        <div className={classes.subtitle}>{quiz[BODY.TAKECOUNTS]} take counts . {quiz[BODY.CREATIONTIME]}</div>
            <Card className={classes.cardSize}>
                <Card.Img className={classes.imgSize} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{quiz[BODY.QUIZNAME]}</Card.Title>
                    <Card.Text>
                        {quiz[BODY.QUIZDESCRIPTION]}
                    </Card.Text>
                    <Button onClick={startQuiz}>Start Quiz</Button>
                </Card.Body>
            </Card>
            <div className={classes.buttonBar}>
                <div onClick={likeQuiz} className={`${classes.buttonMargin}`}>Like</div>
                <div onClick={dislikeQuiz} className={`${classes.buttonMargin}`}>Dislike</div>
                <div onClick={takeLater} className={`${classes.buttonMargin}`}>Saved Later</div>
            </div>
        </div>
    </div>
    )
}

export default DescriptionBox