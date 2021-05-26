import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Provider
} from 'react-redux'
import store from './store'
import '@/assets/css/base.css'
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
      </React.StrictMode>
  </Provider > ,
  document.getElementById('root')
);

