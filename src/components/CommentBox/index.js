import { useStyles } from './style'
import BODY from '../../constant/body'
import {Card} from 'react-bootstrap'
import userApis from '../../api/user-api'
import { useEffect, useState } from "react"
const CommentBox = ({comment})=>{
    const classes = useStyles()
    const [name, setName] = useState()
    useEffect(()=>{
        const loadName = async ()=> {
            let response = await userApis.getUserDisplayName(comment[BODY.USERID])
            setName(response.data[0][BODY.DISPLAYNAME])
        }
        loadName()
    },[comment])
    
    return(
<Card className={classes.commentBox}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        {comment[BODY.QUIZCOMMENT]}
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default CommentBox