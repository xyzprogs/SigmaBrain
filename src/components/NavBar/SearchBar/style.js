import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    
    searchBarContainer:{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "90% 10%",
        gridTemplateRows: "40px",
    },

    searchBar:{
        width: "100%"
    },

    searchResult:{
        position: "absolute",
        marginTop: "5.5%",
        backgroundColor: "white"
    },

    resultBox: {
        cursor: "pointer",
        border: "solid",
        width: "50vw",
        background: "white"
    },

    resultText: {
        marginRight: "100%",
        clear: "both",
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "nowrap"
    }

})