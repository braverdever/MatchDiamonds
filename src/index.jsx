import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.css';
import App from './App';

// Check if running inside Telegram WebApp
const isTelegramWebApp = window.Telegram?.WebApp;

if (!isTelegramWebApp) {
  document.body.innerHTML = '<h1>Please open this app through Telegram.</h1>';
} else {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} 