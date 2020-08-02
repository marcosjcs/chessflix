import React from 'react';
import Default from '../../pages/Default'
import TicTacToe from '../../components/Tic-tac-toe/src/index';

export default function Error_404(){
  return (
    <Default>
      <span>Página não encontrada!</span>
      <TicTacToe />
    </Default>
  )
}