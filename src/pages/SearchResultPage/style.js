import { createUseStyles } from 'react-jss'
const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
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
        // display: "grid",
        // gridTemplateColumns: "20vw auto",
        // gridTemplateRows: "auto",
        // gridTemplateAreas:`
        // "header header"
        // ". main"
        // `
        marginTop: "50px"
    },

    header:{
        gridArea: "header"
    },

    main:{
        // gridArea: "main",
        // gridColumnStart: "1",
        // paddingLeft: "20vw"
    },

    sidebar:{
        gridArea: "menu",
    }, 

    searchResults: {
        gridArea: "main",
        marginLeft: "30%"
    }

})