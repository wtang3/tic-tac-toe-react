import React, { Component } from 'react';
import BoardPosition from './board-position/board-position';
import Position from './board-position/position';
import './board.css';

class Board extends Component {
  state = {
    location: [
      new Position(null), new Position(null), new Position(null),
      new Position(null), new Position(null), new Position(null),
      new Position(null), new Position(null), new Position(null)],
    xTurn: true
  }

  getCurrentPlayer() {
    if (this.state.xTurn) {
      return 'X';
    } else {
      return 'O';
    }
  }

  toggleTurn() {
    this.setState({ xTurn: !this.state.xTurn });
  }

  setBoardPiece(index) {
    const turn = this.getCurrentPlayer();
    const copy = [...this.state.location]

    copy[index].setValue(turn);

    this.setState({ location: copy });

    this.toggleTurn();
  }

  checkGameState() {
    console.log('checking game state');
  }

  render() {
    return (
      <section className="board">
        <BoardPosition onClick={() => this.setBoardPiece(0)} piece={this.state.location[0]}></BoardPosition>
        <BoardPosition onClick={() => this.setBoardPiece(1)} piece={this.state.location[1]}></BoardPosition>
        <BoardPosition onClick={() => this.setBoardPiece(2)} piece={this.state.location[2]}></BoardPosition>

        <BoardPosition onClick={() => this.setBoardPiece(3)} piece={this.state.location[3]}></BoardPosition>
        <BoardPosition onClick={() => this.setBoardPiece(4)} piece={this.state.location[4]}></BoardPosition>
        <BoardPosition onClick={() => this.setBoardPiece(5)} piece={this.state.location[5]}></BoardPosition>

        <BoardPosition onClick={() => this.setBoardPiece(6)} piece={this.state.location[6]}></BoardPosition>
        <BoardPosition onClick={() => this.setBoardPiece(7)} piece={this.state.location[7]}></BoardPosition>
        <BoardPosition onClick={() => this.setBoardPiece(8)} piece={this.state.location[8]}></BoardPosition>


      </section>
    );
  }
}

export default Board;
