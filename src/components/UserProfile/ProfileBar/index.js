import { useStyles } from './style'
import { useParams } from 'react-router'
import { useRef, useContext, useState, useEffect } from 'react'
import BODY from '../../../constant/body'
import HEADER from '../../../constant/header'
import AuthContext from '../../../context/auth-context'
import userApis from '../../../api/user-api'
import default_profile from '../../../images/Default_profile.png'
import NoUserModal from '../../NoUserModal'
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
    const [showModal, setShowModal] = useState(false);
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
        if(auth.user!=null && auth.user!==undefined){
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
        else{
            setShowModal(true)
        }
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
                let response = await userApis.getProfileImage(userId)
                if(response.data==null || response.data==""){
                    setImage(default_profile)
                    return
                }
                setImage(response.data)
            } catch (e) {
                setImage(default_profile)
            }
            //Loads the user information 
            await userApis.getUserInfo(userId).then((response) => {
                setUserInfo(response.data[0])
            })
        }

        const getSubscribeStatus = async ()=>{
            if(auth.user!=null && auth.user!==undefined){
                const token = await auth.user.getIdToken()
                let headers = {
                    [HEADER.TOKEN] : token
                }
                let response = await userApis.checkSubscribeStatus(userId, headers)
                if(response.data.length>0){
                    setSubscribeStatus(true)
                }
                else{
                    setSubscribeStatus(false)
                }
            }
        }

        getSubscribeStatus()
        loadImage()
        // if (localStorage.getItem('uid') === userId) {
        //     setSelf(true)
        // }
        console.log(props.self)
        if(props.self!==undefined){
            setSelf(props.self)
        }
    }, [auth, userId, props.self])

    const changeTag = (tag)=>{
        localStorage.setItem('profileTag', tag)
        props.setTag(tag)
    }


        return (
            <div>
                <div>
                    <NoUserModal show={showModal} continue={true} handleClose={() => setShowModal(false)}></NoUserModal>
                </div>
                <div className={classes.userInfoGrid}>
                    <div className={`${classes.circle} ${classes.imgContainer} ${classes.tableCell}`}>
                        {
                            (profile&&self)
                            ?
                            <div onClick={clickUpload} onMouseLeave={onLeaveProfile} className={classes.imgSize}>
                                <img  alt="user profile" className={`${classes.imgSize} ${classes.imgOpacity}`} src={image}/>
                                <div className={classes.changeText}>Change</div>
                            </div>
                            :
                            <div className={classes.imgSize}>
                                <img  alt="user profile" onMouseEnter={onEnterProfile} className={classes.imgSize} src={image}/>
                            </div>      
                        }
                    </div>

                    <div className={classes.ChannelNameText}>{(userInfo==null||userInfo===undefined)?"loading":userInfo.displayName}</div>
                    <div className={classes.EmailText}>{(userInfo==null||userInfo===undefined)?"loading":userInfo.email}</div>
                    <div className={classes.subscribeBtn}>
                        {!self && !subscribeStatus && <div className={`${classes.btn} ${classes.colorGreen}`} onClick={onSubscribe}>Subscribe</div>}
                        {!self && subscribeStatus && <div className={`${classes.btn} ${classes.colorRed}`} onClick={unsubscribe}>Unsubscribe</div>}
                    </div>
                </div>
                <div className={classes.barContainer}>

                    <div className={props.tag === 0 ? classes.selectedCell : classes.tableCell2} onClick={() => { changeTag(0) }}>
                        Home
                    </div>

                    <div className={props.tag === 1 ? classes.selectedCell : classes.tableCell2} onClick={() => { changeTag(1) }}>
                        Quizzes
                    </div>

                    <div className={props.tag === 2 ? classes.selectedCell : classes.tableCell2} onClick={() => { changeTag(2) }}>
                        About
                    </div>

                    <div className={props.tag === 3 ? classes.selectedCell : classes.tableCell2} onClick={() => { changeTag(3) }}>
                        Followers
                    </div>

                    <div className={props.tag === 4 ? classes.selectedCell : classes.tableCell2} onClick={() => { changeTag(4) }}>
                        Forum
                    </div>

                    <div className={props.tag === 5 ? classes.selectedCell : classes.tableCell2} onClick={() => { changeTag(5) }}>
                        Leaderboard
                    </div>
                </div>
                <input type="file" name="image" id="image" ref={imgRef} onChange={onImageUpload} className={classes.imgTag}/>
            </div>
        )
}

export default ProfileBar