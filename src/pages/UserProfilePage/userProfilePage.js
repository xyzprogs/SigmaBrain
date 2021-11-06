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
    return(
        <div>
            <NavBar/>
            <div className={classes.pageContainer}>
                <UserBanner/>
                <ProfileBar/>
                <UserFeatureQuiz/>
                <MyQuizList/>
                <div>User is is {userId}</div>
            </div>
        </div>

    )
}

export default UserProfilePage