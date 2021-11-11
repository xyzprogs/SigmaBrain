import { useStyles } from "./style"
import BODY from "../../../constant/body"

const FeatureCard = (props) =>{
    const classes = useStyles()
    if(props.quiz===undefined){
        return <div>loading</div>
    }
    return(
        <div className={classes.featureCardContainer}>
            <div className={classes.description}>
                {/* <div className={classes.popularTitle} >Most Popular Quiz!!!!</div> */}
                <div className={classes.quizBox}>
                    <div className={classes.quizName}>{props.quiz[BODY.QUIZNAME]}</div>
                    <div className={classes.quizDescription}>{props.quiz[BODY.QUIZDESCRIPTION]}</div>
                </div>
            </div>
            <div className={classes.img}>
                <img className={classes.imgSize} src={props.image} alt="feature card thumbnial"/>
            </div>
        </div>
    )

}

export default FeatureCard