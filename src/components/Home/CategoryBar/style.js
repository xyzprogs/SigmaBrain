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
        marginBottom: "0.5%",
        cursor: "pointer",
        borderRadius:'5px',
        borderWidth:'thin',
        padding:"5px"
    },

    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        minHeight: "50vh",
        minWidth: "50vw"
    },
})