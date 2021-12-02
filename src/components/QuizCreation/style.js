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
        paddingBottom: "1%",
    },

    titleText:{
        fontFamily: "serif",
        fontSize: "30px"
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
        fontSize: "20px",
        fontWeight: "lighter"
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
        width: "90%",
        height: "20vh",
        resize: "none",
        borderRadius: "20px",
        borderColor: "gray",
        backgroundColor: "whitesmoke"
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
        height: "35px",
        width: "80px",
        borderRadius: "20px",
        cursor: "pointer",
        borderColor: "gray",
        borderWidth: "1px"
        
    },

    btnText: {
        textAlign: "center",
        margin: "auto",
        paddingTop: "5%",
        color: "gray"
    },

    quizNameField: {
        width: "40vw",
        borderRadius: "20px",
        height: "40px",
        backgroundColor: "whitesmoke",
        textAlign: "center"
    },

    plusContainer:{
        border: "solid",
        height: "150px",
        width: "200px",
        margin: "auto",
        borderRadius: "20px",
        cursor: "pointer",
        marginTop: "2.5%",
        borderColor: "gray"
    },

    plus: {
        textAlign: "center",
        margin: "auto",
        paddingTop: "25%",
        color: "gray",
        fontSize: "30px"
    },

    imgContainer:{
        width: "50vw",
        height: "50vh",
        marginTop: "2%"
    },

    toCenter: {
        margin: "auto",
        marginBottom: "2%"
    },

    flexBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    unit: {
        marginLeft: "0.5%",
        fontWeight: "lighter"
    },

    timeBox: {
        width: "20%",
        resize: "none",
        borderRadius: "20px",
        borderColor: "gray",
        backgroundColor: "whitesmoke",
        textAlign: "center"
    },

    quizCategory: {
        border: "solid",
        width: "100%",
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
        margin: "auto",
        display: "flex"
    },

    questionMargin: {
        marginLeft: "12%"
    },

    questionText:{
        fontWeight: "lighter"
    },

    delete: {
        paddingLeft: "1%",
        cursor: "pointer",
        color: "red"
    },

    errorMsg: {
        margin: '0 15px',
        fontSize: '12px',
        color: 'red',
        textAlign: 'center'
    },

    autoContainer:{
        marginLeft: "25%"
    },

    tableContainer:{
        borderCollapse: "separate",
        borderSpacing: "50px 0"
    },

    editBtn:{
        cursor: "pointer",
        border: "solid",
        borderColor: "gray",
        borderRadius: "10px",
        borderWidth: "1px",
        width: "5%",
        color: "green"
    }
})