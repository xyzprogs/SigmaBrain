import React from 'react'
import { useStyles } from './style'
import SideBar from '../../components/Home/SideBar/index'
import SearchBar from '../../components/SearchBar/index'
import MainBoard from '../../components/Home/MainBoard/index'

const HomePage = () => {
    const classes = useStyles()

    return (
        <div className={classes.homeContainer}>
            <div className={classes.header}>
                <SearchBar />
            </div>

            <div>
                <SideBar className={classes.sidebar}/>
            </div>

            <div>
                <MainBoard className={classes.main}/>
            </div>
        </div>
    )
}

export default HomePage
