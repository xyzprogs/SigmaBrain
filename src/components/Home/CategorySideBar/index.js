
import { useStyles } from './style'
import { QUIZ_CATEGORY_NAME } from '../../../constant/quiz-category'
import { useEffect } from 'react'
const CatgeorySideBar = ({bar, refs})=>{
    const classes = useStyles()

    const scroll = (i)=>{
        refs[i].current.scrollIntoView({block:"center"})
    }
    useEffect(()=>{
        /*Retrive From Database At Some Point */

    },[])
    return(
        <div className={classes.fixOnRight}>
            {bar.map((category,i)=>{
                return <div className={classes.item} key={i} onClick={()=>{scroll(i)}}>{QUIZ_CATEGORY_NAME[category]}</div>
            })}
        </div>
    )
}

export default CatgeorySideBar