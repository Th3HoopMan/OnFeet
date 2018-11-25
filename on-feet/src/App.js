import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import store from './store/store';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div>
        <Header/>
        <Footer/>
      </div>
      </Provider>
    );
  }
}

export default App;
