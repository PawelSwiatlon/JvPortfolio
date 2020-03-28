import React, { Component } from 'react';
import Nav from './nav/nav'
import Baner from './baner/baner'
import WhatIDo from './WhatIDo/WhatIDo'
import WhoIAm from './WhoIAm/WhoIAm'
import MyWork from './MyWork/MyWork'
import Contact from './Contact/Contact'

import classes from './App.module.css';

let lastScrollY = 0;
let ticking = false;
class App extends Component {
  state = {
    lastScroll: 0, 
    test:0
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    let { clientHeight } = this.refs.myImgContainer;
    console.log(clientHeight);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.setState({lastScroll: lastScrollY})
        ticking = false;
      });
     
      ticking = true;
    }
  };

  render(){

    return (
      <div className={classes.App} ref="myImgContainer">
        <Nav onScroll={this.state.lastScroll} />
        <Baner/>
        <WhatIDo/>
        <WhoIAm/>
        <MyWork/>
        <Contact/>
      </div>
    );
  }
}

export default App;
