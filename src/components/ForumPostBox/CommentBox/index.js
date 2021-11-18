
import BODY from "../../../constant/body"
import { useStyles } from './style'
const PostCommentBox = ({comment})=>{
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <div className={classes.userbox}>
                <div className={classes.namebox}>
                    {comment[BODY.USERID]}
                </div>
            </div>
            <div className={classes.commentContainer}>
                {comment[BODY.POSTCOMMENT]}
            </div>
        </div>
    )
}

export default PostCommentBox