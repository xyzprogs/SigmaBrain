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
    const [selectedQuizzes, setSelectedQuizzes] = useState([])
    const [checkedState, setCheckedState] = useState([]);

    const { auth } = useContext(AuthContext)

    useEffect(() => {
        const loadUserQuizzes = async () => {
            // let id =  auth.getCurrentUserUid()
            let id = localStorage.getItem("uid")
            let response = await quizApis.getUserQuiz(id)
            setQuizzes(response.data)
            setCheckedState(new Array(response.data.length).fill(false))
        }

        loadUserQuizzes()
        return () => {
            setQuizzes([])
        }
    }, [auth])

    const redirectQuizCreation = () => {
        history.push(`/quizCreation`)
    }

    const redirectQuizEditing = (quizId) => {
        history.push(`/quizEditing/${quizId}`)
    }

    const setSelected = (checked, i) => {
        //checked argument is true when the box is checked
        //index stores the index of the quiz
        let tempQuizzes = selectedQuizzes

        const updatedCheckedState = checkedState.map((item, index) =>
            index === i ? !item : item
        );

        setCheckedState(updatedCheckedState);

        if (checked) {
            //if the box is checked
            tempQuizzes.push(i)
        } else {
            //if the box is unchecked
            let index = tempQuizzes.indexOf(i);
            if (index > -1) {
                tempQuizzes.splice(index, 1);
            }
        }

        setSelectedQuizzes(tempQuizzes)

        //set the value of the checked array

    }

    const removeQuiz = async (i) => {
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        await quizApis.deleteQuizWithQuestions(quizzes[i][BODY.QUIZID], headers)
        let newQuizzes = [...quizzes]
        if (newQuizzes.length > -1) {
            newQuizzes.splice(i, 1)
        }
        setQuizzes(newQuizzes)
    }

    const handleDeleteMultipleQuizzes = async () => {
        //temp solution, should write api to delete multiple quizzes
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }

        for (let quizzId in selectedQuizzes) {
            let i = selectedQuizzes[quizzId]
            await quizApis.deleteQuizWithQuestions(quizzes[i][BODY.QUIZID], headers)
        }


        //reloads the page
        const loadUserQuizzes = async () => {
            // let id =  auth.getCurrentUserUid()
            let id = localStorage.getItem("uid")
            let response = await quizApis.getUserQuiz(id)
            setQuizzes(response.data)
            //set false for the checkboxes
            setCheckedState(new Array(response.data.length).fill(false))
        }

        loadUserQuizzes()
        setSelectedQuizzes([])
        return () => {
            setQuizzes([])
        }

    }

    return (
        <div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Quiz Management</div>
                {/* <Button className={classes.back}>Back</Button> */}
            </div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Filter</div>
                <div><Button onClick={redirectQuizCreation}>Create quiz</Button>
                    <Button onClick={handleDeleteMultipleQuizzes}>delete</Button></div>
            </div>
            <table cellSpacing="0" rule="all" border="1" id="quizzes">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th className={classes.cell}>All</th>
                        <th className={classes.cell}>Statue</th>
                        <th className={classes.cell}>Date</th>
                        <th className={classes.cell}>View</th>
                        <th className={classes.cell}>&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    {quizzes.map((quiz, i) => {
                        return (
                            <tr key={i}>
                                <td><input onChange={(e) => setSelected(e.target.checked, i)} type="checkbox" checked={!!checkedState[i]} /></td>
                                <td onClick={() => { redirectQuizEditing(quiz[BODY.QUIZID]) }}>{quiz[BODY.QUIZNAME]}</td>
                                <td className={classes.colorGreen}>published</td>
                                <td>{quiz[BODY.CREATIONTIME]}</td>
                                <td>{quiz[BODY.TAKECOUNTS]}</td>
                                <td><Button onClick={() => { removeQuiz(i) }} >&#10005;</Button></td>
                            </tr>
                        )
                    })}
                </tbody>


            </table>
            {/* <div className={classes.quizContainer}>
                <Button className={classes.back}>Back</Button>
            </div> */}

        </div>
    )
}
export default QuizManagement;