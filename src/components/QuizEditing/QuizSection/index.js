
import { useStyles } from './style'
import { useState, useRef, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import BODY from '../../../constant/body';
import quizApis from '../../../api/quiz-api'
import HEADER from '../../../constant/header';
import AuthContext from '../../../context/auth-context';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Button from '@mui/material/Button'
import { QUIZ_CATEGORY_NAME, QUIZ_CATEGORY_DICT } from '../../../constant/quiz-category'
const QuizSection = ({quiz})=>{
    const classes = useStyles()
    const imgRef = useRef()
    const [introduction, setIntroduction] = useState()
    const [timeLimit, setTimeLimit] = useState(0)
    const [image, setImage] = useState()
    const [imageAsFile, setImageAsFile] = useState()
    const [name, setName] = useState()
    const { auth } = useContext(AuthContext)
    const history = useHistory()
    const [category, setCategory] = useState()
    const [categoryList, setCategoryList] = useState()
    const onImageUpload = (event)=>{
        setImage(URL.createObjectURL(event.target.files[0]))
        setImageAsFile(event.target.files[0])
    }
    const onChangeName = (event)=>{
        setName(event.target.value)
    }
    const clickUpload = ()=>{
        imgRef.current.click()
    }
    const onChangeIntroduction = (event)=>{
        setIntroduction(event.target.value)
    }
    const onChangeTimeLimit = (event)=>{
        setTimeLimit(event.target.value)
    }
    const onAutoChange = (event, value)=>{
        if(value!=null){
            setCategory(value['value'])
        }
    }
    const onSave = async ()=>{
        const payload = {
            [BODY.QUIZID]: quiz[BODY.QUIZID],
            [BODY.QUIZNAME]: name,
            [BODY.QUIZDESCRIPTION]: introduction,
            [BODY.TIMELIMIT]: timeLimit,
            [BODY.QUIZCATEGORY]: category
        }

        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }

        await quizApis.updateQuiz(payload, headers)
        history.push('/quizManagement')
        console.log("introduction", introduction)
        console.log("quizname", name)
        console.log("timelimit", timeLimit)
        console.log("quizCategory", category)
    }
    useEffect(()=>{
        let categorylist = []
        for(var key in QUIZ_CATEGORY_DICT){
            categorylist.push({label: key, value: QUIZ_CATEGORY_DICT[key]})
        }
        setCategoryList(categorylist)
        setName(quiz[BODY.QUIZNAME])
        setTimeLimit(quiz[BODY.TIMELIMIT])
        setCategory(quiz[BODY.QUIZCATEGORY])
        setIntroduction(quiz[BODY.QUIZDESCRIPTION])
    },[quiz])


    return(
        <div className={classes.container}>
            <input type="file" name="image" id="image" alt="quiz thumbnail" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
            <div className={classes.quizName}>
                <div className={classes.subTitle}>Quiz Name</div>
                <input defaultValue={quiz[BODY.QUIZNAME]} className={classes.quizNameField} onKeyUp={onChangeName}/>
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
                <textarea defaultValue={quiz[BODY.QUIZDESCRIPTION]} onKeyUp={onChangeIntroduction} className={classes.introductionBox}/>
            </div>

            <div className={classes.timeLimit}>
                <div className={classes.subTitle}>Time Limit</div>
                <div className={classes.flexBox}>
                    <input defaultValue={quiz[BODY.TIMELIMIT]} onKeyUp={onChangeTimeLimit}/>
                    <div className={classes.unit}>min</div>
                </div>
            </div>

            <div className={classes.quizCategory}>
                <div className={classes.subTitle}>Quiz Category</div>
                    {categoryList!==undefined?
                    <Autocomplete
                        disablePortal
                        defaultValue={{ label: QUIZ_CATEGORY_NAME[quiz[BODY.QUIZCATEGORY]], value: quiz[BODY.QUIZCATEGORY]}}
                        id="combo-box-demo"
                        options={categoryList}
                        isOptionEqualToValue={(option,value)=>option.value===value.value}
                        sx={{ width: 300 }}
                        onChange={onAutoChange}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />:<div>loading</div>}

            </div>
            <div>
                <div className={`${classes.toRight} ${classes.btn}`} onClick={onSave}>
                    <div className={classes.btnText}>Save</div>
                </div>
            </div>
        </div>
    )
}


export default QuizSection