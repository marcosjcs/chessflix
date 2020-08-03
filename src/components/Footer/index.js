import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/chessflix.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="Chess Flix Logo"/>
      </Link>
      <p>
        Criado por
        {' '}
        <a href="http://github.com/marcosjcs">
          Marcos Serra
        </a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
