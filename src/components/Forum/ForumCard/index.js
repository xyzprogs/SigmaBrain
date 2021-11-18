import React from 'react';
import { useStyles } from './style';
import BODY from '../../../constant/body';
const ForumCard = ({post}) => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
        <div className={classes.Block_Background}>
            <table>
                <thead>
                    <tr>
                        <td width="10%">
                            {post[BODY.POSTTITLE]}
                        </td>
                        <td width="30%">
                            {post[BODY.CREATIONTIME]}
                        </td>
                    </tr>
                </thead>
            </table>
            <hr size="2" width="70%" color="black"/> 
        </div>
        </div>
    )
}
export default ForumCard