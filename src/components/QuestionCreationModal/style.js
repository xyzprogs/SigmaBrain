import { createUseStyles } from 'react-jss'

export const userStyles = createUseStyles({
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

    subSection:{
        border: "solid",
        width: "50vw",
        borderWidth: "0px 0px 1px 0px",
        
    },

    subTitle:{
        textAlign: "left",
        paddingLeft: "1%",
        fontSize: "20px"
        // fontFamily: "Serif"
    },

    questionNameField: {
        width: "80%",
        height:"5vh",
        marginLeft:"10px",
        marginBottom:"10px",
        fontSize:20


    },

    delete: {
        paddingLeft: "1%",
        cursor: "default"
    },
        
    errorMsg: {
        margin: '0 15px',
        fontSize: '12px',
        color: 'red',
        textAlign: 'left'
    },
    buttonPosition:{
        display:"flex",
        justifyContent:"right"
    },
    buttonstyle:{
        backgroundColor:"#9DCADB",
        color:"white",
        width:"90px",
        height:"25px",
        fontWeight:"bold",
        textAlign:"center",
        marginLeft:10,
        borderRadius:20,
        marginTop:10,
        marginBottom:10
    }
})