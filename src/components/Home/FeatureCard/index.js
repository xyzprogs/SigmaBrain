import { useStyles } from "./style"
import BODY from "../../../constant/body"
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
const FeatureCard = (props) =>{
    const classes = useStyles()
    const history = useHistory()
    const viewQuiz = ()=>{
        let quizId = props.quiz[BODY.QUIZID]
        history.push(`/quizDescription/${quizId}`)
    }
    if(props.quiz===undefined){
        return <div>No Quiz Found</div>
    }
    return(
        <div className={classes.featureCardContainer}>
            <div className={classes.description}>
                {/* <div className={classes.popularTitle} >Most Popular Quiz!!!!</div> */}
                <div className={classes.quizBox}>
                    <div className={classes.quizName}>{props.quiz[BODY.QUIZNAME]}</div>
                    <div className={classes.quizDescription}>{props.quiz[BODY.QUIZDESCRIPTION]}</div>
                    <div className={classes.clickButton} onClick={viewQuiz}>SEE MORE</div>
                </div>
            </div>
            <div className={classes.img}>
                <img className={classes.imgSize} src={props.image} alt="feature card thumbnial"/>
            </div>
            
        </div>
    )

}

export default FeatureCard