import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-8">One of three columns </div>{' '}
          <div className="col-sm-2">One of three columns </div>{' '}
          <div className="col-sm-2">One of three columns </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default App;
