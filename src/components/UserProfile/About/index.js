import { useEffect, useState, useContext } from 'react'
import userApis from '../../../api/user-api'
import { useParams } from 'react-router-dom'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import { useStyles } from './style'
import AuthContext from '../../../context/auth-context'
const About = () => {
    //sets the character limit in the about me page
    const CHARACTER_LIMIT = 500

    const { auth } = useContext(AuthContext)
    const { userId } = useParams()

    const [isEditing, setIsEditing] = useState(false)
    const classes = useStyles()

    const [about, setAbout] = useState("")
    const [editAbout, setEditAbout] = useState("")

    useEffect(() => {
        const loadAbout = async () => {
            try {
                let response = await userApis.getUserDescription(userId)
                setAbout(response.data[BODY.USERDESCRIPTION])
            } catch (e) {

            }
        }

        loadAbout()
    }, [userId])


    const updateAboutMe = async () => {
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let config = {
            headers: headers
        }
        let payload = {
            [BODY.USERDESCRIPTION]: editAbout
        }
        setAbout(editAbout)
        await userApis.setUserDescription(payload, config)
    }

    const handleSubmit = async () => {
        updateAboutMe()
        setIsEditing(false)
    }

    return (
        <div>
            <div onClick={() => updateAboutMe()}>About Me!</div>
            {isEditing ?
                <input onChange={e => setEditAbout(e.target.value)} />
                :
                <div className={classes.aboutContainer}>{about}</div>
            }

            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "cancel" : "edit"}</button>
            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    )
}

export default About