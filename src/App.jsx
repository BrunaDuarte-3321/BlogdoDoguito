import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/base/base.css';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
