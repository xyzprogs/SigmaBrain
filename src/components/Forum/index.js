import { useStyles } from './style'
import Category from './Category'
import ForumCard from './ForumCard'
import PostCreationBox from './PostCreationBox'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import forumApi from "../../api/forumn-api"
import BODY from '../../constant/body'
import LOCAL_CONSTANT from '../../constant/local-storage'
import { Button } from "@mui/material"
const ForumSection = () => {
    const classes = useStyles()
    const [posts, setPosts] = useState([])
    const [end, setEnd] = useState(false)
    const { userId } = useParams()
    const history = useHistory()
    const loadPosts = async ()=> {
        console.log("load posts")
        let response = await forumApi.getForumPost(userId)
        setPosts(response.data)
    }

    useEffect(()=>{
        const loadPosts = async ()=> {
            console.log("load posts")
            let response = await forumApi.getForumPost(userId)
            //setPosts(response.data)
            updatePosts(response)
        }
        loadPosts()
    }, [userId])

    const updatePosts = (response)=>{
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length !== 10){
                setEnd(true)
            }
            let new_posts = [...posts]
            for(var i = 0; i < sub_arr.length; i++){
                new_posts.push(sub_arr[i])
            }
            setPosts(new_posts)
        }
    }

    const loadMore = async ()=>{
        let row = posts.length
        let response = await forumApi.getForumPost(userId, row)
        updatePosts(response)
    }

    const redirectToForumPostPage = (quizId)=>{
        history.push(`/forumPost/${quizId}`)
    }

    return (
    <div>
        <div className={classes.homeContainer}>
            <div>
                <div className={classes.forumContainer}>
                    <div className={classes.postContainer}>
                    {posts.map((p,i)=>{
                        return <div key={i} onClick={()=>{redirectToForumPostPage(p[BODY.FORUMPOSTID])}}>
                            <ForumCard post={p}/>
                        </div>
                    })}
                    {
                        end?<div>No More</div>
                        :<Button onClick={loadMore}>More</Button>
                    }
                </div>
                <PostCreationBox loadPosts={loadPosts}/>
                </div>
            </div>
        </div>
    </div>

    )
}
export default ForumSection