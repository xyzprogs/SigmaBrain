import React, { useState, useEffect } from 'react'
import { useStyles } from './style'
import userApis from '../../../api/user-api'
import RankCard from '../../RankCardTemp'
import { useParams } from 'react-router-dom'
const ChannelLeaderboard = ({ channelName }) => {
    const classes = useStyles()
    const { userId } = useParams()
    const [localLeaderboard, setLocalLeaderboard] = useState([])
    //Add username to the table??
    useEffect(() => {
        const getLeaderboard = async (ownerId) => {
            await userApis.getChannelLeaderboard(ownerId).then((response) => {
                setLocalLeaderboard(response.data)
            })
        }
        getLeaderboard(userId);
    }, [])

    //console.log(localLeaderboard)

    return (
        <div className={classes.channelLeaderboardForm}>
            <div className={classes.gridContainer}>
                <div className={classes.rankCardContainer} >
                    <div className={classes.textStyle}>  </div>
                    <div className={classes.textStyle}> User </div>
                    <div className={classes.textStyle}> Score </div>
                </div>
                <div className={classes.textToLeft}>
                    {localLeaderboard.map((user, index) =>
                        <RankCard user={user} index={index} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChannelLeaderboard
