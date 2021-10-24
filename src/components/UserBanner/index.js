import { useStyles } from './style'

const UserBanner = () => {
    const classes = useStyles()

    return(
        <div className={classes.bannerContainer}>
            User Banner
        </div>
    )
}

export default UserBanner