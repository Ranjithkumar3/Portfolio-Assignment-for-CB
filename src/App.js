import React, { Component } from 'react';
import './App.css';
import Aboutme from './components/aboutme';
import Skills from './components/skills';
import Contact from './components/contact';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Ranjith's Portfolio</h1>
        <Aboutme />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
