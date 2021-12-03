import { useStyles } from './style'
import DescriptionBox from '../../components/Description/DescriptionBox'
import CommentSection from '../../components/Description/CommentSection'

const QuizDescriptionPage = (props)=>{
    const classes = useStyles()

    return(
    <div className={classes.pageContainer}>
        <div className={classes.descriptionBox}>
            <DescriptionBox quizId={props.match.params.quizId}/>
        </div>
        <div className={classes.line}/>
        <CommentSection quizId={props.match.params.quizId}/>
    </div>
    )
}


export default QuizDescriptionPage