
import { useStyles } from './style'
import { QUIZ_CATEGORY_NAME } from '../../../constant/quiz-category'
import { useState } from 'react'
import { Button } from '@mui/material'
import CustomizationModal from './CustomizationModal'

const CatgeorySideBar = ({bar, refs, loadPreferences})=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const scroll = (i)=>{
        refs[i].current.scrollIntoView({block:"center"})
    }
    return(
        <div className={classes.fixOnRight}>
            <div className={classes.openBtn} onClick={()=>{setOpenSidebar(!openSidebar)}}>{openSidebar?"Close Sidebar":"Open Sidebar"}</div>
            {openSidebar && <div className={classes.sidebarContainer}>
                {bar.map((category,i)=>{
                    return <div className={classes.item} key={i} onClick={()=>{scroll(i)}}>{QUIZ_CATEGORY_NAME[category['categoryId']]}</div>
                })}
                <div >
                    <Button onClick={()=>{setOpen(true)}}>Customize</Button>
                </div>  
            </div>}

            <CustomizationModal
                open={open}
                setOpen={setOpen}
                bar={bar}
                loadPreferences={loadPreferences}/>
        </div>
    )
}

export default CatgeorySideBar