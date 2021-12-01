import { useStyles } from './style'
import { useParams } from 'react-router'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import AuthContext from '../../../context/auth-context'
import userApis from '../../../api/user-api'
import Button from '@mui/material/Button'
import default_banner from '../../../images/profile_image.png'
const ProfileBar = (props) => {
    const classes = useStyles()
    const imgRef = useRef()
    const { auth } = useContext(AuthContext)
    const [image, setImage] = useState("")
    const [profile, setProfile] = useState(false)
    const [self, setSelf] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const {userId} = useParams()
    const [subscribeStatus, setSubscribeStatus] = useState(false)
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
            [BODY.SUBSCRIBETO]: userId
        }
        await userApis.subscribe(payload, headers)
        setSubscribeStatus(true)
    }

    const unsubscribe = async()=>{
        if(auth.user!=null && auth.user!==undefined){
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN]: token
            }
            let payload = {
                [BODY.SUBSCRIBETO]: userId
            }
            await userApis.unsubscribe(payload, headers)
            setSubscribeStatus(false)
        }
    }

    //temp solution for build 5
    // const redirectToLeaderboardpage = () => {
    //     history.push(`/leaderboard/${props.userId}`)
    // }

    useEffect(() => {
        const loadImage = async () => {
            try {
                let response = await userApis.getProfileImage(props.userId)
                setImage(response.data)
            } catch (e) {
                setImage(default_banner)
            }


            //Loads the user information 
            await userApis.getUserInfo(userId).then((response) => {
                setUserInfo(response.data[0])
                console.log(response.data)
            })


        }
        loadImage()
        if (localStorage.getItem('uid') === props.userId) {
            setSelf(true)
        }
    }, [props.userId, auth, userId])


        return (
            <div>
                <div className={classes.userInfoGrid}>
                    <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell}`}>
                        <div className={classes.imgSize}>
                            <img alt="user profile" className={classes.imgSize} src={image} />
                        </div>
                    </div>

                    <div className={classes.ChannelNameText}>Channel Name: {(userInfo==null||userInfo===undefined)?"loading":userInfo.displayName}</div>
                    <div>{(userInfo==null||userInfo===undefined)?"loading":userInfo.email}</div>
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
                        {!self && !subscribeStatus && <div className={`${classes.btn} ${classes.colorGreen}`} onClick={onSubscribe}>Subscribe</div>}
                        {!self && subscribeStatus && <div className={`${classes.btn} ${classes.colorRed}`} onClick={unsubscribe}>Unsubscribe</div>}
                    </div>

                </div>
            </div>
        )
}

export default ProfileBar