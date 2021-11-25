import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({
    quizCardContainer: {
        width: '12.8vw',
        cursor: "pointer",
        margin:20
    },
    imgSize:{
        width:"100%",
        height: "150px"
    },

    cursor:{
        cursor: "pointer"
    },
    titleText:{
        textAlign:"left",
        fontSize:30,
        fontWeight:"bold"

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