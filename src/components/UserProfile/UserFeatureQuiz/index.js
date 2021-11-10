import { useStyles } from './style'
import { useEffect } from 'react'
const UserFeatureQuiz = (props) => {

    const classes = useStyles()

    // useEffect(()=>{
    //     console.log(props.userId)
    // },[])

    return(
        <div>
           <div>
               <button>Update Feature Quiz</button>
           </div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>
                    Image
                </div>
                <div className={classes.description}>
                    Description
                </div>
            </div>
        </div>
    )
}

export default UserFeatureQuiz