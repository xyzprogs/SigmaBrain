import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    categoryBarContainer: {
        display: "flex",
        justifyContent: "center",
        width: "85vw",
        marginTop: "1%",
        border: "solid",
        borderWidth: "0px 0px 1px 0px",
        // flexWrap: "wrap"
        paddingTop: "1%"
    },

    categoryBox: {
        border: "solid",
        marginRight: "5%",
        minWidth: "100px",
        marginBottom: "0.5%"
    }
})