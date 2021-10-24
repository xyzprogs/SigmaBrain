import { useStyles } from './style'
import QuizCard from '../../QuizCard'
const MyQuizList = () => {
    const classes = useStyles()

    return(
        <div className={classes.quizListContainer}>
            MyQuizList
            <div className={classes.displayBoardContainer}>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
            </div>
        </div>
    )
}

export default MyQuizList