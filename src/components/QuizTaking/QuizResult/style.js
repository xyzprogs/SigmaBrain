import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({

    congratualtionCardContainer: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#5bc0de',
        marginBlock: '10px'
    },

    resultCorrectCardContainer: {
        width: '30vw',
        textAlign: 'center',
        color: 'black',
        backgroundColor: '#5cb85c',
        marginBlock: '10px'
    },

    resultWrongtCardContainer: {
        width: '30vw',
        textAlign: 'center',
        color: 'black',
        backgroundColor: '#d9534f',
        marginBlock: '10px'
    },

    titleFont: {
        fontSize: '50px'
    },

    quizTextFont: {
        fontSize: '25px'
    },

    buttonMargin: {
        margin: '5px',
       
    },

    image: {
        maxHeight: '300px'

    }
})