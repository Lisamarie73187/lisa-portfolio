import React, { Component } from 'react';
import './App.css';
import Hero from './screens/Hero';
import Header from './screens/Header';
import Projects from './screens/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Projects/>
      </div>
    );
  }
}

export default App;
