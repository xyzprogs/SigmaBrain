import { useState, useEffect, useContext } from 'react'
import BODY from '../../../constant/body'
import quizApis from '../../../api/quiz-api'
import AuthContext from '../../../context/auth-context'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QuestionEditModal from '../../QuestionEditModal'
import HEADER from '../../../constant/header'
const QuestionSection = ({quiz})=>{
    const { auth } = useContext(AuthContext)
    const [questions, setQuestions] = useState([])
    const [open, setOpen] = useState(false)
    const [choices, setChoices] = useState([])
    const [question, setQuestion] = useState()
    const handleClose = () => {
        setOpen(false)
    }
    useEffect(()=>{
        const loadQuestions = async () => {
            let quizId = quiz[BODY.QUIZID]
            let response = await quizApis.getQuestions(quizId)
            setQuestions(response.data)
        }
        loadQuestions()
    }, [quiz])


    const selectQuestion = async (i) => {
        let questionId = questions[i][BODY.QUESTIONID]
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        let response = await quizApis.getChoicesInAQuestionWithAnswer(questionId, headers)
        setOpen(true)
        setChoices(response.data)
        setQuestion(questions[i])
    }

    return(
        <div>
            <div>
                {questions.map((q,i)=>{
                    return (<Card key={i}>
                    <CardContent>
                    <Typography variant="h5" component="div">
                        {i+1}.{q[BODY.QUESTION]}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={()=>{selectQuestion(i)}}>Edit Question</Button>
                    </CardActions>
                </Card>)
                })}
            </div>
            <QuestionEditModal
                open={open}
                handleClose={handleClose}
                anschoices={choices}
                question={question}
                quizId={quiz[BODY.QUIZID]}
                auth={auth}
                />
        </div>
    )
}

export default QuestionSection