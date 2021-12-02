import { textAlign } from '@mui/system'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    barContainer: {
        border: "solid",
        borderWidth: "0px 0px 5px 0px",
        height: "5vh",
        width: "100%",
        display: "flex",     
    },
    imgTag:{
        display: "none"
    },
    circle: {
        borderRadius: "50%",
        width: "100px",
        height: "100px",
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
        gridRow:'1 / 3',
        marginLeft: '30%'
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
        fontSize:"30px",
    },

    selectedCell:{
        marginTop: "auto",
        paddingRight: "10px",
        marginRight: "10px",
        marginLeft: "50px",
        cursor: "pointer",
        fontSize:"30px",
        // border: "solid",
        // borderWidth: "0px 0px 2px 0px",
        color: "blue",
        // borderColor: "blue",
        // textAlign: "center"
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
    },

    userInfoGrid:{
        display:'grid',
        width:'20%',
        gridTemplateColumns: 'auto auto',

    },
    userInfoGrid2:{
        display:'grid',
        width:'40%',
        gridTemplateColumns: '30% auto',

    },
    ChannelNameText:{
        fontSize:"50px",
        textAlign:"Left",
        fontWeight:900,
        paddingLeft: "15%"
    },
    EmailText:{
        fontSize:"20px",
        textAlign:"left"
    },
    colorRed:{
        color: "red"
    },
    colorGreen:{
        color: "green"
    },
    btn:{
        cursor: "pointer"
    }
})