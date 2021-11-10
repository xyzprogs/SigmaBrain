import { useState, useEffect, useContext } from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router'
import Button from '@mui/material/Button'
import AuthContext from '../../context/auth-context'
import quizApis from '../../api/quiz-api'
import BODY from '../../constant/body'
import HEADER from '../../constant/header'
const QuizManagement = () => {
    const classes = useStyles()
    let history = useHistory()
    let [quizzes, setQuizzes] = useState([])
    const { auth } = useContext(AuthContext)

    useEffect(()=>{
        if(!auth.loading){
            loadUserQuizzes()
        }
    }, [auth.loading])

    const loadUserQuizzes = async () => {
        let id =  auth.getCurrentUserUid()
        let response = await quizApis.getUserQuiz(id)
        setQuizzes(response.data)
    }

    const redirectQuizCreation = () => {
        history.push(`/quizCreation`)
    }

    const removeQuiz = async (i) => {
        console.log("going to remove",quizzes[i][BODY.QUIZID])
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        await quizApis.deleteQuizWithQuestions(quizzes[i][BODY.QUIZID], headers)
        let newQuizzes = [...quizzes]
        if(newQuizzes.length>-1){
            newQuizzes.splice(i, 1)
        }
        setQuizzes(newQuizzes)
    }

    return (
        <div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Quiz Management</div>
                <Button className={classes.back}>Back</Button>
            </div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Filter</div>
                <div><Button onClick={redirectQuizCreation}>Create quiz</Button>
                <Button>delete</Button></div>
            </div>
            <table cellspacing="0" rule="all" border ="1" id="quizzes">
                <tr>
                    <th>&nbsp;</th>
                    <th className={classes.cell}>All</th>
                    <th className={classes.cell}>Statue</th>
                    <th className={classes.cell}>Date</th>
                    <th className={classes.cell}>View</th>
                    <th className={classes.cell}>&nbsp;</th>
                </tr>

                {quizzes.map((quiz, i) => {
                    return (
                        <tr>
                             <td><input type="checkbox"/></td>
                             <td>{quiz[BODY.QUIZNAME]}</td>
                             <td className={classes.colorGreen}>published</td>
                             <td>{quiz[BODY.CREATIONTIME]}</td>
                             <td>{quiz[BODY.TAKECOUNTS]}</td>
                             <td><Button onClick={()=>{removeQuiz(i)}} >&#10005;</Button></td>
                        </tr>
                    )
                })}

                        
                    </table>
            <div className={classes.quizContainer}>
                <Button className={classes.back}>Back</Button>
            </div>
            
        </div>
        )
}
export default QuizManagement;