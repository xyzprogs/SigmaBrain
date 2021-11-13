import React from 'react'
import { useState, useEffect } from 'react'
import { useStyles } from './style'
import ChannelLeaderboard from '../../components/ChannelLeaderboard/Leaderboard'

const ChannelLeaderboardPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageContainer}>
            <div className={classes.channelLeaderboardContainer}>
                <ChannelLeaderboard channelName={1}/>
            </div>
        </div>
    )
}

export default ChannelLeaderboardPage
