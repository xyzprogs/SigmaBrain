import React from 'react'
import { useStyles } from '../style'

const UserControl = ({setLogin}) => {
    return (
        <div onClick={()=>setLogin(false)}>
            Sign Out
        </div>
    )
}

export default UserControl
