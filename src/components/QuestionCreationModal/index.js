import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import QUESTION_TYPE from '../../constant/question-type'
import BODY from '../../constant/body'
import { useState, useEffect } from 'react'
import { userStyles } from './style'

const QuestionCreationModal = (props)=>{
    const [numOfChoices, setNumOfChoices] = useState(0)
    const [choices, setChoices] = useState([])
    const [correct, setCorrect] = useState([])
    const [questionName, setQuestionName] = useState("")
    const classes = userStyles()
    const [errorMsg, setErrorMsg] = useState({});
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        if(props.edit !== -1){
            setEditMode(true)
            console.log(props.questions[props.edit])
            let editQuestion = props.questions[props.edit]
            let choicels = editQuestion[BODY.CHOICES]
            let questionCorrects = []
            let questionChoices = []
            for(let i = 0; i < choicels.length; i++){
                questionCorrects.push(choicels[i][BODY.ISRIGHTCHOICE])
                questionChoices.push(choicels[i][BODY.CHOICE])
            }
            setChoices(questionChoices)
            setCorrect(questionCorrects)
            setNumOfChoices(choicels.length)
            setQuestionName(editQuestion['question'])
            
        }
    },[props.edit])

    const clearModal = ()=>{
        setNumOfChoices(0)
        setChoices([])
        setCorrect([])
        setQuestionName("")
        setErrorMsg({});
    }
    
    const handleClose = ()=>{
        clearModal()
        props.handleClose()
        props.setEdit(-1)
    }

    const addChoice = ()=>{
        if (numOfChoices < 6){
            setNumOfChoices(numOfChoices+1)
            setChoices([...choices, ""])
            setCorrect([...correct, false])
        }else {
            let error = {};
            error.NumberOfChoiceError = "Can't create more than 6 questions";
            setErrorMsg(error);
        }
        
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
        let error = {};
        let flag = false;

        if(question[BODY.QUESTION].length === 0){
            error.QuestionError = "Question cannot be empty";
            flag = true;
        } 

        if (question[BODY.NUMBEROFCHOICE] === 0){
            error.AnswerError = "Question must have atleast one answer choice";
            flag = true;
        }
        
        if(question[BODY.CHOICES].length !== 0){
            let temp = false;
            for (var i = 0; i < question[BODY.CHOICES].length; i++){
                if(question[BODY.CHOICES][i][BODY.ISRIGHTCHOICE]){
                    temp = true;
                    break;
                }
            }
            flag = temp ? false : true;
            error.CorrectError = "Answer choices must have atleast one correct choice"
        }
        setErrorMsg(error);
        if (flag){
            return
        }
        
        if(props.edit!==-1){
           props.updateQuestion(question, props.edit)
        }
        else{
            props.addQuestion(question)
        }
        props.handleClose()
        clearModal()
    }

    const onDelete = (i)=>{
        setErrorMsg({});
        let newChoices = [...choices]
        newChoices.splice(i, 1)
        correct.splice(i, 1)
        setChoices(newChoices)
        setNumOfChoices(numOfChoices - 1);
    }

    const onChecked = (event, i)=>{
        // console.log(event.currentTarget.checked)
        // correct[i] = event.currentTarget.checked
        let newCorrect = [...correct]
        newCorrect[i] = event.currentTarget.checked
        setCorrect(newCorrect)
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
                    <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2 }}
                    component={'span'} 
                    variant={'body2'}>
                        <div>
                            <div className={classes.subSection}>
                                <div className={classes.subTitle}>Question</div>
                                <input value={questionName} onChange={onChangeQuestionName} className={classes.questionNameField}/>
                                {errorMsg?.QuestionError && (
                                    <p className={classes.errorMsg}>{errorMsg.QuestionError}</p>
                                )}
                            </div>
                            <div className={classes.subSection}>
                                <div className={classes.toCenter}>
                                    <table>
                                    <tbody>
                                    <tr>
                                        <th >&nbsp;</th>
                                        <th>Number</th>
                                        <th>Choices</th>
                                    </tr>
                                    {
                                        choices.map((x, i)=>{
                                            return <tr key={i}> 
                                                <td><input type="checkbox" onChange={(event)=>{onChecked(event, i)}} checked={correct[i]}/>&nbsp;</td>
                                                <td>#{i+1}</td>
                                                <td><input type="text" value={x} onChange={(event)=>{editChoice(event, i)}}/></td>
                                                <td className={classes.delete} onClick={()=>{onDelete(i)}}>&#10005;</td>
                                            </tr>
                                        })
                                    }
                                    </tbody>
                                    </table>
                                </div>
                                <div className={classes.buttonstyle} onClick={addChoice}>Add Choice</div>
                                {errorMsg?.AnswerError && (
                                    <p className={classes.errorMsg}>{errorMsg.AnswerError}</p>
                                )}
                                {errorMsg?.CorrectError && (
                                    <p className={classes.errorMsg}>{errorMsg.CorrectError}</p>
                                )}
                                {errorMsg?.NumberOfChoiceError && (
                                    <p className={classes.errorMsg}>{errorMsg.NumberOfChoiceError}</p>
                                )}
                            </div>
                            <div className={classes.buttonPosition}>
                            <Button  onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={onSave}>
                                Save
                            </Button>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default QuestionCreationModal