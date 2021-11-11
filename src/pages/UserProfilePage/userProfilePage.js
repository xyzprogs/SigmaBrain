import { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth-context';
import { useStyles } from "./style";
import { useParams } from 'react-router-dom'
import NavBar from "../../components/NavBar";
import UserBanner from "../../components/UserBanner";
import ProfileBar from "../../components/UserProfile/ProfileBar";
import UserFeatureQuiz from "../../components/UserProfile/UserFeatureQuiz";
import MyQuizList from "../../components/UserProfile/MyQuizList";
const UserProfilePage = () => {
    const classes = useStyles()
    const { userId } = useParams()
    const { auth } = useContext(AuthContext)
    const [self, setSelf] = useState(false)
    useEffect(()=>{
        if(auth.getCurrentUserUid() == userId){
            setSelf(true)
        }
    }, [auth.getCurrentUserUid()])
    return(
        <div>
            <NavBar/>
            <div className={classes.pageContainer}>
                <UserBanner userId={userId} self={self}/>
                <ProfileBar userId={userId} self={self}/>
                <UserFeatureQuiz userId={userId} self={self}/>
                <MyQuizList userId={userId} self={self}/>
            </div>
        </div>

    )
}

export default UserProfilePage