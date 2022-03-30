import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './landing/landing.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ramadan from './ramadan/ramadan';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ramadan" element={<Ramadan />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('appRoot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
