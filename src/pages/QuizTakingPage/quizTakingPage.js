import { useStyles } from './style'
import QuizTaking from '../../components/QuizTaking'
import NavBar from '../../components/NavBar'

const QuizTakingPage = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <NavBar/>
            </div>
            <div className={classes.quizContainer}>
                <QuizTaking />
            </div>
        </div>
    )
}

export default QuizTakingPage;