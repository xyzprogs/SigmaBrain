import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    aboutContainer:{
        textAlign: "left",
        height: "50vh"
    },

    editContainer:{
        textAlign: "left",
        height: "50vh",
        width: "100%"
    },

    aboutText:{
        fontSize:50,
        textAlign:'left',
        fontWeight:"bold",
        border: "solid",
        borderWidth: "0px 0px 2px 0px"
    }
})