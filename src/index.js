import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Website from './Website';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);

reportWebVitals();
