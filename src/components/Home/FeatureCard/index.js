import { useStyles } from "./style"
import {useState, useEffect, useContext, useRef } from 'react';
import { useHistory } from "react-router-dom";
import quizApi from "../../../api/quiz-api"
import BODY from "../../../constant/body"

const FeatureCard = () =>{
    const classes = useStyles()
    const [featureCard, setFeatureCard] = useState({
        quizName: "",
        quizDescription: "",
        thumbnail: "",
        loaded: false
    });

    const [image, setImage] = useState("")


    useEffect(()=>{
        loadPopularQuiz()
        console.log("loading quiz")
    }, [])

    const loadPopularQuiz = async () =>{
        console.log("loadinggggggg")
        try{
            let response = await quizApi.getMostPopularQuiz()
            let data = response.data
            if(data.length <= 0){
                return
            }
            let newFeatureCard = {
                quizName: data[0][BODY.QUIZNAME],
                quizDescription: data[0][BODY.QUIZDESCRIPTION],
                thumbnail: data[0][BODY.QUIZTHUMBNAIL],
                loaded: true
            }
            setFeatureCard(newFeatureCard)
            response = await quizApi.getQuizThumbnail(data[0][BODY.QUIZID])
            setImage(response.data)
             // let src = "data:" + response.headers['content-type'] + ";base64," + Buffer.from(response.data, 'binary').toString('base64')
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div className={classes.featureCardContainer}>
            <div className={classes.description}>
                <div className={classes.popularTitle} >Most Popular Quiz!!!!</div>
                <div className={classes.quizBox}>
                    <div className={classes.quizName}>{featureCard.quizName}</div>
                    <div className={classes.quizDescription}>{featureCard.quizDescription}</div>
                </div>
            </div>
            <div className={classes.img}>
                <img className={classes.imgSize} src={image}/>
            </div>
        </div>
    )

}

export default FeatureCard