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
        height:"10vw",
        border: "solid",
        marginLeft: "2.5%",
        //marginTop: "2.5%"
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
        textAlign:"Left",
        marginLeft:"30%",
        fontFamily: "fantasy",
        fontSize:50
    },

    quizDescription:{
        textAlign:"Left",
        marginLeft:"30%",
        fontSize:20,
        fontFamily: "serif"
    },
    clickButton:{
        backgroundColor:"#9BAFD8",
        position:"center",
        color:"white",
        textAlign:"Left",
        marginLeft:"30%",
        marginTop:"5%",
        fontSize:15,
        fontWeight:"bold",
        width:90,
        height:30,
        borderRadius:50,
        padding:4
    }
})