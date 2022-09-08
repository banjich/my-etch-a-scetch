import React from 'react';

const Square = ({ getDimension, color }) => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  const onMousseOver = (e) => {
    if (color === 'black') {
      e.target.style.backgroundColor = color;
    } else e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };
  const squareStyle = {
    margin: 'auto',
    width: getDimension,
    height: getDimension,
    backgroundColor: 'white',
    border: '1px solid black',
  };
  return (
    <div className='squares'>
      <div
        className='square'
        style={squareStyle}
        onMouseOver={onMousseOver}
      ></div>
    </div>
  );
};

export default Square;
