import React from 'react';
import { userStyles } from "./style";
import { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import BODY from '../../constant/body';
import quizApis from '../../api/quiz-api';
import AuthContext from '../../context/auth-context';
import HEADER from '../../constant/header';
import {QUIZ_CATEGORY_NAME} from '../../constant/quiz-category'
const QuizCreation = () => {
    const classes = userStyles()
    const imgRef = useRef()
    const [introduction, setIntroduction] = useState()
    const [timeLimit, setTimeLimit] = useState(0)
    const [image, setImage] = useState()
    const [imageAsFile, setImageAsFile] = useState()
    const [name, setName] = useState()
    const { auth } = useContext(AuthContext)
    const history = useHistory()
    const [auto, setAuto] = useState([[]])



    const clickUpload = ()=>{
        imgRef.current.click()
    }

    const onImageUpload = (event)=>{
        setImage(URL.createObjectURL(event.target.files[0]))
        setImageAsFile(event.target.files[0])
    }

    const onChangeIntroduction = (event)=>{
        setIntroduction(event.target.value)
    }

    const onChangeTimeLimit = (event)=>{
        setTimeLimit(event.target.value)
    }

    const onChangeName = (event)=>{
        setName(event.target.value)
    }

    const onChangeCategory = (event)=>{
        let newMatch = []
        for(var i = 0; i < QUIZ_CATEGORY_NAME.length; i++){
            if(QUIZ_CATEGORY_NAME[i].toLowerCase().startsWith(event.target.value.toLowerCase()) 
                && event.target.value != ""){
                console.log(QUIZ_CATEGORY_NAME[i])
                newMatch.push([QUIZ_CATEGORY_NAME[i], i])
            }
        }
        setAuto(newMatch)
    }

    const onSave = async ()=>{
        const quiz = {
            [BODY.QUIZNAME]: name,
            [BODY.QUIZCATEGORY]: 1,
            [BODY.QUIZDESCRIPTION]: introduction,
            [BODY.ISPUBLISHED]: 0
        }

        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }


        let response = await quizApis.createQuiz(quiz, headers)
        let quizId = response.data.insertId
        const data = new FormData()
        data.append(BODY.QUIZID, quizId)
        data.append(BODY.QUIZTHUMBNAIL, imageAsFile)
        await quizApis.setQuizThumbnail(quizId, data, headers)
        history.push(`/quizManagement`);
    }

    return (
        <div className={classes.creationCardContainer}>
            <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
            <div className={classes.title}>
                <div>Quiz Creator</div>
            </div>

            <div className={classes.quizName}>
                <div className={classes.subTitle}>Quiz Name</div>
                <input className={classes.quizNameField} onKeyUp={onChangeName}/>
            </div>

            <div className={classes.cover}>
                <div className={classes.subTitle}>Cover</div>
                <div className={`${classes.btn} ${classes.toCenter}`} onClick={clickUpload}>
                    <div className={classes.btnText}>upload</div>
                </div>
                <div className={classes.imgContainer}>
                    <img  className={classes.imgSize} src={image}/>
                </div>
            </div>

            <div className={classes.introduction}>
                <div className={classes.subTitle}>Introduction</div>
                <textarea onKeyUp={onChangeIntroduction} className={classes.introductionBox}/>
            </div>

            <div className={classes.timeLimit}>
                <div className={classes.subTitle}>Time Limit</div>
                <div className={classes.flexBox}>
                    <input onKeyUp={onChangeTimeLimit}/>
                    <div className={classes.unit}>min</div>
                </div>
            </div>

            <div className={classes.quizCategory}>
                <div className={classes.subTitle}>Quiz Category</div>
                <div>
                    <input onKeyUp={onChangeCategory}/>
                    {auto.map((category, i) => <div>{category[0]}</div>)}
                </div>
            </div>

            <div>
                <div className={`${classes.toRight} ${classes.btn}`} onClick={onSave}>
                    <div className={classes.btnText}>Save</div>
                </div>
            </div>
        </div>
    )
}

export default QuizCreation;
