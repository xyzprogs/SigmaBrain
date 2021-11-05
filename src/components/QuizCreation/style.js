import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({
    creationCardContainer: {
        width: '50vw',
        height: '100vh',
        // display:' flex',
        // flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor:"white",
    },

    creationCardTitleSize: {
        fontSize: '30px'
    },

    inputContainer: {
        display: 'flex',
        textAlign: "center",
        color: "black",
        border: '0px',
        fontSize: '25px',
        backgroundColor: "white",
        marginTop: '5px',
        marginBottom: '3px',
        flexWrap: 'flexwrap',

    },

    imageContainer: {
        width: '220px',
        height: '220px',
        marginTop: '20px',
        objectFit: 'cover'
    },

    title: {
        display: "flex",
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        justifyContent: "space-between",
        paddingTop: '5%'
    },

    quizName: {
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
    },

    cover:{
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
    },

    subTitle:{
        textAlign: "left"
    },

    introduction: {
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        height: "30vh"
    },

    timeLimit: {
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        height: "10vh"
    },

    toRight: {
        float: 'right'
    },

    introductionBox: {
        width: "30vw",
        height: "20vh"
    },

    imgTag:{
        display: "none"
    },

    imgSize:{
        width:"50%",
        height: "50%"
    },
    
    
})