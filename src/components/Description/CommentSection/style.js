import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    container: {
        backgroundColor: "white",
        maxWidth: "80vw",   
        margin: "auto",
        marginTop: "20px"
    },
    commentTextBox: {
        minHeight: "20vh",
        minWidth: "80vw",
        resize: "none"
    },

    userComments: {
        marginTop: "20px",
        border: "solid",
        borderWidth: "1px 0px 0px 0px",
    }

})