import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

    titleBox: {
        //border: "solid",
        //borderWidth:"2px",
        width: "50vw",
        //height: "10vh",
        margin: "auto",
        paddingRight: "60%",
        marginBottom: "1%",
        fontSize:30,
        borderRadius:10
    },

    commentsContainer: {
        border: "solid",
        borderWidth:"0.5px",
        height: "25vh",
        width: "50vw",
        margin: "auto",
        marginBottom: "1%",
        overflowY: "auto",
        borderRadius:10
    },

    commentInputBox: {
        width: "50vw",
        border: "solid",
        height: "10vh",
        borderWidth:"0.5px",
        resize: "none",
        borderRadius:10,
        
    },
    forumContainer:{
        width:"80vw",
    },
    commentBox:{
        backgroundColor:"#E6E6E6"
    },
    postContainer:{
        width:"40vw",
        marginLeft:"60px",
        overflowWrap:"break-word",
        textAlign:"left"
    },
    buttonStyle:{
        color:"white",
        width:"60px",
        textAlign:"right",
        backgroundColor:"#9DCADB"
    },
    commentsContainer2: {
        //border: "solid",
        //borderWidth:"0.5px",
        height: "40vh",
        width: "50vw",
        margin: "auto",
        marginBottom: "1%",
        overflowY: "auto",
        borderRadius:10
    },

})