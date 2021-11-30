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
import userApis from '../../../api/user-api'
const DescriptionBox = (props)=>{
    const classes = useStyles()
    const {quizId} = useParams()
    const [quiz, setQuiz] = useState()
    const [image, setImage] = useState("")
    const [userImage, setUserImage] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [admin, setAdmin] = useState(false);
    const {auth} = useContext(AuthContext)
    const history = useHistory()
    useEffect(()=>{
        const loadQuiz = async () => {
            let response = await quizApis.getQuizWithUser(props.quizId)
            if(response.data.length <= 0){
                return
            }
            setQuiz(response.data[0])
            loadQuizThumbnail(response.data[0][BODY.QUIZID])
            loadUserImage(response.data[0][BODY.USERID])
        }

        const loadQuizThumbnail = async(quizId)=>{
            let response2 = await quizApis.getQuizThumbnail(quizId)
            setImage(response2.data)
        }

        const loadUserImage = async (userId)=>{
            let response = await userApis.getProfileImage(userId)
            setUserImage(response.data)
        }

        const loadQuizAdmin = async ()=> {
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let response = await quizApis.obtainUserQuizAdmin(quizId, headers)
            if(response.data.length <= 0){
                return
            }
            setQuiz(response.data[0])
            loadQuizThumbnail(response.data[0][BODY.QUIZID])
            loadUserImage(response.data[0][BODY.USERID])
        }

        const checkAdmin = async ()=>{
            if(auth.user!=null && auth.user!==undefined){
                let uid = auth.user.uid
                let response = await userApis.getUserInfo(uid)
                console.log(response.data[0][BODY.ISADMIN])
                if(response.data.length>0 && response.data[0][BODY.ISADMIN]===1){
                    setAdmin(true)
                    if(quiz===undefined){
                        loadQuizAdmin()
                    }
                }
            }
        }   
        loadQuiz()
        checkAdmin()
    }, [quizId, auth.user])

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

    const startQuiz = async () => {
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        history.push(`/quizTaking/${props.quizId}`);
        var date = new Date()
        var dateString = date.getUTCFullYear() +"/"+ (date.getUTCMonth()+1) +"/"+ date.getUTCDate() + " " + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds()
        console.log("add to history", props.quizId, dateString)
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        let payload = {
            [BODY.QUIZID]: props.quizId,
            [BODY.HISTORYTIME]: dateString
        }
        await quizApis.createQuizHistory(payload, headers)
        console.log("create new quiz history")
    }
    
    const redirectToProfile = (userId)=>{
        history.push(`/profile/${userId}`)
    }

    const onSubscribe = async () => {
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let payload = {
            [BODY.SUBSCRIBETO]: quiz[BODY.USERID]
        }
        userApis.subscribe(payload, headers)
    }

    const adminBlockQuiz = async ()=>{
        if(auth.user!=null && auth.user!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {
                [BODY.QUIZID]: quiz[BODY.QUIZID],
                [BODY.ISPUBLISHED]: 2
            }
            await quizApis.adminBlockQuiz(payload, headers)
            let newQuiz = {...quiz}
            newQuiz[BODY.ISPUBLISHED] = 2
            setQuiz(newQuiz)
        }
    }

    const adminUnblockQuiz = async ()=>{
        if(auth.user!=null && auth.user!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {
                [BODY.QUIZID]: quiz[BODY.QUIZID],
                [BODY.ISPUBLISHED]: 1
            }
            await quizApis.adminBlockQuiz(payload, headers)
            let newQuiz = {...quiz}
            newQuiz[BODY.ISPUBLISHED] = 1
            setQuiz(newQuiz)
        }
    }

    const adminRemoveQuiz = async ()=>{
        if(auth.user!=null && auth.user!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            await quizApis.removeUserQuizAdmin(quizId, headers)
            console.log("admin remove quiz")
        }
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
            <div className={classes.userBox}>
                    <div className={classes.userDisplayName}>
                        {quiz[BODY.DISPLAYNAME]}
                    </div>
    
                    <div onClick={()=>{redirectToProfile(quiz[BODY.USERID])}} className={`${classes.circle}`}>
                        <div className={classes.userImageSize}>
                                <img alt="user profile" className={classes.userImageSize} src={userImage} />
                        </div>
                    </div>

                    <div onClick={onSubscribe} className={`${classes.btn}`}>Subscribe</div>
    
        <div>
            </div>
        </div>
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
            {   
                admin && <div>
                    <div>Administraive Operation</div>
                    <div className={classes.buttonBar}>
                        {quiz[BODY.ISPUBLISHED]==2?<div onClick={adminUnblockQuiz} className={`${classes.buttonMargin} ${classes.colorGreen}`}>Unblock</div>:<div onClick={adminBlockQuiz} className={`${classes.buttonMargin} ${classes.colorRed}`}>Block</div>}
                        <div onClick={adminRemoveQuiz} className={`${classes.buttonMargin} ${classes.colorRed}`}>Remove</div>
                    </div>
                </div>
            }
        </div>
    </div>
    )
}

export default DescriptionBox