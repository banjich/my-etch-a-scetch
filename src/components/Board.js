import React from 'react';
import Square from './Square';

const Board = ({ size, color }) => {
  const boardStyle = {
    display: 'inline-grid',
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    maxWidth: '660px',
    maxHeight: '660px',
    margin: 'auto',
    border: '4px solid #C21010 ',
  };
  const getDimension = Math.round(300 / size);
  const squares = [];
  for (let i = 0; i < size * size; i++) {
    squares.push(<Square key={i} getDimension={getDimension} color={color} />);
  }
  return (
    <div>
      <div className='board' style={boardStyle}>
        {squares}
      </div>
    </div>
  );
};

export default Board;
