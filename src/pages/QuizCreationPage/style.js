import { createUseStyles } from 'react-jss'

const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

export const useStyles = createUseStyles({
    pageContainer: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'whitesmoke'
    },

    header:{
        gridArea: "header"
    },

    quizContainer: {
        marginTop: '50px',
        ...flexCenter
    }
})