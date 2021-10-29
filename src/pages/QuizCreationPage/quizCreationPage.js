import Navbar from '../../components/NavBar';
import QuizCreation from '../../components/QuizCreation';
import { useStyles } from './style';

const QuizCreationPage = () => {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.header}>
                <Navbar />
            </div>
            <div className={classes.quizContainer}>
                <QuizCreation />
            </div>
        </div>

    );
}

export default QuizCreationPage;