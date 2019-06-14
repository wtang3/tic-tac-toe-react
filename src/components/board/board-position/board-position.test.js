import React from 'react';
import ReactDOM from 'react-dom';
import BoardPosition from './board-position';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoardPosition />, div);
});
