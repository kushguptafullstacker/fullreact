import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import { Provider } from 'react-redux';
import { Createstore } from './Create/Create'
import Log from './components/Log';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Createstore}>
    <Login />
    <Log/>
  </Provider>
);
