import React from 'react';
import { Link } from 'react-router-dom';
import Default from '../../../pages/Default'
export default function AddVideo(){
  return (      
    <Default>
        <h1>Cadastro de Vídeo</h1>
        <Link to="/add/category">
          Nova Categoria
        </Link>
    </Default>      
  )
};