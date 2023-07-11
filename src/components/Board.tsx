// Board.tsx
import React from 'react';
import Cell from './Cell';

interface BoardProps {
  board: string[][];
  onClick: (column: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, columnIndex) => (
            <Cell
              key={columnIndex}
              value={cell}
              onClick={() => onClick(columnIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
