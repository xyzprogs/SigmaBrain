import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles(
    {
        userCardContainer:{
            display: "flex",
            cursor: "pointer"
        },

        userName:{
            marginLeft: "10%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    }
)