import { useStyles } from './style'
import { SideBar } from '../../components/Home'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth-context';
import quizApis from "../../api/quiz-api"
import HEADER from '../../constant/header';
import QuizCard from '../../components/QuizCard';
const TakeLaterPage = ()=>{
    const classes = useStyles()
    const {auth} = useContext(AuthContext)
    const [quizzes, setQuizzes] = useState([])
    useEffect(()=>{
        const loadTakeLaterQuiz = async ()=>{
            if(auth.user != null){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await quizApis.getTakeLaterQuiz(headers)
                setQuizzes(response.data)
            }
        }

        loadTakeLaterQuiz()
    },[auth.user])
    return(
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.quizListContainer}>
                MyQuizList
                <div className={classes.displayBoardContainer}>
                    {quizzes.map((quiz, i) => {
                                return <QuizCard key={i} quiz={quiz} redirect={true}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TakeLaterPage