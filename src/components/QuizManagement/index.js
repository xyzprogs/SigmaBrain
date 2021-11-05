import { useState, useEffect, useContext } from 'react'
import { useStyles } from './style'
import { useHistory } from 'react-router'
import Button from '@restart/ui/esm/Button'
import AuthContext from '../../context/auth-context'
import quizApis from '../../api/quiz-api'
import BODY from '../../constant/body'
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
        let id =  auth.user.auth.currentUser.uid
        let response = await quizApis.getUserQuiz(id)
        setQuizzes(response.data)
    }

    return (
        <div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Quiz Management</div>
                <Button className={classes.back}>Back</Button>
            </div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Filter</div>
                <p><Button>Create quiz</Button>
                <Button>delete</Button></p>
            </div>
            <table cellspacing="0" rule="all" border ="1" id="quizzes">
                <tr>
                    <th className={classes.cell}><input type="checkbox"/>All</th>
                    <th className={classes.cell}></th>
                    <th className={classes.cell}>Statue</th>
                    <th className={classes.cell}>Date</th>
                    <th className={classes.cell}>View</th>
                    <th className={classes.cell}>Comment</th>
                </tr>
                {/* <tr>
                    <td><input type="checkbox"/></td>
                    <td onClick={()=>history.push('/quizcreation')}>Quiz 1</td>
                    <td className={classes.colorGreen}>published</td>
                    <td>Oct/29/2019</td>
                    <td>291</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Quiz 2</td>
                    <td className={classes.colorYellow}>saved</td>
                    <td>Oct/29/2019</td>
                    <td>291</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Quiz 3</td>
                    <td className={classes.colorGreen}>published</td>
                    <td>Oct/29/2019</td>
                    <td>291</td>
                    <td>2</td>
                </tr> */}

                {quizzes.map((quiz, i) => {
                    return (
                        <tr>
                             <td><input type="checkbox"/></td>
                             <td>{quiz[BODY.QUIZNAME]}</td>
                             <td className={classes.colorGreen}>published</td>
                             <td>{quiz[BODY.CREATIONTIME]}</td>
                             <td>{quiz[BODY.TAKECOUNTS]}</td>
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