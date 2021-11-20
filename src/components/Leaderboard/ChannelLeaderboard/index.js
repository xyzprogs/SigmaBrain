import React, { useState, useEffect } from 'react'
import { useStyles } from './style'
import userApis from '../../../api/user-api'
import RankCard from '../../RankCardTemp'

const ChannelLeaderboard = ({ channelName }) => {
    const classes = useStyles()

    const [localLeaderboard, setLocalLeaderboard] = useState([])
    const [channel, setChannel] = useState("")
    //Add username to the table??
    useEffect(() => {
        const getLeaderboard = async (leaderboardId) => {
            await userApis.getChannelLeaderboard(leaderboardId).then((response) => {
                setLocalLeaderboard(response.data)
                //console.log(response.data)
            })

            await userApis.getUserDisplayName(leaderboardId).then((response)=>{
                setChannel(response.data[0].displayName)
            })

        }
        getLeaderboard(channelName);
    }, [])

    //console.log(localLeaderboard)

    return (
        <div className={classes.channelLeaderboardForm}>
            <div className={classes.gridContainer}>
                <div className={classes.titleWrapper}>
                    <h3 className={classes.title}>Leaderboard for {channel}</h3>
                </div>
                <div className={classes.rankCardContainer} >
                    <div>  </div>
                    <div> User </div>
                    <div> Score </div>
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
