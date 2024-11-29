import React, { useState } from 'react';
import '../../styles/admin/webhookSetup.css';

function WebhookSetup() {
  const [webhooks] = useState([
    { id: 1, name: 'TradingView Alert 1', endpoint: '/webhook/tv1', status: 'Active' },
    { id: 2, name: 'Price Alert', endpoint: '/webhook/price', status: 'Inactive' },
  ]);

  return (
    <div className="webhook-setup">
      <div className="webhook-form">
        <div className="form-group">
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder="Webhook Name" 
              className="webhook-input" 
            />
            <input 
              type="text" 
              placeholder="Endpoint URL" 
              className="webhook-input" 
            />
          </div>
          <button className="webhook-btn">Add Webhook</button>
        </div>
      </div>

      <div className="webhook-list">
        {webhooks.map(webhook => (
          <div key={webhook.id} className="webhook-item">
            <div className="webhook-info">
              <div className="webhook-header">
                <h3>{webhook.name}</h3>
                <span className={`status-badge ${webhook.status.toLowerCase()}`}>
                  {webhook.status}
                </span>
              </div>
              <div className="webhook-url-row">
                <p className="endpoint">{webhook.endpoint}</p>
                <div className="webhook-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebhookSetup; 