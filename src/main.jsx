import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.sass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Product } from './pages/Product';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Products />} />
          <Route path="produto/:id" element={<Product />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
