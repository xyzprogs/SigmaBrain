import { useStyles } from './style'
import QuizTaking from '../../components/QuizTaking'

const QuizTakingPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.pageContainer}>
            <QuizTaking />
        </div>
    )
}

export default QuizTakingPage;