import React from 'react'
import { useStyles } from './style'
import { SideBar, MainBoard } from '../../components/Home'
import NavBar from '../../components/NavBar/index'


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
