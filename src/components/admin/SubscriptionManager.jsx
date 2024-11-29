import React, { useState } from 'react';
import '../../styles/admin/subscriptionManager.css';

function SubscriptionManager() {
  const [subscriptions] = useState([
    {
      id: 1,
      plan: 'Basic',
      price: 49.99,
      period: 'Monthly',
      features: ['Full Bot Access', 'Basic Signals', '1 Exchange Connection'],
      active: true
    },
    {
      id: 2,
      plan: 'Premium',
      price: 129.99,
      period: 'Quarterly',
      features: ['Full Bot Access', 'Premium Signals', '3 Exchange Connections', 'Priority Support'],
      active: true
    }
  ]);

  return (
    <div className="subscription-manager">
      {subscriptions.map(sub => (
        <div key={sub.id} className="subscription-card">
          <div className="subscription-header">
            <h3>{sub.plan}</h3>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked={sub.active} />
              <span className="slider"></span>
            </label>
          </div>
          
          <div className="price-tag">
            ${sub.price}
            <span className="period">/{sub.period}</span>
          </div>
          
          <ul className="feature-list">
            {sub.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <div className="subscription-actions">
            <button className="edit-btn">Edit Plan</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionManager; 