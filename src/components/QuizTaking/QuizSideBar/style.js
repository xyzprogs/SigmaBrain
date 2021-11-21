import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({

    sideBarContainer: {
        borderStyle: "solid",
        borderWidth: "0px 1px 0px 0px",
        height: "100vh",
        width: "15vw",
        // marginTop: "50px",
        position: "fixed",
    },

    sideBarSelection: {
        borderStyle: "solid",
        borderWidth: "0px 0px 1px 0px",
    },

    sideBarSelect: {
        paddingTop: "10px"
    },

    buttonSelected: {
        backgroundColor: "#444140",
        color: "#0275d8",
        borderStyle: "solid"
    },

    buttonDefault: {
        backgroundColor: "#0275d8",
        color: "white",
        borderStyle: "solid"
    }


})