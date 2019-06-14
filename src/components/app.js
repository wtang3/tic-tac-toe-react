import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Board from './board/board';
import './app.css';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <img src={logo} className="app-logo" alt="logo" />
          <h2>React tic-tac-toe tutorial</h2>
        </header>
        <section>
          <Board />
        </section>
      </main>
    );
  }
}

export default App;
