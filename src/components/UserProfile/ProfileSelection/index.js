import ForumSection from "../../Forum";
import UserFeatureQuiz from "../UserFeatureQuiz";
import MyQuizList from "../MyQuizList";

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
                <ForumSection/>
            </div>
        )
    }
}

export default ProfileSectionWrapper