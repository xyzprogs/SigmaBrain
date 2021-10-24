import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    quizContainer: {
        border: "solid",
        marginTop: "2.5%",
        height: "20vh",
        borderWidth: "0px 0px 1px 0px",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridTemplateRows: "auto",
        gridTemplateAreas:`
        "quizImg description"
        `
    },
    quizimg: {
        gridArea: "quizImg"
    },
    description: {
        gridArea: "description"
    }
})