import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    pageContainer: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'whitesmoke',
        overflowY: "auto"
    },

    postContainer:{
        marginTop: '100px',
    }
})