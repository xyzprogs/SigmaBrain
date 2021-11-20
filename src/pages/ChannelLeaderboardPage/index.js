import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStyles } from './style'
import ChannelLeaderboard from '../../components/Leaderboard/CategoryLeaderboard'

const ChannelLeaderboardPage = () => {
    const classes = useStyles()
    const { leaderboardId } = useParams()

    console.log(leaderboardId);

    return (
        <div className={classes.pageContainer}>
            <div className={classes.channelLeaderboardContainer}>
                <ChannelLeaderboard channelName={leaderboardId}/>
            </div>
        </div>
    )
}

export default ChannelLeaderboardPage
