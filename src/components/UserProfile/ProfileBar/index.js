import { useStyles } from './style'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import AuthContext from '../../../context/auth-context'
import userApis from '../../../api/user-api'
const ProfileBar = (props) => {
    const classes = useStyles()
    const imgRef = useRef()
    const {auth} = useContext(AuthContext)
    const [image, setImage] = useState("")
    const clickUpload = ()=>{
        imgRef.current.click()
    }
    const loadImage = async ()=>{
        let response = await userApis.getProfileImage(props.userId)
        setImage(response.data)
    }
    const onImageUpload = async (event)=>{
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        let config = {
            headers: headers
        }
        console.log(event.target.files[0])
        const data = new FormData()
        data.append(BODY.USERPROFILE_IMAGE_TYPE, BODY.PROFILEIMAGE)
        data.append(BODY.USERPROFILE, event.target.files[0])
        userApis.setProfilePageImage(data, config)
    }

    useEffect(()=>{
        loadImage()
    }, [])
    return(
        <div className={classes.barContainer}>
            <div className={classes.circle}>
                <img className={classes.imgSize} src={image}/>
                <button className={classes.uploadBtn} onClick={clickUpload}>Change Profiile Image</button>
            </div>
            <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
        </div>
    )
}

export default ProfileBar