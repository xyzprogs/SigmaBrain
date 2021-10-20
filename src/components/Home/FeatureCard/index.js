
import { useStyles } from "./style"
const FeatureCard = () =>{
    const classes = useStyles()
    return(
        <div className={classes.featureCardContainer}>
            <div>
                <div>Most Popular</div>
                <div>quiz description</div>
            </div>
            <div>Image</div>
        </div>
    )

}

export default FeatureCard