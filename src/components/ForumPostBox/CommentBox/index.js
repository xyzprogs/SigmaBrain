
import BODY from "../../../constant/body"
import { useStyles } from './style'
import default_profile_img from '../../../images/Default_profile.png'
const PostCommentBox = ({comment})=>{
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <div>
            <img className={classes.imgSize} src={default_profile_img} alt=""/>
            </div>
            <div className={classes.commentTittleContainer}>
            <div className={classes.userbox}>
                <div className={classes.namebox}>
                    {comment[BODY.USERID]}
                </div>
            </div>
            <div className={classes.commentContainer}>
                {comment[BODY.POSTCOMMENT]}
            </div>
            </div>
        </div>
    )
}

export default PostCommentBox