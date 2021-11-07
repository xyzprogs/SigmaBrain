import { createUseStyles } from 'react-jss'
// import background from './spirit.jpeg'
export const useStyles = createUseStyles({
    bannerContainer: {
        marginTop: "50px",
        borderStyle: "solid",
        height: "25vh",
        // backgroundImage: `url(${background})`,
    },

    imgTag: {
        display: "none"
    },

    imgSize:{
        width:"100%",
        height: "100%"
    },

    uploadBtn:{
        position: "absolute",
        left: "50%",
    },


})
