import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './UserRelated/Login';
import SignUp from './UserRelated/SignUp';
import PrivetRouter from './PrivetRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

fetch("/config.json", {
  method: "GET"
}).then(r => r.json()).then(data => localStorage.setItem("apiUrl", data.apiUrl));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={ <PrivetRouter /> }> // this is a protected route
        <Route path="/" element={ <App /> }></Route>
      </Route>

      <Route path="/Login" element={ <Login /> }></Route>
      <Route path="/SignUp" element={ <SignUp /> }></Route>

    </Routes>
  </BrowserRouter>

);



