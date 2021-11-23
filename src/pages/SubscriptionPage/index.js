import { useStyles } from './style'
import { SideBar } from '../../components/Home'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth-context';
import quizApis from '../../api/quiz-api';
import HEADER from '../../constant/header';
import QuizCard from '../../components/QuizCard';
const SubscriptionPage = ()=>{
    const classes = useStyles()
    const [quizzes, setQuizzes] = useState([])
    const {auth} = useContext(AuthContext)
    useEffect(()=>{
        const loadSubscriptionQuiz = async ()=>{
            if(auth.user != null){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await quizApis.getSubscriptionQuiz(headers)
                setQuizzes(response.data)
                console.log(response.data)
            }
        }
        loadSubscriptionQuiz()
    },[auth.user])
    return(
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.pageContainer}>
                <div>
                    Subscription List
                    <div className={classes.displayBoardContainer}>
                        {quizzes.map((quiz, i) => {
                                    return <QuizCard key={i} quiz={quiz} redirect={true}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SubscriptionPage