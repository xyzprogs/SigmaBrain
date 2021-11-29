import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

    titleBox: {
        border: "solid",
        width: "80vw",
        margin: "auto",
        paddingRight: "80%",
        marginBottom: "1%"
    },

    commentsContainer: {
        border: "solid",
        height: "70vh",
        width: "80vw",
        margin: "auto",
        overflowY: "auto"
    },

    commentInputBox: {
        width: "80vw",
        resize: "none"
    }

})