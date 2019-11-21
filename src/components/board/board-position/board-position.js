import React, { Component } from 'react';
import './board-position.css';

class BoardPosition extends Component {
  render() {
    const piece = this.props.piece.getValue() != null ? this.props.piece.getValue() : '';
    return (
      <div onClick={this.props.onClick} className="board-position"> {piece} </div>
    );
  }
}

export default BoardPosition;
