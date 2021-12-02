import { useStyles } from './style'
import { useState, useEffect } from 'react'
import quizApis from '../../../api/quiz-api'
import BODY from '../../../constant/body'
import default_thumbnial from '../../../images/default_quiz_thumbnail.png'
const ManagementCard = ({quiz})=>{
    const classes = useStyles()
    const [image, setImage] = useState("")
    useEffect(()=>{
        const loadImage = async () => {
            try{
                let response = await quizApis.getQuizThumbnail(quiz[BODY.QUIZID])
                setImage(response.data)
            }catch(e){
                setImage(default_thumbnial)
            }
        }
        loadImage()
    },[])
    return(
        <div className={classes.quizContainer}>
            <div className={classes.imgContainer}>
                <img  className={classes.imgSize} alt="" src={image}/>
            </div>
            <div className={classes.nameContainer}>{quiz[BODY.QUIZNAME]}</div>
        </div>
    )
}

export default ManagementCard