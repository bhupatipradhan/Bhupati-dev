import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VersionProvider } from './context/VersionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VersionProvider>
      <App />
    </VersionProvider>
  </React.StrictMode>
);


