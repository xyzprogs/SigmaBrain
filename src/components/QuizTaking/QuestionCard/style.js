import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({
    questionCardContainer: {
        width: '30vw',
        textAlign: 'left',
        color: 'white',
        backgroundColor: '#292b2c'
    },

    titleFont: {
        fontSize: '50px'
    },

    quizTextFont: {
        fontSize: '25px'
    },

    buttonMargin: {
        width: '28vw',
        marginLeft: '2px',
        fontSize: '20px',
        marginTop: `10px`,
        fontWeight: 'bold',
        fontFamily: 'Arial'
       
    },

    image: {
        maxHeight: '300px'

    }
})