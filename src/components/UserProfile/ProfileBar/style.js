import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    barContainer: {
        border: "solid",
        borderWidth: "0px 0px 1px 0px",
        height: "10vh",
        width: "100%",
        display: "flex",     
    },
    imgTag:{
        display: "none"
    },
    circle: {
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        borderStyle: "solid",
        marginLeft: "1.5%",
        marginTop: "1%"
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
    imgOpacity:{
        opacity: "0.3",
        background: "rgba(0, 0, 0, 0.5)"
    },

    imgContainer: {
        position: "relative",
        textAlign: "center",
    },

    changeText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "10px"
    },

    tableCell:{
        display: "table-cell",
    },

    tableCell2:{
        marginTop: "auto",
        paddingRight: "10px",
        marginRight: "10px",
        marginLeft: "50px",
        cursor: "pointer",
        fontSize:"30px"
    },

    tableCell3:{
        marginLeft: "auto",
        marginTop: "auto"
    },

    pointerCursor:{
        cursor: "pointer"
    },

    defaultCursor:{
        cursor: "default"
    }
    
})