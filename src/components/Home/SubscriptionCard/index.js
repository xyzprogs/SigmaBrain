import { useState, useEffect } from 'react';
import { useStyles } from './style';
import userApis from '../../../api/user-api';
import BODY from '../../../constant/body';
import default_profile_img from '../../../images/profile_image.png'
const UserCard = ({subscribeTo})=>{

    const classes = useStyles()
    const [image, setImage] = useState("")
    const [user, setUser] = useState()

    useEffect(()=>{
        const loadUserInfo = async ()=>{
            let response = await userApis.getUserInfo(subscribeTo)
            setUser(response.data[0])
            try{
                response = await userApis.getProfileImage(response.data[0][BODY.USERID])
                setImage(response.data)
            }catch(e){
               setImage(default_profile_img)
            }
        }

        loadUserInfo()
    }, [subscribeTo])
    

    const redirectToUserProfile = ()=>{
        console.log(user[BODY.USERID])
    }

    if(user===undefined || user==null){
        return <div>loading</div>
    }
    return(
        <div onClick={redirectToUserProfile} className={classes.userCardContainer}>
            <div className={`${classes.circle} ${classes.imgContainer}`}>
                <img className={classes.imgSize} src={image} alt=""/>
            </div>
            <div className={classes.userName}>{user[BODY.DISPLAYNAME]}</div>
        </div>
    )
}

export default UserCard