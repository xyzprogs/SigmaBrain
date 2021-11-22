import { createUseStyles } from "react-jss"
import { makeStyles } from '@material-ui/core/styles'

export const useMuiStyles = makeStyles((theme) => ({
    liked: {
      // to make a red delete button
      color: theme.palette.getContrastText(theme.palette.error.main),
      background: theme.palette.error.main,
    }
  }));

export const useStyles = createUseStyles({
    
    boxContainer: {
        backgroundColor: "white",
        minHeight: "50vh",
        maxWidth: "80vw",
        margin: "auto",
    },
    imgSize:{
        width:"100%",
        height: "50vh"
    },
    cardSize:{
        width: "50%",
        height: "50%",
        margin: "auto",
    },
    cardContainer:{
        maxWidth: "80%",
        maxHeight: "30%",
        backgroundColor: "white",
        margin: "auto"
    },
    title: {
        marginRight: "100%",
        whiteSpace: "nowrap",
    },
    subtitle: {
        marginRight: "100%",
        whiteSpace: "nowrap",
    },
    
    liked:{

    },

    buttonBar:{
        display: "flex",
        marginTop: "5%"
    },

    buttonMargin:{
        marginRight: "2.5%",
        cursor: "pointer"
    },


    

})