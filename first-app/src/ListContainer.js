import React, { Component } from 'react';

import List from './List';

class ListContainer extends Component {
  state = {
    listOfMatchingsongs: []
  };

  render() {
    return <List />;
  }
}

export default ListContainer;
