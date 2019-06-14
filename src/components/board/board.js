import React, { Component } from 'react';
import BoardPosition from './board-position/board-position';
import './board.css';

class Board extends Component {
  render() {
    return (
      <section className="board">
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
    );
  }
}

export default Board;
