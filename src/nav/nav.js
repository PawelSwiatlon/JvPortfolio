import React from 'react';
import classes from './nav.module.css'
const test = {
    'color':'lime'
}
let n = 1
const nav = (props) => {
    if(props.onScroll > 2400 ){
        n = 5
    }else if(props.onScroll > 1600){
        n = 4
    }else if(props.onScroll > 1200){
        n = 3
    }else if(props.onScroll > 600){
        n = 2
    } else { 
        n = 1
    }
    
    return(
        <div className={classes.nav}> 
            <p className={classes.nav_logo}><i className="fa fa-user-circle-o"></i> Iwona Moryc</p>
            <section>
                <a href="#baner">
                    <p style={n===1 ? test:null}>
                        <i className="fa fa-bank"></i> Intro
                    </p>
                </a>
                <a href="#whatIDo">
                    <p style={n===2 ? test:null}>
                        <i className="fa fa-tv"></i> What I Do
                    </p>
                </a>
                <a href="#whoIAm">
                     <p style={n===3 ? test:null}>
                        <i className="fa fa-vcard-o"></i> Who I Am
                    </p>
                </a>
                <a href="#myWork">
                    <p style={n===4 ? test:null}>
                        <i className="fa fa-suitcase"></i> My Work
                    </p>
                </a>
                <a href="#contact">
                    <p style={n===5 ? test:null}>
                        <i className="fa fa-send-o"></i> Contact
                    </p>
                </a>
            </section>
        </div>
    )
}

export default nav;