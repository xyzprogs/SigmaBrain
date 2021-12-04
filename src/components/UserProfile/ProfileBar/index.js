import { useStyles } from './style'
import { useParams } from 'react-router'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import LEVEL_CUTOFF from '../../../constant/levelPointsCutoff'
import AuthContext from '../../../context/auth-context'
import userApis from '../../../api/user-api'
import ExperienceBar from '../../ExperienceBar'
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
    const { userId } = useParams()
    const [subscribeStatus, setSubscribeStatus] = useState(false)
    const [expBarPercentage, setExpBarPercentage] = useState(0)
    
    const calculateProgress =(userLevel, expNeeded)=>{
        //calculates the percentage on the experience bar

        //gets the experience cap for the current level
        const requiredExp = LEVEL_CUTOFF.LEVELS[userLevel].experience
        
        let percentage = Math.floor((1 - expNeeded/requiredExp) * 100);
        setExpBarPercentage(percentage);
    }
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

    const unsubscribe = async () => {
        if (auth.user != null && auth.user !== undefined) {
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
                calculateProgress(response.data[0].userLevel, response.data[0].expForLevelUp)
                console.log(response.data[0])
            })


        }
        loadImage()
        if (localStorage.getItem('uid') === props.userId) {
            setSelf(true)
        }
        //calculates the percentage on the progress bar
    }, [props.userId, auth, userId])

    const testAPI = async() =>{
        const token = await auth.user.getIdToken()
        let headers = {
            [HEADER.TOKEN]: token
        }
        let payload = {
            [BODY.SUBSCRIBETO]: userId,
            [BODY.USERLEVEL]:6,
            [BODY.EXPNEEDED]:1232,
            [BODY.EXPGAINED]:1500,
        }

        await userApis.updateUserLevel(payload, headers)
    }

    return (
        <div>
            <div className={classes.userInfoAndEXPContainer}>
                <div className={classes.userInfoGrid}>
                    <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell}`}>
                        {
                            (profile && self)
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

                    <div className={classes.ChannelNameText}>{(userInfo == null || userInfo === undefined) ? "loading" : userInfo.displayName}</div>
                    <div className={classes.EmailText}>{(userInfo == null || userInfo === undefined) ? "loading" : userInfo.email}</div>
                </div>
                        
                <div className= {classes.experienceBarContainer}>
                    <ExperienceBar bgcolor = {'red'} completed = {expBarPercentage}/>
                    <div onClick={()=>testAPI()}>level {`${userInfo.userLevel}`}</div>
                    <div>Still need {`${userInfo.expForLevelUp}`} EXP to level up</div>
                </div>
            </div>
            <div className={classes.barContainer}>

                <div className={props.tag === 0 ? classes.selectedCell : classes.tableCell2} onClick={() => { props.setTag(0) }}>
                    Home
                </div>

                <div className={props.tag === 1 ? classes.selectedCell : classes.tableCell2} onClick={() => { props.setTag(1) }}>
                    Quizzes
                </div>

                <div className={props.tag === 2 ? classes.selectedCell : classes.tableCell2} onClick={() => { props.setTag(2) }}>
                    About
                </div>

                <div className={props.tag === 3 ? classes.selectedCell : classes.tableCell2} onClick={() => { props.setTag(3) }}>
                    Followers
                </div>

                <div className={props.tag === 4 ? classes.selectedCell : classes.tableCell2} onClick={() => { props.setTag(4) }}>
                    Forum
                </div>

                <div className={props.tag === 5 ? classes.selectedCell : classes.tableCell2} onClick={() => { props.setTag(5) }}>
                    Leaderboard
                </div>

                <div className={classes.tableCell3}>
                    {!self && !subscribeStatus && <div className={`${classes.btn} ${classes.colorGreen}`} onClick={onSubscribe}>Subscribe</div>}
                    {!self && subscribeStatus && <div className={`${classes.btn} ${classes.colorRed}`} onClick={unsubscribe}>Unsubscribe</div>}
                </div>

            </div>
            <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag} />
        </div>
    )
}

export default ProfileBar