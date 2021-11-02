
import { useStyles } from "./style"
import QuizCard from "../../QuizCard"
import RankCard from "../../RankCard"
import { useState, useEffect } from 'react'
import quizApis from "../../../api/quiz-api"
const QuizDisplayBoard = (props) => {
    const classes = useStyles()

    const [category, setCategory] = useState(null)
    const [quizzes, setQuizzes] = useState([])

    useEffect(()=>{
        loadCategoryQuiz()
    }, [])

    const loadCategoryQuiz = async () => {
       if(props.category!=undefined){
            console.log("loading quiz from category")
            const category = props.category
            const response = await quizApis.getCategoryQuiz(category)
            setQuizzes(response.data)
            console.log(response.data)
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