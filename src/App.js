import React, { Component } from 'react';
import './App.css';
import Hero from './screens/Hero';
import Header from './screens/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
      </div>
    );
  }
}

export default App;
