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
    const [edit, setEdit] = useState(-1)
    const [errorMsg, setErrorMsg] = useState({});
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

    const updateQuestion = (question, index)=>{
        let newQuestions = [...questions]
        newQuestions[index] = question
        setQuestions(newQuestions)
    }

    const removeQuestion = (i)=>{
        let newQuestions = [...questions]
        newQuestions.splice(i, 1)
        setQuestions(newQuestions)
    }
    const onSave = async ()=>{
        const quiz = {
            [BODY.QUIZNAME]: name,
            [BODY.QUIZCATEGORY]: category,
            [BODY.QUIZDESCRIPTION]: introduction,
            [BODY.ISPUBLISHED]: 0,
            [BODY.QUESTIONS]: questions
        }
        console.log(quiz)
        return
        let error = {};
        let flag = false;
        if(quiz[BODY.QUIZNAME] === undefined){
            error.QuizTitleError = "Please add a quiz title"
            flag = true;
        }else if (quiz[BODY.QUIZNAME].length === 0){
            error.QuizTitleError = "Quiz title cannot be empty"
            flag = true;
        }else if (quiz[BODY.QUIZNAME].length > 50){
            error.QuizTitleError = "Quiz title cannot be more than 50 characters"
            flag = true;
        }

        if (timeLimit < 5.0 || timeLimit > 60.0){
            error.TimeLimitError = "Time of quiz must be anywhere in between 5 minutes to 60 minutes"
            flag = true;
        }

        if(quiz[BODY.QUIZDESCRIPTION] === undefined){
            error.QuizDescriptionError = "Please add a quiz description"
            flag = true;
        }else if (quiz[BODY.QUIZDESCRIPTION].length === 0){
            error.QuizDescriptionError = "Quiz description cannot be empty"
            flag = true;
        }else if (quiz[BODY.QUIZDESCRIPTION].length > 50){
            error.QuizDescriptionError = "Quiz title cannot be more than 200 characters"
            flag = true;
        }

        setErrorMsg(error);
        if(flag){
            return
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
    const editQuestion = (index)=>{
        setEdit(index)
        setOpen(true)
    }

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
                <div className={classes.titleText}>Quiz Creator</div>
                <div className={classes.btn}>
                    <div className={classes.btnText}>
                        Save
                    </div>
                </div>
            </div>

            <div className={classes.quizName}>
                <div className={classes.subTitle}>Quiz Name</div>
                <input className={classes.quizNameField} onKeyUp={onChangeName}/>
                {errorMsg?.QuizTitleError && (
                    <p className={classes.errorMsg}>{errorMsg.QuizTitleError}</p>
                )}
            </div>

            <div className={classes.cover}>
                <div className={classes.subTitle}>Cover</div>
                {
                    image?
                    <div>
                        <div className={`${classes.btn} ${classes.toCenter}`} onClick={clickUpload}>
                            <div className={classes.btnText}>change</div>
                        </div>
                        <div className={classes.imgContainer}>
                            <img  className={classes.imgSize} src={image} alt="quiz thumbnail"/>
                        </div>
                    </div>
                    :
                    <div className={classes.plusContainer} onClick={clickUpload}>
                        <div className={classes.plus}>+</div>
                    </div>
                } 
            </div>

            <div className={classes.introduction}>
                <div className={classes.subTitle}>Introduction</div>
                <textarea onKeyUp={onChangeIntroduction} className={classes.introductionBox}/>
                {errorMsg?.QuizDescriptionError && (
                    <p className={classes.errorMsg}>{errorMsg.QuizDescriptionError}</p>
                )}
            </div>

            <div className={classes.timeLimit}>
                <div className={classes.subTitle}>Time Limit</div>
                <div className={classes.flexBox}>
                    <input onKeyUp={onChangeTimeLimit} className={classes.timeBox}/>
                    <div className={classes.unit}>min</div>
                </div>
                {errorMsg?.TimeLimitError && (
                    <p className={classes.errorMsg}>{errorMsg.TimeLimitError}</p>
                )}
            </div>

            <div className={classes.quizCategory}>
                <div className={classes.subTitle}>Quiz Category</div>
                    <div className={classes.autoContainer}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={categoryList}
                            sx={{ width: 300 }}
                            onChange={onAutoChange}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                    </div>
            </div>

            <div className={`${classes.questionContainer}`}>
                <div className={classes.subTitle}>Questions</div>
                <div className={`${classes.btn} ${classes.toCenter}`}>
                    <div className={classes.btnText} onClick={handleOpen}>Add</div>
                </div>
                <div>
                    {questions.map((question,i)=>
                        <div key={i} className={classes.checkboxPadding}>
                            <div className={`${classes.questionMargin} ${classes.questionText}`}>#{i+1}</div>
                            <div className={`${classes.questionMargin} ${classes.questionText}`}>{question['question']}</div>
                            <div onClick={()=>{editQuestion(i)}} className={`${classes.questionMargin} ${classes.questionText} ${classes.editBtn}`}>edit</div>
                            <div className={`${classes.delete} ${classes.questionMargin}`} onClick={()=>{removeQuestion(i)}}>&#10005;</div>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <div className={`${classes.toRight} ${classes.btn}`} onClick={onSave}>
                    <div className={classes.btnText}>Save</div>
                </div>
            </div>
            <QuestionCreationModal
            edit={edit}
            setEdit={setEdit}
            questions={questions}
            addQuestion={addQuestion}
            updateQuestion={updateQuestion}
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}/>
        </div>
    )
}

export default QuizCreation;
