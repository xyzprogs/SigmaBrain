import React from 'react'
import { useState, useEffect } from 'react'
import userApis from '../../api/user-api'
import { useStyles } from './style'
import ChannelLeaderboard from '../../components/ChannelLeaderboard/Leaderboard'

const ChannelLeaderboardPage = () => {
    const classes = useStyles()
    

    useEffect(() => {
        console.log(userApis.getChannelLeaderboard(1));

    }, [])

    return (
        <div>
            <div className={classes.pageContainer}>
                <ChannelLeaderboard />
            </div>
        </div>
    )
}

export default ChannelLeaderboardPage
