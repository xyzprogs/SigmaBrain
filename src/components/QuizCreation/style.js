import { createUseStyles } from "react-jss";

export const userStyles = createUseStyles({
    creationCardContainer: {
        width: '50vw',
        display:' flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },

    creationCardTitleSize: {
        fontSize: '30px'
    },

    inputContainer: {
        display: 'flex',
        textAlign: "center",
        color: "black",
        border: '0px',
        fontSize: '25px',
        backgroundColor: "white",
        marginTop: '5px',
        marginBottom: '3px',
        flexWrap: 'flexwrap',

    },

    imageContainer: {
        width: '220px',
        height: '220px',
        marginTop: '20px',
        objectFit: 'cover'
    },

    
})