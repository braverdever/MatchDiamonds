import React from 'react';
import UserManagement from '../components/admin/UserManagement';
import WebhookSetup from '../components/admin/WebhookSetup';
import SubscriptionManager from '../components/admin/SubscriptionManager';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      
      <div className="admin-grid">
        <div className="admin-section">
          <h2>User Management</h2>
          <UserManagement />
        </div>
        
        <div className="admin-section">
          <h2>TradingView Webhook</h2>
          <WebhookSetup />
        </div>
        
        <div className="admin-section">
          <h2>Subscriptions</h2>
          <SubscriptionManager />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel; 