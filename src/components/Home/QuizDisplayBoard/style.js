import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    quizContainer: {
        display: "flex",
        // flexDirection: "column",
        flexWrap: "wrap",
        // width: "80vw",
        marginLeft: "3.75%",
        gridArea: "quiz"
        // border: "solid"
    },

    rankContainer: {
        gridArea: "ranking",
        marginRight:"10px"
    },

    RankingsText:{
        fontSize:"25px",
        fontWeight:"bold"
    },
    headerContainer: {
        gridArea: "header"
    },

    title: {
        textAlign: "left",
        marginLeft: "2.4%",
        fontSize:"26px",
        fontWeight:"bold"
    },

    displayBoardContainer: {
        display: "grid",
        gridTemplateColumns: "80% 10%",
        gridTemplateRows: "auto",
        gridTemplateAreas:`
        "header ."
        "quiz ranking"
        `,
        width: "85vw",
        marginTop: "4%"
    },

    card:{
        cursor: "pointer",
        //fontSize:10
    },
    
})