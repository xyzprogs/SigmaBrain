import BODY from "../../constant/body"
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
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
    const [end, setEnd] = useState(false)
    const { forumPostId } = useParams()
    const classes = useStyles()
    const { auth } = useContext(AuthContext)

    const onChangeComment = (event)=>{
        setComment(event.target.value)
    }

    const updateComments = (response)=>{
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length !== 10){
                setEnd(true)
            }
            let newarr = [...comments]
            for(var i = 0; i < sub_arr.length; i++){
                newarr.push(sub_arr[i])
            }
            setComments(newarr)
        }
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
        // loadComments()
        if(end){
            setEnd(false)
        }
        setComment("")
    }

    useEffect(()=>{

        const loadPost = async ()=>{
            let response = await forumnApi.getForumPostById(forumPostId)
            setPost(response.data[0])
            console.log(response.data)
        }

        const loadComments = async ()=>{
            let response = await forumnApi.getFroumPostComment(forumPostId)
            updateComments(response)
        }

        loadPost()
        loadComments()

    }, [forumPostId])

    const loadMore = async ()=>{
        let row = comments.length
        let response = await forumnApi.getFroumPostComment(forumPostId, row)
        updateComments(response)
    }

    if(post===undefined || post==null){
        return(
            <div>
                loading
            </div>
        )
    }

    return(
        <div className={classes.forumContainer}>
            <div>
            <div className={classes.titleBox}>{post[BODY.POSTTITLE]}</div>
            <div className={classes.commentsContainer}> 
                <div className={classes.postContainer}>{post[BODY.POSTDESCRIPTION]}</div>
            </div>
            </div>
            <div>
                <textarea value={comment} onChange={onChangeComment} className={classes.commentInputBox} placeholder={"Enter Comment"}/>
                <div>
                    <Button onClick={onSendComment}>Send</Button>
                </div>
            </div>
            <div className={classes.commentsContainer2}>
                {comments.map(comment=>{
                        return <PostCommentBox
                        comment={comment}/>
                })}
                {
                    end?<div>No more</div>
                    :<Button  onClick={loadMore}>More</Button>
                }
            </div>
        </div>
    )

}

export default ForumPostBox