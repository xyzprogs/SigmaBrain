import {useEffect, useState} from 'react';
import { useStyles } from './style';
import FeatureCard from '../FeatureCard';
import CategoryBar from '../CategoryBar';
import QuizDisplayBoard from '../QuizDisplayBoard';
import userApis from "../../../api/user-api"

const MainBoard = () => {
    const classes = useStyles()

    const [topUsers, setTopUsers] = useState([])

    useEffect(()=>{
        getTopUsersFromLeaderboard();
    },[])    

    const getTopUsersFromLeaderboard = async () => {
        await userApis.getMainLeaderboard().then((response) => {
            setTopUsers(response.data);
        })
    }


    return (
        <div className={classes.mainContainer}>
            <CategoryBar/>
            <FeatureCard/>
            <QuizDisplayBoard 
                category={0} topUsers = {topUsers}/>
            <QuizDisplayBoard topUsers = {topUsers}/>
            <QuizDisplayBoard topUsers = {topUsers}/>
        </div>
    )
}

export default MainBoard