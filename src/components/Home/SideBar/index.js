import { useState, useEffect, useContext } from 'react';
import { useStyles } from './style';
import AuthContext from '../../../context/auth-context';
import userApis from '../../../api/user-api';
import HEADER from '../../../constant/header';
import UserCard from '../SubscriptionCard';
import BODY from '../../../constant/body';
import Home_Sign from '../../../images/Home.png'
import Subcription_sign from '../../../images/Subcription.png'
import Channel_sign from '../../../images/Channel.png'
import Watch_Later_sign from '../../../images/watchLater.png'
import Like_Quizzes_sign from '../../../images/LikeQuizzes.png'
import Community_sign from '../../../images/Community.png'
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
                    <img className={classes.image_setting} src={Home_Sign} alt=""/>
                    &nbsp;&nbsp;Home
                </div>
                <div className={classes.sideBarSelect}>
                    <img className={classes.image_setting} src={Subcription_sign} alt=""/>
                    &nbsp;&nbsp;Subscription
                </div>
                <div className={classes.sideBarSelect}>
                    <img className={classes.image_setting} src={Channel_sign} alt=""/>
                    &nbsp;&nbsp;Channel
                </div>
                <div className={classes.sideBarSelect}>
                <img className={classes.image_setting} src={Watch_Later_sign} alt=""/>
                    &nbsp;&nbsp;Take Later
                </div>
                <div className={classes.sideBarSelect}>
                <img className={classes.image_setting} src={Like_Quizzes_sign} alt=""/>
                    &nbsp;&nbsp;Like Quizzes
                </div>
                <div className={classes.sideBarSelect}>
                <img className={classes.image_setting} src={Community_sign} alt=""/>
                    &nbsp;&nbsp;Community
                </div>
            </div>

            <div className={`${classes.subscriptionTop} ${classes.sideBarSelection}`}>
                Subscriptions:
                <div>
                    {subscriptions.map((sub, i)=>{
                        return <UserCard key={i}
                                    subscribeTo={sub[BODY.SUBSCRIBETO]}/>
                    })}
                </div>
            </div>

            <div>
                <div className={classes.sideBarSelect}>
                    &nbsp;&nbsp;Settings
                </div>
            </div>
        </div>
    )
}

export default SideBar
