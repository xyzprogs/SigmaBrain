import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    featureCardContainer: {
        display: "grid",
        gridTemplateColumns: "40% 60%",
        gridTemplateRows: "200px",
        gridTemplateAreas:`
        "description img"
        `,
        width: "65vw",
        border: "solid",
        marginLeft: "2.5%",
        marginTop: "2.5%"
    },

    description:{
        gridArea: "description",
    },

    img:{
        gridArea: "img"
    },

    imgSize:{
        width:"100%",
        height: "100%"
    },

    titleName:{
        fontSize:'40px',
        fontWeight:'bold'
    },

    imgContainer:{
        height:'100%',
        gridArea: "img",
    },

    popularTitle:{
        fontFamily: "cursive",
    },

    quizBox: {
        paddingTop: "10%"
    },

    quizName: {
        fontFamily: "fantasy"
    },

    quizDescription:{
        fontFamily: "serif"
    }
})