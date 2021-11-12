import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import BODY from '../../constant/body'
import { useEffect, useState } from 'react'
import { useStyles } from './style'
import quizApis from '../../api/quiz-api'
import HEADER from '../../constant/header'

const QuestionEditModal = ({open, handleClose, anschoices, question, quizId, auth})=>{
    const [numOfChoices, setNumOfChoices] = useState(0)
    const [choices, setChoices] = useState([])
    const [correct, setCorrect] = useState([])
    const [questionName, setQuestionName] = useState("")
    const classes = useStyles()

    useEffect(()=>{
        if(question !== undefined && question != null){
            setQuestionName(question[BODY.QUESTION])
            let newCorrect = []
            let newChoices = []
            for(var i = 0; i < anschoices.length; i++){
                newCorrect.push(anschoices[i][BODY.ISRIGHTCHOICE])
                newChoices.push(anschoices[i][BODY.CHOICE])
            }
            setChoices(newChoices)
            setCorrect(newCorrect)
        }

    },[anschoices, question])
    const clearModal = ()=>{
        setNumOfChoices(0)
        setChoices([])
        setCorrect([])
        setQuestionName("")
    }

    const clsoeModal = ()=>{
        clearModal()
        handleClose()
    }

    const addChoice = ()=>{
        setNumOfChoices(numOfChoices+1)
        setChoices([...choices, ""])
        setCorrect([...correct, false])
    }

    const editChoice = (event, i) => {
        let newChoices = [...choices]
        newChoices[i] = event.target.value
        setChoices(newChoices)
    }

    const onChangeQuestionName = (event)=>{
        setQuestionName(event.target.value)
    }

    const onUpdate = async ()=>{
        let updateChoices= []
        for(var i = 0; i <  choices.length; i++){
            updateChoices.push({
                [BODY.ISRIGHTCHOICE]: correct[i],
                [BODY.CHOICE]: choices[i]
            })
        }
        let payload = {
            [BODY.CHOICES]: updateChoices,
            [BODY.QUIZID]: quizId,
            [BODY.QUESTIONID]: question[BODY.QUESTIONID]
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        quizApis.updateQuestionChoice(payload, headers)
        clearModal()
        handleClose()
    }

    const onDelete = (i)=>{
        let newChoices = [...choices]
        newChoices.splice(i, 1)
        correct.splice(i, 1)
        setChoices(newChoices)
    }

    const onChecked = (event, i)=>{
        correct[i] = event.currentTarget.checked
    }

    return(
        <div>
            <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Question
                    </Typography>
                    <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2 }}
                    component={'span'} 
                    variant={'body2'}>
                        <div>
                            <div className={classes.subSection}>
                                <div className={classes.subTitle}>Question Name</div>
                                <input defaultValue={questionName} onKeyUp={onChangeQuestionName} className={classes.questionNameField}/>
                            </div>
                            <div className={classes.subSection}>
                                <table className={classes.toCenter}>
                                    <thead>
                                        <tr>
                                            <th >&nbsp;</th>
                                            <th>Number</th>
                                            <th>Choices</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            choices.map((x, i)=>{
                                                return <tr key={i}> 
                                                    <td><input defaultChecked={correct[i]} type="checkbox" onChange={(event)=>{onChecked(event, i)}}/>&nbsp;</td>
                                                    <td>#{i+1}</td>
                                                    <td><input type="text" value={x} onChange={(event)=>{editChoice(event, i)}}/></td>
                                                    <td className={classes.delete} onClick={()=>{onDelete(i)}}>&#10005;</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>

                                </table>
                                <Button onClick={addChoice}>Add Choice</Button>
                            </div>
                            <Button onClick={clsoeModal}>
                                Close
                            </Button>
                            <Button onClick={onUpdate}>
                                Update
                            </Button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default QuestionEditModal