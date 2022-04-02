import React from 'react';
import imagem from '../../img/doguito.svg';
import '../../css/componentes/cabecalho.css';
const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone"></span>
      </div>
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img src={imagem} alt="Logo Doguito" className="cabecalho__logo" />
          <h1 className="cabecalho__titulo">PetShop</h1>
        </a>
      </div>
      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <a href="#" className="menu-item menu-item--entrar">
              Entrar
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Produtos
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              Blog
            </a>
          </li>
          <li>
            <a href="/sobre" className="menu-item">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};

export default Cabecalho;