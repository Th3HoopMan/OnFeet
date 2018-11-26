import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalActions';

import './Footer.css'

// Props:
//
// Component Function:
// - About Overlay
// - Support Overlay


class Footer extends Component {

  openAbout = () => {
    this.props.toggleModal("");
  }

  openSupport = () => {
    this.props.toggleModal("SUPPORT");
  }

  render(){
    return (
      <div className="main">
        <p onClick={this.openAbout}>about.</p>
        <p onClick={this.openSupport}>support.</p>
      </div>
    );
  }
}

Footer.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    modal: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal.modal
});

export default connect(mapStateToProps, { toggleModal })(Footer);
