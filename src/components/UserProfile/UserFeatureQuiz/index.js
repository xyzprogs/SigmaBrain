import { useStyles } from './style'
import { useEffect, useState } from 'react'
import quizApis from '../../../api/quiz-api'
import Button from '@mui/material/Button'
import QuizListModal from '../../QuizListModal'
import BODY from '../../../constant/body'
import FeatureCard from '../../Home/FeatureCard'
const UserFeatureQuiz = (props) => {
    const classes = useStyles()
    const [quiz, setQuiz] = useState(null)
    const [quizzes, setQuizzes] = useState([])
    const [quizFound, setQuizFound] = useState(false)
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState("")
    useEffect(()=>{
        const loadTopFeatureQuiz = async ()=>{
            let response = await quizApis.getUserTopFeatureQuiz(props.userId)
            if(response.data.length>0){
                setQuiz(response.data[0])
                let img_response = await quizApis.getQuizThumbnail(response.data[0][BODY.QUIZID])
                setImage(img_response.data)
                setQuizFound(true)
            }
        }

        const loadQuizzes = async ()=>{
            let response = await quizApis.getUserQuiz(props.userId)
            console.log(response.data)
            setQuizzes(response.data)
        }

        loadTopFeatureQuiz()
        loadQuizzes()    
    },[props.userId])
    



    const handleOpen = ()=>{
        setOpen(true)
    }

    const onChangeQuiz = (i)=>{
        setQuiz(quizzes[i])
        setQuizFound(true)
    }

    if(!quizFound){
        return(
            <div className={classes.quizContainer}>
                <div className={classes.toCenter}>
                    <Button onClick={handleOpen}>Demonstrate Your Favorite Feature Quiz?</Button>
                </div>
                <QuizListModal
                    open={open}
                    setOpen={setOpen}
                    userId={props.userId}
                    quizzes={quizzes}
                    onChangeQuiz={onChangeQuiz}
                />
            </div>
        )
    }
    return(
        <div className={classes.quizContainer}>
            <FeatureCard
                quiz={quiz}
                image={image}
            />
        </div>
    )
}

export default UserFeatureQuiz