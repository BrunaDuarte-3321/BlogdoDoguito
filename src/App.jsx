import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/base/base.css';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Posts from './paginas/Posts';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './assets/css/componentes/Cabecalho';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<Pagina404 />}></Route>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
