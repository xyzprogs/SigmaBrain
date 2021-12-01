import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    
    searchBarContainer:{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "90% 10%",
        gridTemplateRows: "40px",
        paddingRight: "50px",
        marginLeft: "25%"
        
    },

    searchBar:{
        width: "100%",
        borderRadius: '15px',
        paddingLeft: '12px',
        outline: 'none'
        
    },

    searchResult:{
        position: "absolute",
        marginTop: "3%",
        backgroundColor: "white"
    },

    resultBox: {
        cursor: "pointer",
        border: "solid",
        width: "50vw",
        background: "white",
        borderStyle: "none none none none",
        display: "flex"

    },

    resultText: {
        textAlign: "left",
        float: "right",
        clear: "both",
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        borderRadius:"10px 0px 0px 10px",
        outline:'none',

    },
    buttonBar:{
        borderRadius: "15px",
        backgroundColor:"#B1D2D4",
        color:'black',
        marginLeft: "-50px",

    }

})