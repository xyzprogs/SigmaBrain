import { useState, useEffect, useContext } from 'react';
import { useStyles } from './style';
import AuthContext from '../../../context/auth-context';
import userApis from '../../../api/user-api';
import HEADER from '../../../constant/header';
import UserCard from '../../UserCard';
import BODY from '../../../constant/body';
const SideBar = () => {
    const classes = useStyles()
    const [subscriptions, setSubscriptions] = useState([])
    const { auth } = useContext(AuthContext)

    useEffect(()=>{
        const loadSubscriptions = async (userId)=>{
            const token = await auth.user.getIdToken()
            let headers = {
                [HEADER.TOKEN] : token
            }
            let response = await userApis.getSubscriptions(headers)
            setSubscriptions(response.data)
        }
        
        if(auth.user!=null){
            loadSubscriptions()
        }
    }, [auth.user])

    return (
        <div className={classes.sideBarContainer}>
            <div className={classes.sideBarSelection}>
                <div className={classes.sideBarSelect}>
                    Home
                </div>
                <div className={classes.sideBarSelect}>
                    Subscription
                </div>
                <div className={classes.sideBarSelect}>
                    Channel
                </div>
                <div className={classes.sideBarSelect}>
                    Take Later
                </div>
                <div className={classes.sideBarSelect}>
                    Like Quizzes
                </div>
                <div className={classes.sideBarSelect}>
                    Community
                </div>
            </div>

            <div className={`${classes.subscriptionTop} ${classes.sideBarSelection}`}>
                Subscriptions:
                <div>
                    {subscriptions.map((sub, i)=>{
                        return <UserCard
                                    subscribeTo={sub[BODY.SUBSCRIBETO]}/>
                    })}
                </div>
            </div>

            <div>
                <div className={classes.sideBarSelect}>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default SideBar
