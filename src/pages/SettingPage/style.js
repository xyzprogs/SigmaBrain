import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    container: {
        marginTop: "50px"
    },
    text_input:{ //or your class 
        width: "30%",
        display: "inline-block",
        marginRight:"20px" // to set some margin in the right
     },

     inputField:{
        display: "inline-block",
        width: "130px"
     },

     nameField:{
         display: "inline-block",
         width: "150px"
     },

     btn:{
         cursor: "pointer"
     },

     changePasswordContainer:{
         width: "50vw",
         margin: "auto"
     },
     
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
})