import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
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

    subSection:{
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
    },

    subTitle:{
        textAlign: "left",
        paddingLeft: "1%",
        fontSize: "20px"
        // fontFamily: "Serif"
    },

    questionNameField: {
        width: "40vw"
    },

    delete: {
        paddingLeft: "1%",
        cursor: "default"
    }
})