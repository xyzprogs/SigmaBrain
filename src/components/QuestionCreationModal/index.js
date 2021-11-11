import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import QUESTION_TYPE from '../../constant/question-type'
import BODY from '../../constant/body'
import { useState } from 'react'
import { userStyles } from './style'

const QuestionCreationModal = (props)=>{
    const [numOfChoices, setNumOfChoices] = useState(0)
    const [choices, setChoices] = useState([])
    const [correct, setCorrect] = useState([])
    const [questionName, setQuestionName] = useState("")
    const classes = userStyles()

    const clearModal = ()=>{
        setNumOfChoices(0)
        setChoices([])
        setCorrect([])
        setQuestionName("")
    }
    
    const handleClose = ()=>{
        clearModal()
        props.handleClose()
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

    const buildChoiceList = (choices, correct)=>{
        let list = []
        for(var i = 0; i < choices.length; i++){
            list.push(
                {
                    [BODY.ISRIGHTCHOICE]: correct[i]?1:0,
                    [BODY.CHOICE]: choices[i]
                }
            )
        }
        return list
    }
    const onSave = ()=>{
        let question = {
            [BODY.QUESTIONTYPE]: QUESTION_TYPE.MULTIPLE_CHOICE,
            [BODY.NUMBEROFCHOICE]: choices.length,
            [BODY.QUESTION]: questionName,
            [BODY.CHOICES]: buildChoiceList(choices, correct)
        }
        props.addQuestion(question)
        props.handleClose()
        clearModal()
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
            open={props.open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Question
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <div className={classes.subSection}>
                                <div className={classes.subTitle}>Quiz Name</div>
                                <input onKeyUp={onChangeQuestionName} className={classes.questionNameField}/>
                            </div>
                            <div className={classes.subSection}>
                                <div className={classes.toCenter}>
                                    <tr>
                                        <th >&nbsp;</th>
                                        <th>Number</th>
                                        <th>Choices</th>
                                    </tr>
                                    {
                                        choices.map((x, i)=>{
                                            return <tr key={i}> 
                                                <td><input type="checkbox" onChange={(event)=>{onChecked(event, i)}}/>&nbsp;</td>
                                                <td>#{i+1}</td>
                                                <td><input type="text" value={x} onChange={(event)=>{editChoice(event, i)}}/></td>
                                                <td className={classes.delete} onClick={()=>{onDelete(i)}}>&#10005;</td>
                                            </tr>
                                        })
                                    }
                                </div>
                                <Button onClick={addChoice}>Add Choice</Button>
                            </div>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={onSave}>
                                Save
                            </Button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default QuestionCreationModal