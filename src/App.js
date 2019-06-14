import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <img src={logo} className="app-logo" alt="logo" />
          <h2>React tic-tac-toe tutorial</h2>
        </header>
      </main>
    );
  }
}

export default App;
