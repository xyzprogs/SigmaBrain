import { useStyles } from './style'
import Category from './Category'
import ForumCard from './ForumCard'
import PostCreationBox from './PostCreationBox'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import forumApi from "../../api/forumn-api"
import BODY from '../../constant/body'
const ForumSection = () => {
    const classes = useStyles()
    const [posts, setPosts] = useState([])
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
            setPosts(response.data)
        }
        loadPosts()
    }, [userId])


    const redirectToForumPostPage = (quizId)=>{
        history.push(`/forumPost/${quizId}`)
    }

    return (
    <div>
        <div className={classes.homeContainer}>
            <div>
                <Category/>
                <div className={classes.postContainer}>
                    {posts.map(p=>{
                        return <div onClick={()=>{redirectToForumPostPage(p[BODY.FORUMPOSTID])}}>
                            <ForumCard post={p}/>
                        </div>
                    })}
                </div>
                <PostCreationBox loadPosts={loadPosts}/>
            </div>
        </div>
    </div>

    )
}
export default ForumSection