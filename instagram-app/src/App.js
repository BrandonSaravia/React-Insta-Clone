import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/search'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}
export default App;
