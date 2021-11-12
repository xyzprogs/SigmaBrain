import { useStyles } from "./style";
import QuizManagement from "../../components/QuizManagement";
const QuizManagementPage = () => {
    const classes = useStyles()

    return (
        <div> 
            <div className={classes.pageContainer}>
                <QuizManagement/>
            </div>
        </div>
    )
}

export default QuizManagementPage
