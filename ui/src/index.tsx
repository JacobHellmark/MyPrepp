import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

fetch("/config.json", {
  method: "GET"
}).then(r => r.json()).then(data => localStorage.setItem("apiUrl", data.apiUrl))

root.render(
    <>
      <App />
    </>

);
 


