import React, { Component } from 'react';
import './App.css';
import Hero from './screens/Hero';
import Header from './screens/Header';
import Footer from './screens/Footer';
import ProjectContainer from "./screens/ProjectContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
          <div>
              <ProjectContainer/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
