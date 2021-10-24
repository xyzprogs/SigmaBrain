import { useStyles } from './style'

const UserFeatureQuiz = () => {

    const classes = useStyles()

    return(
        <div className={classes.quizContainer}>
            <div className={classes.quizimg}>
                Image
            </div>
            <div className={classes.description}>
                Description
            </div>
        </div>
    )
}

export default UserFeatureQuiz