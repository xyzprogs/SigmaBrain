import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({
    questionCardContainer: {
        width: '31vw',
        textAlign: 'left',
        color: 'white',
        backgroundColor: '#FFFFFF',
        borderRadius: "10px",
        marginTop:"60px"
    },

    titleFont: {
        fontSize: '35px',
        color:"#000000",
    },

    quizTextFont: {
        fontSize: '25px',
        color:"#000000",
    },

    buttonMargin: {
        width: '28vw',
        marginLeft: '2px',
        fontSize: '20px',
        marginTop: `10px`,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        borderRadius: '20px',
        color:"black",
        backgroundColor:"#EBEBEB",
    },
    nextButton:{
        width: '28vw',
        marginLeft: '2px',
        fontSize: '20px',
        marginTop: `10px`,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        borderRadius: '20px',
        color:"white",
        backgroundColor:"#417CA2",
    },
    previousButton:{
        width: '28vw',
        marginLeft: '2px',
        fontSize: '20px',
        marginTop: `10px`,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        borderRadius: '20px',
        color:"white",
        backgroundColor:"#9E9E9E",
    },


    image: {
        maxHeight: '300px'

    }
})