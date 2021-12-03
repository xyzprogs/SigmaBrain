import { useStyles } from './style'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectionWrapper from './SectionWrapper'
import quizApis from '../../api/quiz-api'
const QuizEditing = () => {
    const classes = useStyles()
    const [tag, setTag] = useState(0)
    const [quiz, setQuiz] = useState()
    const { quizId } = useParams()
    const changeTag = (newTag) => {
        setTag(newTag)
    }
    useEffect(()=>{
        const loadQuiz = async () => {
            let response = await quizApis.getQuizByQuizId(quizId)
            if(response.data.length>0){
                setQuiz(response.data[0])
            }
        }
        loadQuiz()
    },[quizId])

    if(quiz===undefined || quiz==null){
        return <div>loading</div>
    }
    return(
        <div className={classes.container}>
            <div className={classes.subsection}>
                Quiz Title
            </div>

            <div className={`${classes.subsection} ${classes.flex}`}>
                <div onClick={()=>{changeTag(0)}} className={`${classes.selection}`}>Quiz Information</div>
                <div onClick={()=>{changeTag(1)}} className={`${classes.marginLeft} ${classes.selection}`}>Quiz Question</div>
            </div>
            <div className={classes.container}>
                <SectionWrapper
                    tag={tag}
                    quiz={quiz}/>
            </div>
        </div>
    )

}

export default QuizEditing