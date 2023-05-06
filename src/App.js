import React, { useState } from 'react';
import './App.css';

const Board = ({ onClick, squares, winningSquares }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square 
          key={index} 
          value={value} 
          isWinningSquare={winningSquares && winningSquares.includes(index)}
          onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

const Square = ({ value, onClick, isWinningSquare }) => {
  const className = isWinningSquare ? 'square winning-square' : 'square';
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] }; // Return the winning squares' indices
    }
  }
  return { winner: null, winningSquares: [] };
};

const isBoardFull = (squares) => {
  return squares.every((square) => square !== null);
};

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares).winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const playAgain = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };  

  const { winner, winningSquares } = calculateWinner(squares); // Destructure the returned object
  const isGameOver = winner || isBoardFull(squares);
  const status = winner
    ? `Winner: ${winner}`
    : isGameOver
    ? "It's a draw!"
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board onClick={handleClick} squares={squares} winningSquares={winningSquares} />      
      <div className="status">{status}</div>
      {isGameOver && <button className="play-again" onClick={playAgain}>Play again</button>}
      <footer>
        <p>Created by Debprakash Patnaik</p>
        <p>Copyright 2023-2024</p>
      </footer>      
    </div>
  );
};

export default App;
