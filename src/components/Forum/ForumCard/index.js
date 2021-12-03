import React from 'react';
import { useStyles } from './style';
import BODY from '../../../constant/body';
import profile_image from '../../../images/Default_profile.png';

const ForumCard = ({post}) => {
    const classes = useStyles()

    function CreateDate(date){
        const array=date.split("T");
        return array[0];
    }
    return(
        <div className={classes.container}>
        <div className={classes.Block_Background}>
            <div className={classes.infoGrid}>
                <div className={classes.imageStyle}>
                    <img src={profile_image}/>
                </div>
                <div>
                    <div className={classes.UserName}>
                        UserName
                    </div>
                    <div className={classes.DateText}>
                        {CreateDate(post[BODY.CREATIONTIME])}
                    </div>
                </div>

            </div>
            <div className={classes.titleText}>
            {post[BODY.POSTTITLE]}
            </div>
            <div className={classes.white_box}>
                {post[BODY.POSTDESCRIPTION]}
            </div>
            
        </div>
        </div>
    )
}
export default ForumCard

/*
            <table>
                <thead>
                    <tr>
                        <td width="10%">
                            {post[BODY.POSTTITLE]}
                        </td>
                        <td width="30%">
                            {post[BODY.CREATIONTIME]}
                        </td>
                    </tr>
                </thead>
            </table>
            <hr size="2" width="70%" color="black"/> 
*/