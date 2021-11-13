import {useEffect, useState} from 'react';
import { useStyles } from './style';
import FeatureCard from '../FeatureCard';
import CategoryBar from '../CategoryBar';
import QuizDisplayBoard from '../QuizDisplayBoard';
import quizApis from '../../../api/quiz-api';
import BODY from '../../../constant/body';

const MainBoard = () => {
    const classes = useStyles()

    // const [topUsers, setTopUsers] = useState([])

    // useEffect(()=>{
    //     getTopUsersFromLeaderboard();
    // },[])    

    // const getTopUsersFromLeaderboard = async () => {
    //     await userApis.getMainLeaderboard().then((response) => {
    //         setTopUsers(response.data);
    //         console.log(response.data)
    //     })
    // }

    const [quiz, setQuiz] = useState()
    const [image, setImage] = useState("")


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
            <QuizDisplayBoard 
                category={0}/>
            {/* <QuizDisplayBoard/>
            <QuizDisplayBoard/> */}
        </div>
    )
}

export default MainBoard