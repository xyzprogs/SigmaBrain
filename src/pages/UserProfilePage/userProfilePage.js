import { useStyles } from "./style";
import SearchBar from '../../components/SearchBar/index'
import UserBanner from "../../components/UserBanner";
import ProfileBar from "../../components/UserProfile/ProfileBar";
import UserFeatureQuiz from "../../components/UserProfile/UserFeatureQuiz";
import MyQuizList from "../../components/UserProfile/MyQuizList";
const UserProfilePage = () => {
    const classes = useStyles()

    return(
        <div>
            <SearchBar/>
            <div className={classes.pageContainer}>
                <UserBanner/>
                <ProfileBar/>
                <UserFeatureQuiz/>
                <MyQuizList/>
            </div>
        </div>

    )
}

export default UserProfilePage