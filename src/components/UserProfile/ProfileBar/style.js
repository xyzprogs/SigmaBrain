import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    barContainer: {
        border: "solid",
        borderWidth: "0px 1px 1px 1px",
        height: "7vh"
    },
    imgTag:{
        display: "none"
    },
    circle: {
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        borderStyle: "solid"
    },
    imgSize:{
        width:"100%",
        height: "100%",
        borderRadius: "50%",
    },
    uploadBtn:{
        position: "absolute",
        left: "50%",
    },
})