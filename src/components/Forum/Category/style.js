import { createUseStyles } from 'react-jss'
const flexCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
export const useStyles = createUseStyles({
    Block_Background:{
        width:"70%",
        height:'70px',
        backgroundColor: "#ededed",
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