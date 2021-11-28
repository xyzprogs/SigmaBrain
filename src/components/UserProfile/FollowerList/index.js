
import userApis from "../../../api/user-api"
import { useState, useEffect, useContext } from "react"
import HEADER from "../../../constant/header"
import AuthContext from "../../../context/auth-context"
import BODY from "../../../constant/body"
import { useStyles } from './style'
const FollowerList = ()=>{
    const [followers, setFollowers] = useState([])
    const {auth} = useContext(AuthContext)
    const classes = useStyles()
    useEffect(()=>{
        const loadFollower = async()=>{
            console.log("load follower")
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN]: token
            }
            let response = await userApis.getFollowers(headers)
            console.log(response.data)
            setFollowers(response.data)
        }
        
        loadFollower()

    },[auth.user])
    return(
        <div className={classes.container}>
            <div className={classes.title}>Followers</div>
            {followers.map(f=>{
                return <div className={classes.followerContainer}>{f[BODY.USERID]}</div>
            })}
        </div>
    )
}

export default FollowerList