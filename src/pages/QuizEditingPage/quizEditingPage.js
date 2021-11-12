import { useStyles } from './style'
import QuizEditing from '../../components/QuizEditing'
const QuizEditingPage = () => {
    const classes = useStyles()
    return(
        <div className={classes.pageContainer}>
            <QuizEditing/>
        </div>
    )
}

export default QuizEditingPage