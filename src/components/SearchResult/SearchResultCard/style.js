import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    searchResultContainer:{
        width: "100%",
        display: "grid",
        gridArea: "main",
        paddingTop: "10%",
        cursor: "pointer"
    },

    cardContainer: {
        width: "100vh",
        display: "grid",
        gridArea: "main",
        marginTop: "10px",
        cursor: "pointer"
    },
})