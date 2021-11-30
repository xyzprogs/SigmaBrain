import {useEffect, useState, useRef, useContext} from 'react';
import { useStyles } from './style';
import FeatureCard from '../FeatureCard';
import CategoryBar from '../CategoryBar';
import QuizDisplayBoard from '../QuizDisplayBoard';
import quizApis from '../../../api/quiz-api';
import userApis from '../../../api/user-api';
import BODY from '../../../constant/body';
import CatgeorySideBar from '../CategorySideBar';
import AuthContext from '../../../context/auth-context';
import HEADER from '../../../constant/header';
const MainBoard = () => {
    const classes = useStyles()
    const {auth} = useContext(AuthContext)
    const [quiz, setQuiz] = useState()
    const [image, setImage] = useState("")
    const [bar, setBar] = useState([
        
        // QUIZ_CATEGORY.ALL,
        // QUIZ_CATEGORY.Computer_Science,
        // QUIZ_CATEGORY.Computer_Network,
        // QUIZ_CATEGORY.Computer_Vision,
        // QUIZ_CATEGORY.Machine_Learning,
        // QUIZ_CATEGORY.Data_Structure,
        // QUIZ_CATEGORY.Data_Mining
    ])
    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
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

        const loadPreferences = async()=>{
            if(auth.user!=null && auth.user!==undefined){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await userApis.obtainUserCategoryPreference(headers)
                let newlist = [{'categoryId': 0}]
                for(var i = 0; i < response.data.length; i++){
                    newlist.push(response.data[i])
                }
                setBar(newlist)
            }
        }

        loadPreferences()
        loadPopularQuiz()

        return ()=>{
            setQuiz()
            setImage()
        }
    }, [auth.user])

    const loadPreferences = async()=>{
        if(auth.user!=null && auth.user!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let response = await userApis.obtainUserCategoryPreference(headers)
            let newlist = [{'categoryId': 0}]
            for(var i = 0; i < response.data.length; i++){
                newlist.push(response.data[i])
            }
            setBar(newlist)
        }
    }

    return (
        <div className={classes.mainContainer}>
            <CategoryBar
            bar={bar}/>
            <FeatureCard
                quiz={quiz}
                image={image}/>
            {bar.map((c,i)=>{
                return (
                <div key={i} ref={refs[i]}>
                    <QuizDisplayBoard key={i} category={c['categoryId']}/>
                </div>
                )
            })}

            <CatgeorySideBar
            loadPreferences={loadPreferences}
            bar={bar}
            refs={refs}/>
        </div>
    )
}

export default MainBoard