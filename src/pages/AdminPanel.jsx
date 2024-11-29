import React from 'react';
import UserManagement from '../components/admin/UserManagement';
import WebhookSetup from '../components/admin/WebhookSetup';
import SubscriptionManager from '../components/admin/SubscriptionManager';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      
      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="admin-stat-card">
          <h3>Active Subscriptions</h3>
          <p>892</p>
        </div>
        <div className="admin-stat-card">
          <h3>Revenue</h3>
          <p>$12,345</p>
        </div>
      </div>
      
      <div className="admin-grid">
        <div className="admin-section">
          <div className="section-header">
            <h2>User Management</h2>
            <button className="admin-action-btn">Add User</button>
          </div>
          <UserManagement />
        </div>
        
        <div className="admin-section">
          <div className="section-header">
            <h2>TradingView Webhook</h2>
          </div>
          <WebhookSetup />
        </div>
        
        <div className="admin-section">
          <div className="section-header">
            <h2>Subscriptions</h2>
            <button className="admin-action-btn">Manage Plans</button>
          </div>
          <SubscriptionManager />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel; 