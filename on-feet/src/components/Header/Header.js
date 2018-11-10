import React, { Component } from 'react';
import './Header.css';
// Props:
//
// Component Function:
// - Shows logo
// - Search box filters preview image based on name and tags in real time
import logo from '../../assets/of-logo-01.svg';
class Header extends Component {
  render(){
    return(
      <div>
        <img src={logo} class="logo"/>
        <input/>
      </div>

    );
  }
}

export default Header;
