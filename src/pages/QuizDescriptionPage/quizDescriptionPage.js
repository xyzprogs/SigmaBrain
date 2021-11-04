import {useEffect, useState } from 'react'
import { useStyles } from './style'
import {  } from 'react-router-dom'
import quizApis from '../../api/quiz-api'
import NavBar from '../../components/NavBar'
import DescriptionBox from '../../components/Description/DescriptionBox'
import CommentSection from '../../components/Description/CommentSection'

const QuizDescriptionPage = (props)=>{
    const classes = useStyles()

    return(
    <div className={classes.pageContainer}>
        <NavBar/>
        <div className={classes.descriptionBox}>
            <DescriptionBox quizId={props.match.params.quizId}/>
        </div>
        <CommentSection/>
    </div>
    )
}


export default QuizDescriptionPage