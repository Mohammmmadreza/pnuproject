import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
 < BrowserRouter>
 <App />
 </BrowserRouter>,
  document.getElementById('root')
);
