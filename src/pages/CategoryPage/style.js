import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    pageContainer:{
        marginTop: "7%"
    },

    quizContainer: {
        display: "flex",
        // flexDirection: "column",
        flexWrap: "wrap",
        // width: "80vw",
        marginLeft: "2.5%",
        gridArea: "quiz",
        // border: "solid"
        marginTop: "1%"
    },

    title: {
        borderStyle: "none none solid none"
    }
})