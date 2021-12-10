import React, { useState, useEffect } from 'react'
import { useStyles } from './style'
import userApis from '../../../api/user-api'
import RankCard from '../../RankCardTemp'
import { useParams } from 'react-router-dom'
import LeaderboardCard from '../LeaderboardCard'
import {Button} from '@mui/material'
const ChannelLeaderboard = ({ channelName }) => {
    const classes = useStyles()
    const { userId } = useParams()
    const [localLeaderboard, setLocalLeaderboard] = useState([])
    const [end, setEnd] = useState(false)
    useEffect(() => {
        const getLeaderboard = async (ownerId) => {
            await userApis.getChannelLeaderboard(ownerId).then((response) => {
                // setLocalLeaderboard(response.data)
                updateChannelLeaderboard(response)
                console.log(response.data)
            })
        }
        getLeaderboard(userId);
    }, [userId])

    const updateChannelLeaderboard = (response) => {
        let sub_arr = response.data
        if(response.data.length>0){
            if(response.data.length !== 10){
                setEnd(true)
            }
            let newarr = [...localLeaderboard]
            for(var i = 0; i < sub_arr.length; i++){
                newarr.push(sub_arr[i])
            }
            setLocalLeaderboard(newarr)
        }
        else{
            setEnd(true)
        }
    }

    const getMore = async()=>{
        let row = localLeaderboard.length
        let response = await userApis.getChannelLeaderboard(userId, row)
        updateChannelLeaderboard(response)
    }

    return (
        <div className={classes.container}>
            <table id="users" className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.cell}>Rank</th>
                        <th className={classes.cell}>&nbsp;</th>
                        <th className={classes.cell}>Name</th>
                        <th className={classes.cell}>Level</th>
                        <th className={classes.cell}>Score Point</th>
                    </tr>
                </thead>

                <tbody>
                    {localLeaderboard.map((user, i) => {
                        return <LeaderboardCard user={user} rank={i+1}/>
                    })}
                </tbody>
            </table>
            {
                !end?
                <Button onClick={getMore}>More</Button>
                :<div>No More</div>
            }
        </div>
    )
}

export default ChannelLeaderboard
