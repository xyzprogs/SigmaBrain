import React from 'react';
import { useStyles } from './style';
import { ClassNames } from '@emotion/react';

const Category = () => {
    const classes = useStyles()
    return(
        <div>
        <div className={classes.Block_Background}>
            <table>
                <tr>
                    <td>
                        <div className={classes.gray_box}>
                            FORUM&nbsp;&nbsp;   
                        </div>
                    </td>
                    <td>
                        <div className={classes.white_box}>
                              IMAGE&nbsp;&nbsp;   
                        </div>
                    </td>
                    <td>
                        <div className={classes.white_box}>
                              TOP&nbsp;&nbsp;   
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        </div>
    )
}
export default Category