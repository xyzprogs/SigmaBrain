import BODY from "../../constant/body"
import { useStyles } from './style'
const QuizRankCard = ({quiz, rank}) => {
    const classes = useStyles()
    return(
        <div className={classes.text}>
            {rank}.{quiz[BODY.QUIZNAME]}
        </div>
    )
}

export default QuizRankCard