import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => (
    
    squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
    ))
    
)    

export default Board;
