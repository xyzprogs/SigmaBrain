import { createUseStyles } from 'react-jss'
const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
export const useStyles = createUseStyles({
    barContainer: {
        display: "grid",
        gridTemplateColumns: "10% 65% 25%",
        gridTemplateRows: "50px",
        gridTemplateAreas:`
        "icon search buttons"
        `,
        backgroundColor: "#33FFF3",
        border: "solid",
        borderWidth: "0px 0px 1px 0px",
        width: "100vw",
        position: 'fixed',
        top:"0",
        zIndex: "999"
    },

    icon:{
        gridArea: "icon",
        ...flexCenter
    },

    search:{
        gridArea: "search",
        ...flexCenter
    },

    buttons:{
        gridArea: "buttons",
        ...flexCenter
    }

})