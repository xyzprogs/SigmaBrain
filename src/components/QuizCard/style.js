import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({

    container:{
       Height: "20vh",
       display: "flex"
    },  
    img:{
        height:"20vh",
    },
    quizCardContainer: {
        width: '12.8vw',
        cursor: "pointer",
        margin:20
    },
    imgSize:{
        width:"100%",
        height: "100%"
    },

    cursor:{
        cursor: "pointer"
    },
    titleText:{
        textAlign:"left",
        fontSize:30,
        fontWeight:"bold",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",

    },
    descriptionText:{
        textAlign:"left",
        fontSize:13
    },
    dateText:{
        textAlign:"left",
        fontSize:5
    },
    informationContainer:{
        display: "grid",
        gridTemplateColumns: "50% 50%",
    },
    viewNumberContainer:{
        textAlign:"right",
        fontSize:5
    },
    viewNumberImage:{
        width:"10%"
    }
})