import React, { Component } from 'react';

// Props:
//
// Component Function:
// - Shows logo
// - Search box filters preview image based on name and tags in real time
import logo from '../assets/of-logo-01.svg';
class Header extends Component {
  render(){
    return(
      <img src={logo}/>
      //search bar
    );
  }
}

export default Header;
