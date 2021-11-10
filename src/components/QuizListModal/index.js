
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import { useState, useEffect, useContext } from 'react'
import { useStyles } from './style'
import quizApis from '../../api/quiz-api'
import QuizCard from '../QuizCard'
import BODY from '../../constant/body'
import AuthContext from '../../context/auth-context'
import HEADER from '../../constant/header'
const QuizListModal = (props)=>{
    const classes = useStyles()
    const { auth } = useContext(AuthContext)
    useEffect(()=>{
        console.log(props.userId)
    }, [])


    const handleClose = ()=>{
        props.setOpen(false)
    }

    const pickQuiz = async (event,i)=>{
        console.log("pick quiz", props.quizzes[i][BODY.QUIZID])
        const payload = {
            [BODY.QUIZID]: props.quizzes[i][BODY.QUIZID]
        }
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        await quizApis.setUserTopFeatureQuiz(payload, headers)
        props.onChangeQuiz(i)
        props.setOpen(false)
    }

    return(
        <Modal
            open={props.open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Quiz List
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.quizzes.map((quiz, i)=>{
                            return <div onClick={(event)=>{pickQuiz(event, i)}}>
                                <QuizCard key={i} quiz={quiz}/>
                            </div>
                        })}
                    </Typography>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </Box>
        </Modal>
    )
}

export default QuizListModal