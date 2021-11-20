import ForumSection from "../../Forum";
import UserFeatureQuiz from "../UserFeatureQuiz";
import MyQuizList from "../MyQuizList";
import UserQuizDisplay from "../UserQuizDisplay";
import About from "../About";
import FollowerList from "../FollowerList";
import ChannelLeaderboard from "../../ChannelLeaderboard/Leaderboard";
const ProfileSectionWrapper = ({tag, userId, self})=>{

    if(tag===0){
        return(
            <div>
                <UserFeatureQuiz userId={userId} self={self}/>
                <MyQuizList userId={userId} self={self}/>
            </div>
        )
    }

    if(tag===1){
        return(
            <div>
                <UserQuizDisplay/>
            </div>
        )
    }

    if(tag===2){
        return(
            <div>
                <About/>
            </div>
        )
    }

    if(tag===3){
        return(<div>
            <FollowerList/>
        </div>)
    }

    if(tag===4){
        return(
            <div>
                <ForumSection/>
            </div>
        )
    }

    if(tag===5){
        return(
            <div>
                <ChannelLeaderboard/>
            </div>
        )
    }

    return(
        <div>Something Wrong</div>
    )
}

export default ProfileSectionWrapper