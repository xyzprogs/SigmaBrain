import {useState} from 'react';
import { useStyles } from './style';
import FeatureCard from '../FeatureCard';
import CategoryBar from '../CategoryBar';
import QuizDisplayBoard from '../QuizDisplayBoard';
const MainBoard = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <CategoryBar/>
            <FeatureCard/>
            <QuizDisplayBoard/>
            <QuizDisplayBoard/>
            <QuizDisplayBoard/>
        </div>
    )
}

export default MainBoard