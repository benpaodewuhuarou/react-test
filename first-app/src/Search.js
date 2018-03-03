import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <div>
          <label>what music do you want to search</label>
          <input placeholder="song name....." />
        </div>
        <button type="submit" className="btn btn-primary">
          Search{' '}
        </button>
      </form>
    );
  }
}

export default Search;
