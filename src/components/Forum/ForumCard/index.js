import React from 'react';
import { useStyles } from './style';
import BODY from '../../../constant/body';
import profile_image from '../../../images/Default_profile.png';
import {useEffect, useState} from 'react'
import userApi from '../../../api/user-api'
const ForumCard = ({post, isTop10}) => {
    const classes = useStyles()
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    //const [isTop10, setIsTop10] = useState(false)
    function CreateDate(date){
        const array=date.split("T");
        return array[0];
    }

    useEffect(()=>{
        const loadProfile = async()=>{
            try{
                let response = await userApi.getProfileImage(post[BODY.USERID])
                setImage(response.data)
            }catch{
                setImage(profile_image)
            }
        }

        const loadUserName = async()=>{
            try{
                let response = await userApi.getUserDisplayName(post[BODY.USERID])
                setName(response.data[0][BODY.DISPLAYNAME])
            }catch{
                setName("fail to load")
            }

        }
        loadProfile()
        loadUserName()
    },[post])

    return(
        <div className={classes.container}>
        <div className={classes.Block_Background}>
            <div className={classes.infoGrid}>
                <div className={classes.imageStyle}>
                    <img className={classes.imgSize} src={image}/>
                </div>
                <div>
                    <div className={classes.UserName}>
                        {name}
                    </div>
                    {isTop10(post) && <div className={classes.UserName}>
                        Top 10
                    </div>}
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