import { useStyles } from "./style"
import QuizCard from "../../QuizCard"
import { useState, useEffect } from 'react'
import quizApis from "../../../api/quiz-api"
import userApis from "../../../api/user-api"
import QuizRankCard from "../../QuizRankCard"
import { useHistory } from "react-router-dom"
import BODY_CONSTANT from "../../../constant/body"
const QuizDisplayBoard = (props) => {
    //TEMP DATA
    const classes = useStyles()
    const history = useHistory()
    // const [category, setCategory] = useState(null)
    const [quizzes, setQuizzes] = useState([])
    const [rankQuiz, setRankQuiz] = useState([])
    // const [topUsers, setTopUsers] = useState([])

 

    useEffect(() => {
        const loadCategoryQuiz = async () => {
            if (props.category !== undefined) {
                const category = props.category
                const response = await quizApis.getCategoryQuiz(category)
                setQuizzes(response.data)
                const response2 = await quizApis.getTopQuizByCategory(category)
                setRankQuiz(response2.data)
            }
        }

        // const getTopUsersFromLeaderboard = async () => {
        //     await userApis.getMainLeaderboard().then((response) => {
        //         setTopUsers(response.data);
        //         console.log("topten users",response.data)
        //     })
        // }

        loadCategoryQuiz()
        // getTopUsersFromLeaderboard();
        return ()=>{
            setQuizzes()
            setRankQuiz()
        }
    }, [props.category])

    const moveToStartingPage =(i)=>{
        history.push(`/quizDescription/${rankQuiz[i][BODY_CONSTANT.QUIZID]}`)
    }

    if (quizzes.length === 0) {
        return <div>No Quizzes In this Category</div>
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
                        return <QuizCard key={i} quiz={quiz} redirect={true}/>
                    })}
                </div>

                <div className={classes.rankContainer}>
                    <div>Rankings</div>
                    <div>
                        {rankQuiz.map((quiz, i) =>
                            <div key={i} className={classes.card} onClick={()=>moveToStartingPage(i)}>
                                <QuizRankCard key={i} quiz={quiz} rank={i+1}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizDisplayBoard