import { useStyles } from './style'

const CommentSection = ()=>{
    
    const classes = useStyles()

    return(
        <div className={classes.container}>
            <div>
                <div>Comment</div>
                <div>
                    <textarea className={classes.commentTextBox}/>
                </div>
                <div>
                    <button>Comment</button>
                </div>
            </div>

            <div className={classes.userComments}>
                User Comments
            </div>
        </div>
    )
}

export default CommentSection