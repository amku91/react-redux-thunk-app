import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**redux libs */
import { Provider } from 'react-redux';
import configureStore from './store';

import DisplayGithubData from './containers/displayGithubData';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <DisplayGithubData />
      </Provider>
    );
  }
}

export default App;
