import React from 'react'
import { useStyles } from './style'
import NavBar from '../../components/NavBar/index'
import SideBar from '../../components/Home/SideBar/index'
import Button from '@restart/ui/esm/Button'

const QuizManagement = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Quiz Management</div>
                <Button className={classes.back}>Back</Button>
            </div>
            <div className={classes.quizContainer}>
                <div className={classes.quizimg}>Filter</div>
                <p><Button>Create quiz</Button>
                <Button>delete</Button></p>
            </div>
            <table cellspacing="0" rule="all" border ="1" id="quizzes">
                <tr>
                    <th className={classes.cell}><input type="checkbox"/>All</th>
                    <th className={classes.cell}></th>
                    <th className={classes.cell}>Statue</th>
                    <th className={classes.cell}>Date</th>
                    <th className={classes.cell}>View</th>
                    <th className={classes.cell}>Comment</th>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Quiz 1</td>
                    <td>published</td>
                    <td>Oct/29/2019</td>
                    <td>291</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Quiz 2</td>
                    <td>published</td>
                    <td>Oct/29/2019</td>
                    <td>291</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Quiz 3</td>
                    <td>published</td>
                    <td>Oct/29/2019</td>
                    <td>291</td>
                    <td>2</td>
                </tr>

                        
                    </table>
            <div className={classes.quizContainer}>
                <Button className={classes.back}>Back</Button>
            </div>
            
        </div>
        )
}
export default QuizManagement;