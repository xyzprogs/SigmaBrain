import { createUseStyles } from 'react-jss'
const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
export const useStyles = createUseStyles({
    homeContainer: {
        display: "grid",
        gridTemplateColumns: "10% 40% 25% 25%",
        gridTemplateRows: "auto",
        gridTemplateAreas:`
        "header header header header"
        "sidebar main main main"
        `
    },

    header:{
        gridArea: "header"
    },

    main:{
        gridArea: "main",
    },

    sidebar:{
        gridArea: "sidebar"
    }

})
