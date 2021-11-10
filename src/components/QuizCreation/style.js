import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({
    creationCardContainer: {
        width: '50vw',
        height: '100%',
        // display:' flex',
        // flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor:"white",
        // overflowY: "auto"
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
        borderColor: "coral",
        justifyContent: "space-between",
        paddingTop: '5%',
        paddingBottom: "1%"
    },

    quizName: {
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        paddingBottom: "5%",
        paddingTop: '5%',
    },

    cover:{
        border: "solid",
        width: "50vw",
        height: "40vh",
        borderWidth: "0px 0px 1px 0px",
    },

    subTitle:{
        textAlign: "left",
        paddingLeft: "1%",
        fontSize: "20px"
        // fontFamily: "Serif"
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
        height: "15vh"
    },

    toRight: {
        float: 'right'
    },

    toLeft: {
        float: 'left'
    },

    introductionBox: {
        width: "30vw",
        height: "20vh",
        resize: "none" 
    },

    imgTag:{
        display: "none"
    },

    imgSize:{
        width:"50%",
        height: "50%"
    },
    
    btn:{
        border: "solid",
        height: "40px",
        width: "70px",
        borderRadius: "10px",
    },

    btnText: {
        textAlign: "center",
        margin: "auto",
        paddingTop: "5px"
    },

    quizNameField: {
        width: "40vw"
    },

    imgContainer:{
        width: "50vw",
        height: "50vh",
        marginTop: "2%"
    },

    toCenter: {
        margin: "auto"
    },

    flexBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    unit: {
        marginLeft: "0.5%"
    },

    quizCategory: {
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        height: "15vh"
    },

    questionContainer:{
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        minHeight: "20vh"
    },

    checkboxPadding:{
        margin: "auto"
    },

    delete: {
        paddingLeft: "1%",
        cursor: "default"
    }

})