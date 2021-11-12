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
        // display: "grid",
        // gridTemplateColumns: "20vw auto",
        // gridTemplateRows: "auto",
        // gridTemplateAreas:`
        // "header header"
        // ". main"
        // `
        marginTop: "50px"
    },
    quizContainer: {
        border: "solid",
        marginTop: "15%",
        height: "10vh",
        borderWidth: "0px 0px 1px 0px",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridTemplateRows: "auto",
        gridTemplateAreas:`
        "quizImg description"
        `,
    },
    title: {
        gridArea: "title"
    },
    back: {
        gridArea: "back"
    },
    cell:{
        width:"30%",
        height:"30%"
    },

    managementContainer: {
        marginLeft: "10%"
    },

    colorGreen:{
        color:'green'
    },
    colorYellow:{
        color:'orange'
    }

})