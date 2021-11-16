import React from 'react';
import { useStyles } from './style';
import { ClassNames } from '@emotion/react';

const ForumCard = () => {
    const classes = useStyles()
    return(
        <div>
        <div className={classes.Block_Background}>
            <table>
                <tr>
                    <td width="10%">
                        comment
                    </td>
                    <td width="100%">
                        description
                    </td>
                    <td width="30%">
                        date
                    </td>
                </tr>
            </table>
            <hr size="2" width="70%" color="black"/> 
        </div>
        </div>
    )
}
export default ForumCard