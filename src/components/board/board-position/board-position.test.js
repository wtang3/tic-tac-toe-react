import React from 'react';
import ReactDOM from 'react-dom';
import BoardPosition from './board-position';
import Position from './position';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const position = new Position('x');
  ReactDOM.render(<BoardPosition piece={position} />, div);
});
