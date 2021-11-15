import { useStyles } from './style'
import { useContext, useState, useEffect } from 'react'
import AuthContext from '../../../context/auth-context'
import Button from '@mui/material/Button'
import HEADER from '../../../constant/header'
import quizApis from '../../../api/quiz-api'
import BODY from '../../../constant/body'
import CommentBox from '../../CommentBox'
const CommentSection = (props)=>{
    const {auth} = useContext(AuthContext)
    const classes = useStyles()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const onChangeComment =(event)=>{
        setComment(event.target.value)
    }

    const loadComments = async ()=>{
        let response = await quizApis.getQuizComments(props.quizId)
        setComments(response.data) 
    }

    const submitComment = async ()=>{
        if(comment!=""){
            console.log("submit comment", props.quizId)
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {
                [BODY.QUIZCOMMENT]: comment,
                [BODY.QUIZID]: props.quizId
            }
            await quizApis.postQuizComment(payload, headers)
            setComment("")
            loadComments()
        }
    }

    useEffect(()=>{
        loadComments()
    },[props.quizId])

    return(
        <div className={classes.container}>
            <div>
                <div>
                    <textarea onChange={onChangeComment} value={comment} className={classes.commentTextBox}/>
                </div>
                <div>
                    <Button onClick={submitComment}>Comment</Button>
                </div>
            </div>

            <div className={classes.userComments}>
                <div className={classes.commentTitle}>Comment</div>
                {comments.map((c, i)=>{
                    return <CommentBox comment={c}/>
                })}
            </div>
        </div>
    )
}

export default CommentSection