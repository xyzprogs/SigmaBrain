import { createUseStyles } from 'react-jss'

const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

export const useStyles = createUseStyles({
    pageContainer: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: '#DCDCDC'
    },

    header:{
        gridArea: "header"
    },

    quizContainer: {
        ...flexCenter,
        marginTop: '50px',

    },

    sidebar:{
        gridArea: "sidebar",
    }


})
