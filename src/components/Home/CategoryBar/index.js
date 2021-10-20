import { useStyles } from './style';
const CategoryBar = () =>{
    const classes  = useStyles()
    return(
        <div className={classes.categoryBarContainer}>
            <div className={classes.categoryBox}>
                All
            </div>

            <div className={classes.categoryBox}>
                Sport
            </div>

            <div className={classes.categoryBox}>
                Art
            </div>

            <div className={classes.categoryBox}>
                Music
            </div>

            <div className={classes.categoryBox}>
                ...
            </div>
        </div>
    )

}

export default CategoryBar