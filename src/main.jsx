import React from 'react'

// After installing #npm install react-router-dom; to impliment routing functionality
//import reportWebVitals from './reportWebVitals';
import  ReactDOM from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
