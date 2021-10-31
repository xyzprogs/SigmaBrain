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
        if(!featureCard.loaded){
            loadPopularQuiz()
            console.log("loading quiz")
        }
    })

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
            // let src = "data:" + response.headers['content-type'] + ";base64," + Buffer.from(response.data, 'binary').toString('base64')
            console.log(response.data)
            setImage(response.data)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div className={classes.featureCardContainer}>
            <div>
                <div>Most Popular Quiz!!!!</div>
                <div>{featureCard.quizName}</div>
                <div>{featureCard.quizDescription}</div>
            </div>
            <img src={image}/>

// const FeatureCard = () => {
//     const classes = useStyles()
//     return (
//         <div className={classes.featureCardContainer}>
//             <div>
//                 <div className={classes.titleName}>
//                     Most Popular
//                 </div>
//                 <div>quiz description</div>
//             </div>
//             <div className={classes.imgContainer}>
//                 <img src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
//                 height='200px'/>
//             </div>
        </div>
    )

}

export default FeatureCard