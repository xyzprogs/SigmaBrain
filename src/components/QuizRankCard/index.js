import BODY from "../../constant/body"
const QuizRankCard = ({quiz, rank}) => {

    return(
        <div>
            {rank}.{quiz[BODY.QUIZNAME]}
        </div>
    )
}

export default QuizRankCard