import React from 'react';

function Pricing() {
  return (
    <div className="pricing">
      <h1>Choose Your Plan</h1>
      
      <div className="pricing-grid">
        <div className="pricing-card">
          <h2>Monthly</h2>
          <p className="price">$49.99/month</p>
          <ul className="features">
            <li>Full Bot Access</li>
            <li>Basic Signals</li>
            <li>1 Exchange Connection</li>
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        
        <div className="pricing-card featured">
          <h2>Quarterly</h2>
          <p className="price">$129.99/quarter</p>
          <ul className="features">
            <li>Full Bot Access</li>
            <li>Premium Signals</li>
            <li>3 Exchange Connections</li>
            <li>Priority Support</li>
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        
        <div className="pricing-card">
          <h2>Yearly</h2>
          <p className="price">$399.99/year</p>
          <ul className="features">
            <li>Full Bot Access</li>
            <li>Premium Signals</li>
            <li>Unlimited Exchanges</li>
            <li>TradingView Integration</li>
            <li>24/7 Support</li>
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing; 