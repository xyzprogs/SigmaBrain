import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    pageContainer:{
        marginTop: "3.5%"
    },

    quizContainer: {
        display: "flex",
        // flexDirection: "column",
        flexWrap: "wrap",
        // width: "80vw",
        gridArea: "quiz",
        // border: "solid"
        // marginTop: "2.5%",
        marginLeft: "15vw",
    },

    title: {
        paddingTop: "2.5%",
        borderStyle: "none none solid none",
        // width: "80vw",
        marginLeft: "15vw"
    },

    boardContainer:{
        // display: "absolute",
        // marginTop: "7%"
        // width: "80vw"
    }
})