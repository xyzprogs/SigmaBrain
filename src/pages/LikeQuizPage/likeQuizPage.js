import { useStyles } from './style'
import { SideBar } from '../../components/Home'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth-context';

const LikeQuizPage = ()=>{
    const classes = useStyles()

    return(
        <div> 
            <div>
                <SideBar className={classes.sidebar}/>
            </div>
            <div className={classes.pageContainer}>
                <div>
                    Like Quiz List
                </div>
            </div>
        </div>
    )

}
export default LikeQuizPage