
import { useStyles } from "./style"
import QuizCard from "../../QuizCard"
import RankCard from "../../RankCard"
const QuizDisplayBoard = () => {
    const classes = useStyles()
    return(
        <div className={classes.displayBoardContainer}>
            <div className={classes.headerContainer}>
                <div className={classes.title}>
                    All
                </div>
            </div>
            <div className={classes.quizContainer}>
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

            <div className={classes.rankContainer}>
                <div>Rankings</div>
                <div>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                    <RankCard/>
                </div>
            </div>
        </div>
    )
}

export default QuizDisplayBoard