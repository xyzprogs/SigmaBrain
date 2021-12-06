import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    profileContainer:{
        marginTop: "5%",
        border: "solid",
        borderWidth: "0px 0px 1px 0px",
    },
    homeContainer: {
        marginTop: "50px"
    },
    quizContainer: {
        border: "solid",
        marginTop: "15%",
        height: "10vh",
        borderWidth: "0px 0px 1px 0px",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridTemplateRows: "auto",
        gridTemplateAreas:`
        "quizImg description"
        `,
    },
    title: {
        gridArea: "title",
        fontFamily: "serif",
        fontSize: "30px",
        paddingLeft: "70px",
        paddingTop: "5px"
    },
    back: {
        gridArea: "back"
    },
    cell:{
        width:"30%",
        height:"30%"
    },

    btn:{
        cursor: "pointer",
        fontSize: "20px"
    },

    managementContainer: {
        marginLeft: "10%"
    },

    colorGreen:{
        color:'green'
    },
    colorYellow:{
        color:'orange'
    },
    colorRed:{
        color: "red"
    },
    titleBar:{
        paddingRight: "100%",
        whiteSpace: "nowrap",
        backgroundColor: "white",
        width: "100%",
        height: "8vh",
    },

    consoleContainer:{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
    },

    consoleBarContainer:{
        // border: "solid",
        // height: "5vh",
        // borderWidth: "0px 0px 1px 0px",
        // display: "grid",
        // gridTemplateAreas:`
        // "filter button"
        // `,
        position: "fixed",
        left: "30%",
        // borderWidth: "2px 2px 2px 0px",
        // border: "solid",
        //  zIndex: "-1",
    },

    buttonContainer:{
        marginLeft: '850px',
        marginTop: "0%"
    },

    rowContainer: {
        border: "solid",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "5px",
        borderWidth: "0px 0px 1px 0px",
        borderColor: "gray",
    },
    image_setting:{
        width:'50px'
    },

    iconBox:{
        cursor: 'pointer',
        marginBottom: "50%",
        '&:hover':{
            backgroundColor: "white"
        }
    }

})