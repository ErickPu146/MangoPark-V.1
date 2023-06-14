import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Inicio } from './containers/inicio/inicio';
import { Historia } from './containers/historia/historia';
import { Zoologicos } from './containers/zoologicos/zoologicos';
import { Animales } from './containers/animales/animales';
import { Tienda } from './containers/tienda/tienda';
import { Contactos } from './containers/contactos/contactos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/zoologicos" element={<Zoologicos />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
