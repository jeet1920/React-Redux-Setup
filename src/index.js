import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from '../src/redux/configuration/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("store",store)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
