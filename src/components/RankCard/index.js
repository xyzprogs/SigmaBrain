import userApis from "../../api/user-api"
import { useStyles } from "./style"

const RankCard = ({user, index}) => {
    //Index starts at 0 
    const rank = index + 1;
    
    const handleClickLeaderboard = () =>{
        //For Now, redirect to the userProfile Page
    }


    return(
        <div onClick = {handleClickLeaderboard}>
            {rank + "."+ user.displayName}
        </div>
    )
}

export default RankCard