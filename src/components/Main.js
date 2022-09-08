import React, { useState } from 'react';
import Board from './Board';

const Main = () => {
  const [size, setSize] = useState(50);
  const [color, setColor] = useState('black');

  const onClear = () => {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = 'white';
    }
  };

  const onReset = () => {
    let promptValue;
    do {
      promptValue = prompt(
        'How many squares per side? Please choose between 20 and 100!'
      );
      if (promptValue >= 20 && promptValue <= 100) {
        setSize(promptValue);
        setColor('black');
        onClear();
      }
    } while (
      promptValue < 16 ||
      promptValue > 100 ||
      promptValue === null ||
      promptValue % 1 !== 0
    );
  };

  return (
    <div>
      <div className='buttons'>
        <button onClick={onReset}>Reset</button>
        <button onClick={() => setColor('black')}>Black</button>
        <button onClick={() => setColor('random')}>Random</button>
        <button onClick={onClear}>Clear</button>
      </div>
      <Board size={size} color={color} />
    </div>
  );
};

export default Main;
