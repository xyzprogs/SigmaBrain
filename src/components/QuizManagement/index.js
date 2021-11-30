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
    const [quizzes, setQuizzes] = useState([])
    const [selectedQuizzes, setSelectedQuizzes] = useState([])
    const [checkedState, setCheckedState] = useState([]);
    const [end, setEnd] = useState(false)
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        const loadUserQuizzes = async () => {
            if(auth.user != null){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await quizApis.getUserQuizAuthenticated(headers)
                updateQuizzes(response)      
            }            
        }

        loadUserQuizzes()
    }, [auth.user])

    const updateQuizzes = (response)=>{
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length !== 10){
                setEnd(true)
            }
            let newarr = [...quizzes]
            let newcheckarr = [...checkedState]
            for(var i = 0; i < sub_arr.length; i++){
                newarr.push(sub_arr[i])
                newcheckarr.push(false)
            }
            setQuizzes(newarr)
            setCheckedState(newcheckarr)
        }
    }

    const loadMore = async()=>{
        if(auth.user != null){
            const token = await auth.user.getIdToken()
            let row = quizzes.length
            let headers = {
                [HEADER.TOKEN] : token
            }
            let response = await quizApis.getUserQuizAuthenticated(headers, row)
            updateQuizzes(response)      
        }    
    }

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
            let response = await quizApis.getUserQuizAuthenticated(id)
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

    const publishQuiz = async (i)=>{
        if(auth.user != null){
            const quiz = quizzes[i]
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {
                [BODY.QUIZID]: quiz[BODY.QUIZID],
                [BODY.ISPUBLISHED]: 1
            }
           await quizApis.publishQuiz(payload, headers)
           let newQuizzes = [...quizzes]
           newQuizzes[i][BODY.ISPUBLISHED] = 1
           setQuizzes(newQuizzes)
        }    
    }

    const unpublishQuiz = async (i)=>{
        if(auth.user != null){
            const quiz = quizzes[i]
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let payload = {
                [BODY.QUIZID]: quiz[BODY.QUIZID],
                [BODY.ISPUBLISHED]: 0
            }
           await quizApis.publishQuiz(payload, headers)
           let newQuizzes = [...quizzes]
           newQuizzes[i][BODY.ISPUBLISHED] = 0
           setQuizzes(newQuizzes)
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
            <div>
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
                                    {quiz[BODY.ISPUBLISHED]===1?<td className={classes.colorGreen}>published</td>:<td className={classes.colorYellow}>unpublished</td>}
                                    <td>{quiz[BODY.CREATIONTIME]}</td>
                                    <td>{quiz[BODY.TAKECOUNTS]}</td>
                                    {quiz[BODY.ISPUBLISHED]===0?<td><Button onClick={()=>{publishQuiz(i)}}>Publish</Button></td>:<td><Button onClick={()=>{unpublishQuiz(i)}}>Unpublish</Button></td>}
                                    <td><Button onClick={() => { removeQuiz(i) }} >&#10005;</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                    {
                        end?<div>No More</div>
                        :<Button onClick={loadMore}>More</Button>
                    }
            </div>
        </div>
    )
}
export default QuizManagement;