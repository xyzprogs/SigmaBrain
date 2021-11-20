
import Card from "react-bootstrap/Card";
import { useHistory } from 'react-router';
import { useStyles } from "./style"
import { useEffect, useState } from "react"
import BODY from "../../../constant/body";
import userApis from "../../../api/user-api";

const SearchResultCard = ({result})=>{
    const classes = useStyles()
    let history = useHistory()
    const [name, setName] = useState("")
    useEffect(()=>{
        const loadName = async ()=>{
            let response = await userApis.getUserDisplayName(result[BODY.USERID])
            if(response.data.length>0){
                setName(response.data[0][BODY.DISPLAYNAME])
            }
        }
        loadName()
    },[])
    return(
        <div className={classes.searchResultContainer}>
            <Card className={classes.cardContainer} onClick={()=>history.push('/QuizTaking')}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{result[BODY.QUIZNAME]}</Card.Title>
                    <Card.Text>
                        Quiz View : {result[BODY.TAKECOUNTS]} <br />
                        Quiz Author : {name} <br />
                        Likes: {result[BODY.LIKES]}    Dislikes: {result[BODY.DISLIKES]}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )    
}

export default SearchResultCard