import { useStyles } from './style'
import { useHistory } from 'react-router'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import AuthContext from '../../../context/auth-context'
import userApis from '../../../api/user-api'
import Button from '@mui/material/Button'
import default_banner from '../../../images/profile_image.png'
const ProfileBar = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const imgRef = useRef()
    const { auth } = useContext(AuthContext)
    const [image, setImage] = useState("")
    const [profile, setProfile] = useState(false)
    const [self, setSelf] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const clickUpload = () => {
        imgRef.current.click()
    }

    const onImageUpload = async (event) => {
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let config = {
            headers: headers
        }
        const data = new FormData()
        data.append(BODY.USERPROFILE_IMAGE_TYPE, BODY.PROFILEIMAGE)
        data.append(BODY.USERPROFILE, event.target.files[0])
        await userApis.setProfilePageImage(data, config)
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    const onEnterProfile = () => {
        setProfile(true)
    }

    const onLeaveProfile = () => {
        setProfile(false)
    }

    const onSubscribe = async () => {
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let payload = {
            [BODY.SUBSCRIBETO]: props.userId
        }
        userApis.subscribe(payload, headers)
    }

    //temp solution for build 5
    const redirectToLeaderboardpage = () => {
        history.push(`/leaderboard/${props.userId}`)
    }

    useEffect(() => {
        const loadImage = async () => {
            try {
                let response = await userApis.getProfileImage(props.userId)
                setImage(response.data)
            } catch (e) {
                setImage(default_banner)
            }


            //Loads the user information 
            await userApis.getUserInfo(props.userId).then((response) => {
                setUserInfo(response.data[0])
            })


        }
        loadImage()
        if (localStorage.getItem('uid') === props.userId) {
            setSelf(true)
        }
    }, [props.userId, auth])

    if (!self) {
        return (
            <div>
                <div className={classes.userInfoGrid}>
                    <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell}`}>
                        <div className={classes.imgSize}>
                            <img alt="user profile" className={classes.imgSize} src={image} />
                        </div>
                    </div>
                    <div>Channel Name: {userInfo.displayName}</div>
                    <div>{userInfo.email}</div>
                </div>


                <div className={classes.barContainer}>

                    <div className={classes.tableCell2} onClick={() => { props.setTag(0) }}>
                        Home
                    </div>

                    <div className={classes.tableCell2} onClick={() => { props.setTag(1) }}>
                        Quizzes
                    </div>

                    <div className={classes.tableCell2} onClick={() => { props.setTag(2) }}>
                        About
                    </div>

                    <div className={classes.tableCell2} onClick={() => { props.setTag(3) }}>
                        Followers
                    </div>

                    <div className={classes.tableCell2} onClick={() => { props.setTag(4) }}>
                        Forum
                    </div>

                    <div className={classes.tableCell2} onClick={() => { props.setTag(5) }}>
                        Leaderboard
                    </div>

                    <div className={classes.tableCell3}>
                        <Button onClick={onSubscribe}>Subscribe</Button>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={classes.userInfoGrid2}>
                <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell} ${classes.pointerCursor}`}>
                    {
                        profile
                            ?
                            <div onClick={clickUpload} onMouseLeave={onLeaveProfile} className={classes.imgSize}>
                                <img alt="user profile" className={`${classes.imgSize} ${classes.imgOpacity}`} src={image} />
                                <div className={classes.changeText}>Change</div>
                            </div>
                            :
                            <div className={classes.imgSize}>
                                <img alt="user profile" onMouseEnter={onEnterProfile} className={classes.imgSize} src={image} />
                            </div>
                    }
                </div>

                <div>Channel Name: {userInfo.displayName}</div>
                <div>{userInfo.email}</div>


            </div>
            <div className={classes.barContainer}>

                <div className={classes.tableCell2} onClick={() => { props.setTag(0) }}>
                    Home
                </div>

                <div className={classes.tableCell2} onClick={() => { props.setTag(1) }} >
                    Quizzes
                </div>

                <div className={classes.tableCell2} onClick={() => { props.setTag(2) }}>
                    About
                </div>

                <div className={classes.tableCell2} onClick={() => { props.setTag(3) }}>
                    Followers
                </div>

                <div className={classes.tableCell2} onClick={() => { props.setTag(4) }}>
                    Forum
                </div>

                <div className={classes.tableCell2} onClick={() => { props.setTag(5) }}>
                    Leaderboard
                </div>

                <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag} />
            </div>
        </div>
    )
}

export default ProfileBar