
import { useStyles } from './style'
import { QUIZ_CATEGORY_NAME } from '../../../constant/quiz-category'
import { useEffect, useState, useContext } from 'react'
import { Button } from '@mui/material'
import CustomizationModal from './CustomizationModal'
import userApis from '../../../api/user-api'
import AuthContext from '../../../context/auth-context'
import HEADER from '../../../constant/header'
const CatgeorySideBar = ({bar, refs, loadPreferences})=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const {auth} = useContext(AuthContext)
    const scroll = (i)=>{
        refs[i].current.scrollIntoView({block:"center"})
    }
    // useEffect(()=>{
    //     /*Retrive From Database At Some Point */
    //     const loadPreferences = async()=>{
    //         if(auth.user!=null && auth.user!==undefined){
    //             const token = await auth.user.getIdToken()
    //             let headers = {
    //                 [HEADER.TOKEN] : token
    //             }
    //             let response = await userApis.obtainUserCategoryPreference(headers)
    //             console.log(response.data)
    //         }
    //     }
    //     loadPreferences()
    // },[auth.user])

    return(
        <div>
            <div className={classes.fixOnRight}>
                {bar.map((category,i)=>{
                    return <div className={classes.item} key={i} onClick={()=>{scroll(i)}}>{QUIZ_CATEGORY_NAME[category['categoryId']]}</div>
                })}
                <div >
                    <Button onClick={()=>{setOpen(true)}}>Customize</Button>
                </div>  
            </div>

            <CustomizationModal
                open={open}
                setOpen={setOpen}
                bar={bar}
                loadPreferences={loadPreferences}/>
        </div>
    )
}

export default CatgeorySideBar