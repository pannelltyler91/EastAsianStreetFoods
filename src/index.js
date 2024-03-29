import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart'
import menuReducer from './features/menu'
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore({
  reducer:{
    cart:cartReducer,
    menu:menuReducer,
  }
})



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
