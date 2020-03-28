import React from 'react';
import classes from './MyWork.module.css'
import a from '../img/mrwork/01.jpg'
import b from '../img/mrwork/02.jpg'
import c from '../img/mrwork/03.jpg'
import d from '../img/mrwork/04.jpg'
import e from '../img/mrwork/05.jpg'
import f from '../img/mrwork/06.jpg'

const myWork = () => {
    return(
        <div className={classes.myWork_box} id="myWork">
            <section>
                <div className={classes.myWork_item}>
                    <img src={a} alt="error img"/>
                </div>
                <div className={classes.myWork_item}>
                    <img src={b} alt="error img"/>
                </div>
                <div className={classes.myWork_item}>
                    <img src={c} alt="error img"/>
                </div>
                <div className={classes.myWork_item}>
                    <img src={d} alt="error img"/>
                </div>
                <div className={classes.myWork_item}>
                    <img src={e} alt="error img"/>
                </div>
                <div className={classes.myWork_item}>
                    <img src={f} alt="error img"/>
                </div>
            </section>
        </div>
    )
}

export default myWork;