import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Invoices from './components/Invoices';
import Expenses from './components/Expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/Invoices'element={<Invoices/>}/>
      <Route path='/Expenses'element={<Expenses/>}/>
    </Routes>
  </BrowserRouter>
);
