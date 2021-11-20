import { createUseStyles } from 'react-jss'
export const useStyles = createUseStyles({
    sideBarContainer: {
        borderStyle: "solid",
        borderWidth: "0px 1px 0px 0px",
        height: "100vh",
        width: "8vw",
        // marginTop: "50px",
        position: "fixed",
    },

    sideBarSelection: {
        borderStyle: "solid",
        borderWidth: "0px 0px 1px 0px",
    },

    sideBarSelect: {
        paddingTop: "10px",
        paddingLeft:"17px",
        textAlign:"left",
        lineHeight:"200%"
    },

    subscriptionTop: {
        textAlign: "left",
        paddingTop: "10px",
    },
    image_setting:{
        width:'19px',
    }

})