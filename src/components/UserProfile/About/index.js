import { useEffect, useState, useContext } from 'react'
import userApis from '../../../api/user-api'
import { useParams } from 'react-router-dom'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import { useStyles } from './style'
import AuthContext from '../../../context/auth-context'
const About = ()=>{
    //sets the character limit in the about me page
    const CHARACTER_LIMIT = 500

    const { auth } = useContext(AuthContext)
    const { userId } = useParams()
    
    const [isEditing, setIsEditing] = useState(false)
    const classes = useStyles()
    
    const [about, setAbout] = useState("")

    const updateAboutMe = async ()=>{
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let config = {
            headers: headers
        }
        let payload = {
            [BODY.USERDESCRIPTION]: "I LIKE CHEESE AND FOOD"
        }
        setAbout("I LIKE CHEESE AND FOOD")
        await userApis.setUserDescription(payload, config)
    }
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
            <div onClick={()=>updateAboutMe()}>About Me!</div>
            <div className={classes.aboutContainer}>{about}</div>
        </div>
    )
}

export default About