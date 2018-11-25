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
        <img src={logo} className="logo"/>
        <input className="search" placeholder="looking for something specific?"/>
      </div>

    );
  }
}

export default Header;
