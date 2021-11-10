import { useStyles } from "./style"
import { useHistory } from "react-router-dom";
import BODY from "../../../constant/body"

const FeatureCard = (props) =>{
    const classes = useStyles()
    // const [featureCard, setFeatureCard] = useState({
    //     quizName: "",
    //     quizDescription: "",
    //     thumbnail: "",
    //     loaded: false
    // });
    // const [image, setImage] = useState("")
    // useEffect(()=>{
    //     loadPopularQuiz()
    // }, [])
    // const loadPopularQuiz = async () =>{
    //     try{
    //         let response = await quizApi.getMostPopularQuiz()
    //         let data = response.data
    //         if(data.length <= 0){
    //             return
    //         }
    //         let newFeatureCard = {
    //             quizName: data[0][BODY.QUIZNAME],
    //             quizDescription: data[0][BODY.QUIZDESCRIPTION],
    //             thumbnail: data[0][BODY.QUIZTHUMBNAIL],
    //             loaded: true
    //         }
    //         setFeatureCard(newFeatureCard)
    //         response = await quizApi.getQuizThumbnail(data[0][BODY.QUIZID])
    //         setImage(response.data)
    //          // let src = "data:" + response.headers['content-type'] + ";base64," + Buffer.from(response.data, 'binary').toString('base64')
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
    if(props.quiz==undefined){
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
                <img className={classes.imgSize} src={props.image}/>
            </div>
        </div>
    )

}

export default FeatureCard