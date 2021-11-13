import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    // homeContainer: {
    //     display: "grid",
    //     gridTemplateColumns: "15% 40% 25% 15% auto",
    //     gridTemplateRows: "auto",
    //     gridTemplateAreas:`
    //     "header header header header header"
    //     "sidebar main main main ."
    //     `
    // },

    homeContainer: {
        position: "absolute",
        marginTop: "50px",
        right: "100px",
    },
    
    main:{
        // gridArea: "main",
        // gridColumnStart: "1",
        // paddingLeft: "20vw"
    },

    sidebar:{
        gridArea: "sidebar",
    }

})
