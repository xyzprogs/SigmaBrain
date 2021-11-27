import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

    container:{
        // gridTemplateColumns: "40% 60%",
        // gridTemplateAreas: "image text",
        display: "flex",
        width: "10vw"
    },

    text:{
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    imgSize:{
        width:"100%",
        height: "100%"
    },

    imgContainer:{
        width: "5vw",
        height: "5vh",
        paddingLeft: "5%"
    },
})