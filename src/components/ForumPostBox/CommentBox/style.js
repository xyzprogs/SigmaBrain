import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    container: {
        border: "solid",
        marginTop: "1%",
        minHeight: "10vh",
        display: "flex"
    },

    commentContainer: {
        // marginLeft: "10%"
        marginRight: "auto"
    },

    userbox:{
        width:"20%"
    },
    namebox:{
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: "80%"
    }
})