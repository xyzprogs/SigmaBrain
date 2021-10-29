
import { useStyles } from "./style"
const FeatureCard = () => {
    const classes = useStyles()
    return (
        <div className={classes.featureCardContainer}>
            <div>
                <div className={classes.titleName}>
                    Most Popular
                </div>
                <div>quiz description</div>
            </div>
            <div className={classes.imgContainer}>
                <img src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
                height='200px'/>
            </div>
        </div>
    )

}

export default FeatureCard