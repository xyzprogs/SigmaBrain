import { useStyles } from './style'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../constant/body'
import HEADER from '../../constant/header'
import userApis from '../../api/user-api'
import AuthContext from '../../context/auth-context'
import Button from '@mui/material/Button'
const UserBanner = (props) => {
    const classes = useStyles()
    const imgRef = useRef()
    const {auth} = useContext(AuthContext)
    const [image, setImage] = useState("")
    const [background, setBackground] = useState(false)

    const onEnterBackground = ()=>{
        console.log("enter background")
    }

    const onLeaveBackground = ()=>{
        console.log("leave background")
    }
    
    const clickUpload = ()=>{
        imgRef.current.click()
    }
    const onImageUpload = async (event)=>{
        let url = URL.createObjectURL(event.target.files[0])
        console.log(url)

        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN] : token
        }
        let config = {
            headers: headers
        }
        console.log(event.target.files[0])
        const data = new FormData()
        data.append(BODY.USERPROFILE_IMAGE_TYPE, BODY.BACKGROUNDIMAGE)
        data.append(BODY.USERPROFILE, event.target.files[0])
        userApis.setBackgroundImage(data, config)

    }
    const loadImage = async()=>{
        let response = await userApis.getBackgroundImage(props.userId)
        setImage(response.data)
    }

    useEffect(()=>{
        loadImage()
    }, [])

    if(!props.self){
        return(
            <div className={classes.bannerContainer}>
                <img className={classes.imgSize} src={image}/>
            </div>
        )
    }
    return(
        <div className={classes.bannerContainer}>
            <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
            <img className={classes.imgSize} src={image}/>
            <Button className={classes.uploadBtn} onClick={clickUpload}>Change Background Image</Button>
        </div>
    )
}

export default UserBanner