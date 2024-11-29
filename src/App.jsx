import React, { useEffect } from 'react';
import { WebApp } from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready();
    // Set the header color
    WebApp.setHeaderColor('#2196f3');
    // Enable closing confirmation
    WebApp.enableClosingConfirmation();
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 