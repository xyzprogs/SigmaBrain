import React from 'react'
import { useState, useEffect } from 'react'
import userApis from '../../api/user-api'

const ChannelLeaderboard = () => {
    
    useEffect(() => {
        console.log(userApis.getChannelLeaderboard(1));

    }, [])

    return (
        <div>
            BIG HELLO
        </div>
    )
}

export default ChannelLeaderboard
