import { useStyles } from "./style";
import SearchBar from '../../components/NavBar/SearchBar/index'
import UserBanner from "../../components/UserBanner";
import ProfileBar from "../../components/UserProfile/ProfileBar";
import UserFeatureQuiz from "../../components/UserProfile/UserFeatureQuiz";
import MyQuizList from "../../components/UserProfile/MyQuizList";
import { useParams } from "react-router";
const UserProfileViewPage = () => {
    const classes = useStyles()
    const { userId } = useParams()

    return (
        <div>
            <SearchBar />
            <div className={classes.pageContainer}>
                <div>
                    The User Id for this user is {userId}
                </div>
                <UserBanner />
                <ProfileBar />
                <UserFeatureQuiz />
                <MyQuizList />

            </div>
        </div>

    )
}

export default UserProfileViewPage