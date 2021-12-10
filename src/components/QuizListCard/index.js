import {useStyles} from './style'
import BODY from '../../constant/body'
import {useState, useEffect} from 'react'
import quizApis from '../../api/quiz-api'
import default_thumbnail from '../../images/default_banner.png'
const QuizListCard = ({quiz}) => {
    const classes = useStyles()
    const [image, setImage] = useState("")
    useEffect(()=>{
        const loadQuizThumbnail = async ()=>{
            try{
                let response = await quizApis.getQuizThumbnail(quiz[BODY.QUIZID])
                if(response.data==null || response.data==""){
                    setImage(default_thumbnail)
                    return
                }
                setImage(response.data)
            }catch{
                setImage(default_thumbnail)
            }
        }
        loadQuizThumbnail()
    })
    return(
        <div className={classes.container}>
            <div>
                <img className={classes.imgSize} src={image}/>
            </div>
            <div>
                <div className={classes.quizName}>
                    {quiz[BODY.QUIZNAME]}
                </div>
                <div>
                    <div className={classes.subtitle}>{quiz[BODY.TAKECOUNTS]} take counts . {quiz[BODY.CREATIONTIME]}</div>
                </div>
                <div className={classes.quizDescription}>{quiz[BODY.QUIZDESCRIPTION]}</div>
            </div>
        </div>
    )
}


export default QuizListCard