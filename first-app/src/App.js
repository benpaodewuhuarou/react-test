import React, { Component } from 'react';
import Search from './Search.js';
import ListContainer from './ListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-6">
            <Search />
          </div>
          <div className="col-6">
            <ListContainer />
          </div>
        </div>{' '}
      </div>
    );
  }
}

export default App;
