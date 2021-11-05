import { useStyles } from "./style";
import SearchBar from '../../components/NavBar/SearchBar/index'
import UserBanner from "../../components/UserBanner";
import ProfileBar from "../../components/UserProfile/ProfileBar";
import QuizManagement from "../../components/QuizManagement";
const QuizManagementPage = () => {
    const classes = useStyles()

    return (
        <div> 
        <SearchBar/>
            <div className={classes.pageContainer}>
                <UserBanner/>
                <ProfileBar/>
                <QuizManagement/>
            </div>
        </div>
    )
}

export default QuizManagementPage
