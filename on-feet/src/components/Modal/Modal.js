import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component{

  // function handleBackgroundClick(e) {
  //   if (e.target === e.currentTarget) props.hideModal();
  // }

  render(){
    return(
      <div class="modal">
      {props.children}
     </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Modal
