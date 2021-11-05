import { useStyles } from "./style"
import QuizCard from "../../QuizCard"
import RankCard from "../../RankCard"
import { useState, useEffect } from 'react'
import quizApis from "../../../api/quiz-api"
const QuizDisplayBoard = (props) => {
    //TEMP DATA
    const topTen = [
        { userName: "rank1" },
        { userName: "rank2" },
        { userName: "rank3" },
        { userName: "rank4" },
        { userName: "rank5" },
        { userName: "rank6" },
        { userName: "rank7" },
        { userName: "rank8" },
        { userName: "rank9" },
        { userName: "rank10" }
    ]
    
    
    const classes = useStyles()

    const [category, setCategory] = useState(null)
    const [quizzes, setQuizzes] = useState([])

    useEffect(()=>{
        loadCategoryQuiz()
    }, [])

    const loadCategoryQuiz = async () => {
       if(props.category!=undefined){
            const category = props.category
            const response = await quizApis.getCategoryQuiz(category)
            setQuizzes(response.data)
       }
    }

    if(quizzes.length==0){
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
                        {topTen.map((user, i)=>
                        <RankCard username = {user.userName}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={classes.displayBoardContainer}>
                <div className={classes.headerContainer}>
                    <div className={classes.title}>
                        All
                    </div>
                </div>
                <div className={classes.quizContainer}>
                    {quizzes.map((quiz, i)=>{
                        return <QuizCard key={i} quiz={quiz}/>
                    })}
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

}

export default QuizDisplayBoard