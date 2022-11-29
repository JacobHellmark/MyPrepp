import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

fetch("/config.json", {
  method: "GET"
}).then(r => r.json()).then(data => localStorage.setItem("apiUrl", data.apiUrl));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> }></Route>
      <Route path="/Login" element={ <Login /> }></Route>
    </Routes>
  </BrowserRouter>

);



