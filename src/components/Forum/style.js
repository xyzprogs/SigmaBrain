import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({

    homeContainer: {

        marginTop: "50px"
    },

    postContainer: {
        minHeight: "50vh",
        border: "solid",
        width: "100%",
        margin: "auto",
        overflowY: "auto",
        height: "70vh"
    },

    forumContainer:{
        display: "grid",
        gridTemplateColumns: "70% 30%",
    }
})