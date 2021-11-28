import { height } from '@mui/system'
import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    container:{
        cursor: "pointer",
        width: "80%",
        margin: "auto",
        backgroundColor: "#f5f5f5",
        marginTop: "2%",
    },

    Block_Background:{
        width:"70%",
        height:'70px',
        backgroundColor: "#f5f5f5",
        marginLeft: '15%',
        marginRight: '15%',
    },
    gray_box:{
        height:'70px',
        backgroundColor:'#cfcfcf',
    
        fontSize:'30px'
        
    },
    white_box:{
        height:'70px',
        backgroundColor:'#ededed',
        fontSize:'30px'
    },


})