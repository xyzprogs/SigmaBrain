import { useEffect, useState } from 'react'
import userApis from '../../../api/user-api'
import { useParams } from 'react-router-dom'
import BODY from '../../../constant/body'
import { useStyles } from './style'
const About = ()=>{
    const { userId } = useParams()
    const [about, setAbout] = useState("")
    const classes = useStyles()
    useEffect(()=>{
        const loadAbout = async ()=>{
            try{
                let response = await userApis.getUserDescription(userId)
                setAbout(response.data[BODY.USERDESCRIPTION])
            }catch(e){
    
            }
        }

        loadAbout()
    },[userId])
    return(
        <div>
            <div>About Me!</div>
            <div className={classes.aboutContainer}>{about}</div>
        </div>
    )
}

export default About