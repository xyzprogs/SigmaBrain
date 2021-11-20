import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    
    searchBarContainer:{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "90% 10%",
        gridTemplateRows: "40px",
        
    },

    searchBar:{
        width: "100%",
        borderRadius:"10px 0px 0px 10px",
        outline:'none'

    },
    buttonBar:{
        borderRadius:"0px 10px 10px 0px",
        backgroundColor:"#B1D2D4",
        color:'white'
    }

})