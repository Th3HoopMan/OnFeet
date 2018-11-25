import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalActions';

import './Footer.css'

import AboutModal from '../Modals/AboutModal/AboutModal';
import SupportModal from '../Modals/SupportModal/SupportModal';

// Props:
//
// Component Function:
// - About Overlay
// - Support Overlay


class Footer extends Component {

  openAbout = () => {
    this.props.toggleModal("ABOUT");
  }

  openSupport = () => {
    this.props.toggleModal("SUPPORT");
  }

  render(){
    return (
      <div className="main">
        <p onClick={this.openAbout}>about.</p>
        <p onClick={this.openSupport}>support.</p>
        <SupportModal/>
        <h1>{this.props.modal}</h1>
      </div>
    );
  }
}

Footer.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    modal: PropTypes.string.isRequired,
    isHidden: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal.modal,
    isHidden: state.isHidden
});

export default connect(mapStateToProps, { toggleModal })(Footer);
