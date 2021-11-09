import {useState} from 'react';
import { useStyles } from './style';
const QuizSideBar = () => {
    const classes = useStyles()
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
            </div>

            <div>
                <div className={classes.sideBarSelect}>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default QuizSideBar
