import { createUseStyles } from 'react-jss'
const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
export const useStyles = createUseStyles({
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