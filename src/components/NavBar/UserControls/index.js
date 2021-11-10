import { useStyles } from './style'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../../context/auth-context';


const UserControl = ({setLogin}) => {
    const classes = useStyles()
    const { auth } = useContext(AuthContext)
    const history = useHistory()

    const redirectProfile = ()=>{
        history.push(`/profile/${auth.getCurrentUserUid()}`)
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
                    <li><a className="dropdown-item" onClick={redirectProfile}>Profile</a></li>
                    <li><a className="dropdown-item" onClick={redirectQuizCreation}>Create Quiz</a></li>
                    <li><a className="dropdown-item" onClick={redirectQuizManagement}>Quiz Management</a></li>
                    <li><a className="dropdown-item" onClick={()=>auth.signOut()}>Sign Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default UserControl
