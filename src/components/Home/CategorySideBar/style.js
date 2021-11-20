import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    fixOnRight: {
        position: "fixed",
        right: 20,
        top: "25%",
        minHeight: "50vh",
        border: "solid",
    },

    item: {
        cursor: "pointer"
        borderRadius:'25px',
        borderWidth:'thin',
        lineHeight:"200%"
    }

    
})