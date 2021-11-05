import { useStyles } from "./style"
import QuizCard from "../../QuizCard"
import RankCard from "../../RankCard"
import { useState, useEffect } from 'react'
import quizApis from "../../../api/quiz-api"

const QuizDisplayBoard = (props) => {
    //TEMP DATA

    const classes = useStyles()

    const [category, setCategory] = useState(null)
    const [quizzes, setQuizzes] = useState([])
    const [topUsers, setTopUsers] = useState([])

    useEffect(() => {
        loadCategoryQuiz()
        setTopUsers(props.topUsers)
    }, [])

    const loadCategoryQuiz = async () => {
        if (props.category != undefined) {
            console.log("loading quiz from category")
            const category = props.category
            const response = await quizApis.getCategoryQuiz(category)
            setQuizzes(response.data)
        }

        if (quizzes.length == 0) {
            return (
                <div className={classes.displayBoardContainer}>
                    <div className={classes.headerContainer}>
                        <div className={classes.title}>
                            All
                        </div>
                    </div>
                    <div className={classes.quizContainer}>
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                    </div>

                    <div className={classes.rankContainer}>
                        <div>Rankings</div>
                        <div>
                            {console.log(props.topUsers)}
                            {props.topUsers.map((user, i) =>
                                <RankCard user={user} index={i} />
                            )}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.displayBoardContainer}>
                    <div className={classes.headerContainer}>
                        <div className={classes.title}>
                            All
                        </div>
                    </div>
                    <div className={classes.quizContainer}>
                        {quizzes.map((quiz, i) => {
                            return <QuizCard key={i} quiz={quiz} />
                        })}
                    </div>

                    <div className={classes.rankContainer}>
                        <div>Rankings</div>
                        <div>
                            {props.topUsers.map((user, i) =>
                                <RankCard username={user.userName} />
                            )}
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default QuizDisplayBoard