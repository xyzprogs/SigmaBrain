import { useState, useEffect, useContext } from 'react';
import { useStyles } from './style';
const UserCard = (props)=>{

    const classes = useStyles()

    
    return(
        <div className={classes.userCardContainer}>
            <div>img</div>
            <div className={classes.userName}>{props.subscribeTo}</div>
        </div>
    )
}

export default UserCard