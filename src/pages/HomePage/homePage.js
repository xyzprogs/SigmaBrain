import React from 'react'
import { useStyles } from './style'
import SideBar from '../../components/Home/SideBar/index'
import NavBar from '../../components/NavBar/index'
import MainBoard from '../../components/Home/MainBoard/index'

const HomePage = () => {
    const classes = useStyles()

    return (
        <div> 
        <div>
            <SideBar className={classes.sidebar}/>
        </div>
        <div className={classes.header}>
                <NavBar />
        </div>
        <div className={classes.homeContainer}>
            {/* <div className={classes.header}>
                <SearchBar />
            </div> */}

            {/* <div>
                <SideBar className={classes.sidebar}/>
            </div> */}

            <div>
                <MainBoard className={classes.main}/>
            </div>
        </div>
        </div>
    )
}

export default HomePage
