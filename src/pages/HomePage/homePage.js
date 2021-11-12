import React from 'react'
import { useStyles } from './style'
import { SideBar, MainBoard } from '../../components/Home'



const HomePage = () => {
    const classes = useStyles()

    return (
        <div> 
        <div>
            <SideBar className={classes.sidebar}/>
        </div>
        <div className={classes.homeContainer}>
            <div>
                <MainBoard className={classes.main}/>
            </div>
        </div>
        </div>
    )
}

export default HomePage
