import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Dashboard
        </Link>
        <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>
          Pricing
        </Link>
        <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
          Settings
        </Link>
        <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navigation; 