import { useStyles } from './style'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import AuthContext from '../../../context/auth-context'
import userApis from '../../../api/user-api'
import Button from '@mui/material/Button'
const ProfileBar = (props) => {
    const classes = useStyles()
    const imgRef = useRef()
    const {auth} = useContext(AuthContext)
    const [image, setImage] = useState("")
    const [profile, setProfile] = useState(false)
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


    const onEnterProfile = ()=>{
        console.log("enter profile")
        setProfile(true)
    }

    const onLeaveProfile = ()=>{
        console.log("leave profile")
        setProfile(false)
    }


    useEffect(()=>{
        loadImage()
    }, [])

    if(!props.self){
        return(
            <div className={classes.barContainer}>
                <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell}`}>
                        <div className={classes.imgSize}>
                            <img className={classes.imgSize} src={image}/>
                        </div>      
                </div>
    
                <div className={classes.tableCell2}>
                    Home
                </div>
    
                <div className={classes.tableCell2}>
                    Quizzes
                </div>
    
                <div className={classes.tableCell2}>
                    About
                </div>
    
                <div className={classes.tableCell2}>
                    Followers
                </div>   

                <div className={classes.tableCell3}>
                    <Button>Subscribe</Button>
                </div>            
            </div>
        )
    }

    return(
        <div className={classes.barContainer}>
            <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell} ${classes.pointerCursor}`}>
                {
                    profile
                    ?
                    <div onClick={clickUpload} onMouseLeave={onLeaveProfile} className={classes.imgSize}>
                        <img  className={`${classes.imgSize} ${classes.imgOpacity}`} src={image}/>
                        <div className={classes.changeText}>Change</div>
                    </div>
                    :
                    <div className={classes.imgSize}>
                        <img  onMouseEnter={onEnterProfile} className={classes.imgSize} src={image}/>
                    </div>      
                }
            </div>

            <div className={classes.tableCell2}>
                Home
            </div>

            <div className={classes.tableCell2}>
                Quizzes
            </div>

            <div className={classes.tableCell2}>
                About
            </div>

            <div className={classes.tableCell2}>
                Followers
            </div>

            <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
        </div>
    )
}

export default ProfileBar 