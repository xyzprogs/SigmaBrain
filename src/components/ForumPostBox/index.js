import BODY from "../../constant/body"
import { useEffect, useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import forumnApi from "../../api/forumn-api"
import PostCommentBox from "./CommentBox"
import { useStyles } from './style'
import { Button } from "@mui/material"
import AuthContext from "../../context/auth-context"
import HEADER from "../../constant/header"
const ForumPostBox = ()=>{

    const [post, setPost] = useState()
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const { forumPostId } = useParams()
    const classes = useStyles()
    const { auth } = useContext(AuthContext)

    const onChangeComment = (event)=>{
        setComment(event.target.value)
    }

    const onSendComment = async ()=>{
        if(comment===""){
            return
        }
        let payload = {
            [BODY.FORUMPOSTID]: forumPostId,
            [BODY.POSTCOMMENT]: comment,
        }

        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }

        await forumnApi.createFroumPostComment(payload, headers)
        setComment("")
        loadComments()
    }

    useEffect(()=>{

        const loadPost = async ()=>{
            let response = await forumnApi.getForumPostById(forumPostId)
            setPost(response.data[0])
            console.log(response.data)
        }

        const loadComments = async ()=>{
            let response = await forumnApi.getFroumPostComment(forumPostId)
            setComments(response.data)
            console.log(response.data)
        }

        loadPost()
        loadComments()

    }, [])

    const loadComments = async ()=>{
        let response = await forumnApi.getFroumPostComment(forumPostId)
        setComments(response.data)
        console.log(response.data)
    }

    if(post===undefined || post==null){
        return(
            <div>
                loading
            </div>
        )
    }

    return(
        <div>
            <div className={classes.titleBox}>{post[BODY.POSTTITLE]}</div>
            <div className={classes.commentsContainer}> 
                {comments.map(comment=>{
                    return <PostCommentBox
                     comment={comment}/>
                })}
            </div>
            <div>
                <textarea value={comment} onChange={onChangeComment} className={classes.commentInputBox}/>
                <div>
                    <Button onClick={onSendComment}>Send</Button>
                </div>
            </div>
        </div>
    )

}

export default ForumPostBox