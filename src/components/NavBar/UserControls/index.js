import { useStyles } from './style'
import { useContext,useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../../context/auth-context';


const UserControl = ({setLogin}) => {
    const classes = useStyles()
    const { auth } = useContext(AuthContext)
    const history = useHistory()


    const redirectProfile = ()=>{
        history.push(`/profile/${localStorage.getItem('uid')}`)
    }

    const redirectQuizManagement = ()=>{
        history.push('/quizManagement')
    }

    const redirectQuizCreation = ()=>{
        history.push('/quizCreation')
    }

    return (
        <div className={classes.userControlsContainers}>
            <div className="dropdown">
                <div className={`dropdown-toggle `} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><div className={`${classes.dropItem} dropdown-item`} onClick={redirectProfile}>Profile</div></li>
                    <li><div className={`${classes.dropItem} dropdown-item`} onClick={redirectQuizCreation}>Create Quiz</div></li>
                    <li><div className={`${classes.dropItem} dropdown-item`} onClick={redirectQuizManagement}>Quiz Management</div></li>
                    <li><div className={`${classes.dropItem} dropdown-item`} onClick={()=>auth.signOut()}>Sign Out</div></li>
                </ul>
            </div>
        </div>
    )
}

export default UserControl
