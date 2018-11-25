import React, { Component } from 'react';

class ModalManager extends Component {
  constructor(props) {
    super(props);
    this.state = {activeModal: null};
  }

  triggerModal(modal){
      this.setState({
        activeModal: modal
      });
  }

  render(){
    return(
      switch (this.state.activeModal) {
        case 'ABOUT':
          return <AboutModal {..props}/>;

        case 'SUPPORT':
          return <SupportModal {..props}/>;

        case 'IMAGE':
          return <ImageModal {..props}/>;

        default:
          return null;
      }
    );
  }
}
