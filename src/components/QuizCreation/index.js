import React from 'react';
import { userStyles } from "./style";
import { useState, useEffect, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import testApis from '../../api/test-api';
import BODY from '../../constant/body';
import quizApis from '../../api/quiz-api';
import AuthContext from '../../context/auth-context';
import HEADER from '../../constant/header';
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

    const clickUpload = ()=>{
        imgRef.current.click()
    }

    const onImageUpload = (event)=>{
        console.log(event.target.files[0])
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
        // headers = {
        //     [HEADER.TOKEN] : token,
        //     [HEADER.CONTENTTYPE] : `${HEADER.MULT_FORMDATA}; boundary=${data.getBoundary()}`,
        //     [HEADER.ACCEPT] : HEADER.APPLICATION_JSON
        // }
        await quizApis.setQuizThumbnail(quizId, data, headers)
        // testApis.testAnything(data).then(res =>{
        //     console.log(res)
        // })
        // .catch(e=>{
        //     console.log(e)
        // })
        history.push(`/quizManagement`);
    }

    return (
        <div className={classes.creationCardContainer}>
            <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
            <div className={classes.title}>
                <div>Quiz Creator</div>
                <div className={classes.saveBtn}>
                    <Button>Save</Button>
                </div>
            </div>

            <div className={classes.quizName}>
                <div className={classes.subTitle}>Quiz Name</div>
                <input onKeyUp={onChangeName}/>
            </div>

            <div className={classes.cover}>
                <div className={classes.subTitle}>Cover</div>
                <Button onClick={clickUpload}>upload</Button>
                <div >
                <img  className={classes.imgSize} src={image}/>
                </div>
            </div>

            <div className={classes.introduction}>
                <div className={classes.subTitle}>Introduction</div>
                <textarea onKeyUp={onChangeIntroduction} className={classes.introductionBox}/>
            </div>

            <div className={classes.timeLimit}>
                <div className={classes.subTitle}>Time Limit</div>
                <input onKeyUp={onChangeTimeLimit}/>
            </div>

            <div>
                <Button className={`${classes.toRight}`} onClick={onSave}>Save</Button>
            </div>
            {/* <form>
                <Row>
                    <Card>
                    <Card.Body>
                        <Col>
                            <Button>
                                <Card.Img className={classes.imageContainer} src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"/>
                            </Button>
                        </Col>
                        <Col>
                            <input type="text" className={classes.inputContainer} placeholder="Title"></input>
                            <input type="text" className={classes.inputContainer} placeholder="Timer"></input>
                            <input type="text" className={classes.inputContainer} placeholder="Description"></input>
                        </Col>
                    </Card.Body>
                    </Card>
                </Row>
                        

                    <hr />
                    <Row>
                        {tempAnswers.map((answers) => 
                                <div>
                                    <Card className={classes.creationCardContainer}>
                                        <Card.Header>
                                            Question {answers.QuestionNum + 1}
                                        </Card.Header>
                                        <Card.Body>
                                        <Card.Title>
                                            <input type="text" className={classes.inputContainer} value={answers.QuestionText}></input>
                                        </Card.Title>
                                        
                                        <ListGroup>
                                        {answers.Answers.map((answerChoices) => 
                                            <ListGroupItem><input type="text" className={classes.inputContainer} value={answerChoices}></input></ListGroupItem>)}

                                        </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>)}
                        
                    </Row>
                <input type="submit" value="Save"></input>
            </form> */}
        </div>
    )
}

export default QuizCreation;
