import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import PropTypes from 'prop-types';

import store from './store/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalManager from './components/ModalManager/ModalManager';

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div>
        <Header/>
        <Footer/>
        <ModalManager/>
      </div>
      </Provider>
    );
  }
}

export default App;
