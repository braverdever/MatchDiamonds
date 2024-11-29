import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://t.me/yourbotchannel" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://twitter.com/yourbot" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 