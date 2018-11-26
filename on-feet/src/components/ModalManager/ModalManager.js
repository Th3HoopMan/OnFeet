import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalActions';

import AboutModal from '../Modals/AboutModal/AboutModal';
import SupportModal from '../Modals/SupportModal/SupportModal';

class ModalManager extends Component {
  modalManager(){
    switch (this.props.modal) {
      case 'ABOUT':
        return <AboutModal/>;

      case 'SUPPORT':
        return <SupportModal/>;
      //
      // case 'IMAGE':
      //   return <ImageModal/>;
      default:
        return null;
    }
  }

  render(){
    return(
      <div>
      {this.modalManager()}
      </div>
    );
  }
}

ModalManager.propTypes = {
    modal: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal.modal
});

export default connect(mapStateToProps)(ModalManager);
