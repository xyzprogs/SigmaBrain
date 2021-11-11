import QuizCreation from '../../components/QuizCreation';
import { useStyles } from './style';

const QuizCreationPage = () => {
    const classes = useStyles();

    return(
        <div className={classes.pageContainer}>
            <div className={classes.quizContainer}>
                <QuizCreation />
            </div>
        </div>

    );
}

export default QuizCreationPage;