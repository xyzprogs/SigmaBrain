import { useStyles } from "./style";
import NavBar from "../../components/NavBar";
import UserBanner from "../../components/UserBanner";
import ProfileBar from "../../components/UserProfile/ProfileBar";
import QuizManagement from "../../components/QuizManagement";
const QuizManagementPage = () => {
    const classes = useStyles()

    return (
        <div> 
        <NavBar/>
            <div className={classes.pageContainer}>
                <UserBanner/>
                <ProfileBar/>
                <QuizManagement/>
            </div>
        </div>
    )
}

export default QuizManagementPage
