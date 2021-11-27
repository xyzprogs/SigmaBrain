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

    container: {
        display: "flex"
    },

    deleteBtn: {
        cursor: "pointer",
        paddingLeft: "10px",
        color: "red"
    }
})