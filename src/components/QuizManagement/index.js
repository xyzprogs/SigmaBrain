import React from 'react'
import { useStyles } from './style'
import NavBar from '../../components/NavBar/index'
import SideBar from '../../components/Home/SideBar/index'

const QuizManagement = () => {
    const classes = useStyles()
    return (
        <div>
            <div>
                <SideBar className={classes.sidebar} />
            </div>
            <div className={classes.header}>
                <NavBar />
            </div>

            <div>
                <div className={classes.featureCardContainer}>
                    <div>Profile</div>
                    <div>Level</div>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>

            </div>
        </div>
            
        )
}
export default QuizManagement;