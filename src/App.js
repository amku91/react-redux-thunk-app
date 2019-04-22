import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**redux libs */
import { Provider } from 'react-redux';
import rootStore from './store';

class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
      </Provider>
    );
  }
}

export default App;
