import React from 'react'
import { useState, useEffect } from 'react';
import { useStyles } from './style'

const ExperienceBar = (props) => {
    const { bgcolor, completed } = props;
    const [bigCompleted, setBigCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setBigCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);
    const filler = {
        width: `${bigCompleted}%`,
        backgroundColor: bgcolor,
    }
    const classes = useStyles()


    return (
        <div className={classes.containerStyles}>
            <div className={classes.fillerStyles} style={filler}>
                <span className={classes.labelStyles}>{`${bigCompleted}%`}</span>
            </div>
        </div>
    )
}

export default ExperienceBar
