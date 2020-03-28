import React from 'react';
import classes from './WhatIDo.module.css'
const whatIDo = () => {
    return(
        <div className={classes.whatIdo_box} >
            <section id="whatIDo" className={classes.id_whatIDo}></section>
            <div className={classes.center}>
                <p> I create games for Android & Nintendo Switch platforms using Unity3D. I also focus on developing mobile applications for Android in Java and Kotlin.</p>
                <h1>What I Do</h1>
            </div>
        </div>
    )
}

export default whatIDo;