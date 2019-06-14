import React, { Component } from 'react';
import BoardPosition from './board-position/board-position';
import './board.css';

class Board extends Component {
  render() {
    return (
      <main>
        <section class="board">
          <BoardPosition></BoardPosition>
          <BoardPosition></BoardPosition>
          <BoardPosition></BoardPosition>

          <BoardPosition></BoardPosition>
          <BoardPosition></BoardPosition>
          <BoardPosition></BoardPosition>

          <BoardPosition></BoardPosition>
          <BoardPosition></BoardPosition>
          <BoardPosition></BoardPosition>
        </section>
      </main>
    );
  }
}

export default Board;
