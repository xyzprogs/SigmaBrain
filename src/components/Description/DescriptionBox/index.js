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
    const [likedStatus, setLikedStatus] = useState(2)
    const [saveStatus, setSaveStatus] = useState(false)
    const [subscribeStatus, setSubscribeStatus] = useState(false)
    const [self, setSelf] = useState(false)
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
            getSubscribeStatus(response.data[0][BODY.USERID])
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
        
        const getLikedStatus = async ()=> {
            if(auth.user!=null && auth.user!==undefined){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await quizApis.getLikedStatusOnQuiz(quizId, headers)
                if(response.data.length>0){
                    setLikedStatus(response.data[0][BODY.LIKEDSTATUS])
                }
            }
        }

        const getSavelaterStatus = async ()=>{
            if(auth.user!=null && auth.user!==undefined){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await quizApis.getTakeLaterStatus(quizId, headers)
                if(response.data.length>0){
                    setSaveStatus(true)
                }
                else{
                    setSaveStatus(false)
                }
            }
        }

        const getSubscribeStatus = async (uid)=>{
            console.log("check")
            if(auth.user!=null && auth.user!==undefined){
                if(auth.user.uid === uid){
                    setSelf(true)
                    return
                }
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await userApis.checkSubscribeStatus(uid, headers)
                console.log(response)
                if(response.data.length>0){
                    setSubscribeStatus(true)
                }
                else{
                    setSubscribeStatus(false)
                }
            }
        }

        loadQuiz()
        checkAdmin()
        getLikedStatus()
        getSavelaterStatus()
    }, [quizId, auth.user])

    /*Can integrate together with a like status parameter*/
    const changeLikedStatusOnQuiz = async (likeStatus)=>{
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        let payload = {
            [BODY.QUIZID]: quizId,
            [BODY.LIKEDSTATUS]: likeStatus
        }
        setLikedStatus(likeStatus)
        await quizApis.likedQuiz(payload, headers)
        console.log(`change quiz${quizId} to ${likeStatus}`)
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
        setSaveStatus(true)
        console.log(`user ${localStorage.getItem(BODY.UID)} puts quiz ${quizId} into take later`)
    }

    const removeTakeLater = async ()=>{
        if(!auth.loggedIn){
            setShowModal(true);
            return
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        await quizApis.removeTakeLaterQuiz(quizId, headers)
        setSaveStatus(false)
        console.log(`user ${localStorage.getItem(BODY.UID)} removes quiz ${quizId} into take later`)
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
        console.log("subscribe")
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let payload = {
            [BODY.SUBSCRIBETO]: quiz[BODY.USERID]
        }
        await userApis.subscribe(payload, headers)
        setSubscribeStatus(true)
    }

    const unsubscribe = async()=>{
        if(auth.user!=null && auth.user!==undefined && quiz!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN]: token
            }
            let payload = {
                [BODY.SUBSCRIBETO]: quiz[BODY.USERID] 
            }
            await userApis.unsubscribe(payload, headers)
            setSubscribeStatus(false)
        }
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

                    {!self && !subscribeStatus && <div onClick={onSubscribe} className={`${classes.btn} ${classes.colorGreen}`}>Subscribe</div>}
                    {!self && subscribeStatus && <div  onClick={unsubscribe} className={`${classes.btn} ${classes.colorRed}`}>Unsubscribe</div>}
    
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
                {   likedStatus===1?
                    <div onClick={()=>{changeLikedStatusOnQuiz(2)}} className={`${classes.buttonMargin} ${classes.colorBlue}`}>Like</div>:
                    <div onClick={()=>{changeLikedStatusOnQuiz(1)}} className={`${classes.buttonMargin}`}>Like</div>
                }
                {
                    likedStatus===0?
                    <div onClick={()=>{changeLikedStatusOnQuiz(2)}} className={`${classes.buttonMargin} ${(likedStatus===0 && classes.colorBlue)}`}>Dislike</div>
                    :<div onClick={()=>{changeLikedStatusOnQuiz(0)}} className={`${classes.buttonMargin} ${(likedStatus===0 && classes.colorBlue)}`}>Dislike</div>
                }
                {
                    saveStatus?
                    <div  onClick={removeTakeLater} className={`${classes.buttonMargin} ${classes.colorBlue}`}>Saved Later</div>
                    :<div onClick={takeLater} className={`${classes.buttonMargin}`}>Saved Later</div>
                }
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