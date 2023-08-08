import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';




ReactDOM.render((
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
), document.getElementById('root'));


reportWebVitals();