import {useEffect, useState, useRef} from 'react';
import { useStyles } from './style';
import FeatureCard from '../FeatureCard';
import CategoryBar from '../CategoryBar';
import QuizDisplayBoard from '../QuizDisplayBoard';
import quizApis from '../../../api/quiz-api';
import BODY from '../../../constant/body';
import CatgeorySideBar from '../CategorySideBar';
import QUIZ_CATEGORY from '../../../constant/quiz-category';
const MainBoard = () => {
    const classes = useStyles()
    const [quiz, setQuiz] = useState()
    const [image, setImage] = useState("")
    const [bar, setBar] = useState([
        QUIZ_CATEGORY.ALL,
        QUIZ_CATEGORY.Computer_Science,
        QUIZ_CATEGORY.Computer_Network,
        QUIZ_CATEGORY.Computer_Vision,
        QUIZ_CATEGORY.Machine_Learning,
        QUIZ_CATEGORY.Data_Structure,
        QUIZ_CATEGORY.Data_Mining
    ])
    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]

    useEffect(()=>{

        const loadPopularQuiz = async () =>{
            try{
                let response = await quizApis.getMostPopularQuiz()
                let data = response.data
                if(data.length <= 0){
                    return
                }
                setQuiz(data[0])
                response = await quizApis.getQuizThumbnail(data[0][BODY.QUIZID])
                setImage(response.data)
            }catch(e){
                console.log(e)
            }
        }

        loadPopularQuiz()
        return ()=>{
            setQuiz()
            setImage()
        }
    }, [])
    return (
        <div className={classes.mainContainer}>
            <CategoryBar/>
            <FeatureCard
                quiz={quiz}
                image={image}/>
            {bar.map((c,i)=>{
                return (
                <div ref={refs[i]}>
                    <QuizDisplayBoard key={i} category={c}/>
                </div>
                )
            })}

            <CatgeorySideBar
            bar={bar}
            refs={refs}/>
        </div>
    )
}

export default MainBoard