import { createUseStyles } from "react-jss"

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
    cardSize:{
        width: "50%",
        height: "50%",
        margin: "auto"
    },
    cardContainer:{
        width: "80vw",
        backgroundColor: "white",
        margin: "auto"
    }
})