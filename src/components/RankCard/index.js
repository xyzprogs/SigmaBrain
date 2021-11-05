import { Axios } from "axios"
import userApis from "../../api/user-api"
import { useStyles } from "./style"

const RankCard = ({username,position}) => {
    
    const displayNames = async ()=>{
        let users;
        userApis.getMainLeaderboard().then(function(results){
            console.log(results);
            users = results.data;
            console.log(users);
        });
    }
    
    return(
        <div onClick = {displayNames}>
            {username}
        </div>
    )
}

export default RankCard