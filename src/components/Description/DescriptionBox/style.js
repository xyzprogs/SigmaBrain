import { createUseStyles } from "react-jss"
const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

export const useStyles = createUseStyles({
    
    boxContainer: {
        backgroundColor: "white",
        minHeight: "50vh",
        maxWidth: "80vw",
        margin: "auto",
    },
    imgSize:{
        width:"100%",
        height: "100%"
    },
})