import React from 'react';
import { userStyles } from "./style";
import { useState, useRef, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import BODY from '../../constant/body';
import quizApis from '../../api/quiz-api';
import AuthContext from '../../context/auth-context';
import HEADER from '../../constant/header';
import { QUIZ_CATEGORY_DICT } from '../../constant/quiz-category'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import QuestionCreationModal from '../QuestionCreationModal';
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
    const [category, setCategory] = useState()
    const [categoryList, setCategoryList] = useState([])
    const [questions, setQuestions] = useState([])  
    const [open, setOpen] = useState(false)  
    // const [categoryText, setCategoryText] = useState("")

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const onAutoChange = (event, value)=>{
        if(value!=null){
            setCategory(value['value'])
        }
    }

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

    const addQuestion = (question)=>{
        let newQuestions = [...questions]
        newQuestions.push(question)
        setQuestions(newQuestions)
    }

    const removeQuestion = (i)=>{
        let newQuestions = [...questions]
        newQuestions.splice(i, 1)
        setQuestions(newQuestions)
    }
    // const onChangeCategory = (event)=>{
    //     console.log(event.target.value)
    //     setCategoryText(event.target.value)
    //     let newMatch = []
    //     for(var i = 0; i < QUIZ_CATEGORY_NAME.length; i++){
    //         if(event.target.value.toLowerCase() == QUIZ_CATEGORY_NAME[i].toLowerCase()){
    //             setCategory([QUIZ_CATEGORY_NAME[i]], i)
    //             console.log("setCategory",QUIZ_CATEGORY_NAME[i])
    //             break
    //         }
    //         if(QUIZ_CATEGORY_NAME[i].toLowerCase().startsWith(event.target.value.toLowerCase()) 
    //             && event.target.value != ""){
    //             console.log(QUIZ_CATEGORY_NAME[i])
    //             newMatch.push([QUIZ_CATEGORY_NAME[i], i])
    //         }
    //     }
    //     setAuto(newMatch)
    // }

    // const clickAutoComplete = (event, category) =>{
    //     console.log("click auto complete", category[0])

    //     setCategoryText(category[0])
    // }

    const onSave = async ()=>{
        const quiz = {
            [BODY.QUIZNAME]: name,
            [BODY.QUIZCATEGORY]: category,
            [BODY.QUIZDESCRIPTION]: introduction,
            [BODY.ISPUBLISHED]: 0,
            [BODY.QUESTIONS]: questions
        }

        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        
        let response = await quizApis.createQuizWithQuestions(quiz, headers)
        let quizId = response.data.insertId
        const data = new FormData()
        data.append(BODY.QUIZID, quizId)
        data.append(BODY.QUIZTHUMBNAIL, imageAsFile)
        await quizApis.setQuizThumbnail(quizId, data, headers)
        history.push(`/quizManagement`);
    }

    // const createQuiz = ()=>{
    //     console.log("creating", questions)
    // }

    useEffect(()=>{
        let categorylist = []
        for(var key in QUIZ_CATEGORY_DICT){
            categorylist.push({label: key, value: QUIZ_CATEGORY_DICT[key]})
        }
        setCategoryList(categorylist)
    }, [])

    return (
        <div className={classes.creationCardContainer}>
            <input type="file" name="image" id="image" alt="quiz thumbnail" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
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
                    <img  className={classes.imgSize} src={image} alt="quiz thumbnail"/>
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
                {/* <div>
                    <input onKeyUp={onChangeCategory} defaultValue={categoryText}/>
                    {auto.map((category, i) => <div onClick={(event)=>{clickAutoComplete(event, category)}}>{category[0]}</div>)}
                </div> */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={categoryList}
                        sx={{ width: 300 }}
                        onChange={onAutoChange}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
            </div>

            <div className={`${classes.questionContainer}`}>
                <div className={classes.subTitle}>Questions</div>
                <div className={classes.btn}>
                    {/* <div className={`${classes.btnText}`}>Add</div> */}
                    <Button onClick={handleOpen}>Add</Button>
                </div>
                <div>
                    <table className={classes.toCenter}>
                        <tr>
                            <th >&nbsp;</th>
                            <th>Number</th>
                            <th>Question</th>
                        </tr>
                        {questions.map((question,i)=>
                            <tr key={i} className={classes.checkboxPadding}>
                                <td><input type="checkbox" />&nbsp;</td>
                                <td>#{i+1}</td>
                                <td>{question['question']}</td>
                                <td className={classes.delete} onClick={()=>{removeQuestion(i)}}>&#10005;</td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
            <div>
                <div className={`${classes.toRight} ${classes.btn}`} onClick={onSave}>
                    <div className={classes.btnText}>Save</div>
                </div>
            </div>
            <QuestionCreationModal
            questions={questions}
            addQuestion={addQuestion}
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}/>
        </div>
    )
}

export default QuizCreation;
