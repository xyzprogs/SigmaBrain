import React from 'react'
import { useStyles } from './style'
import { useContext } from 'react'
import AuthContext from '../../../context/auth-context';


const UserControl = ({setLogin}) => {
    const classes = useStyles()
    const { auth } = useContext(AuthContext)
    return (
        <div className={classes.userControlsContainers}>
            <div className="dropdown">
                <div className={`dropdown-toggle `} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><a className="dropdown-item" href="#"  onClick={()=>auth.signOut()}>Sign Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default UserControl
