import React from 'react';

function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-grid">
        <div className="settings-section">
          <h2>Trading Preferences</h2>
          <div className="settings-card">
            <div className="setting-item">
              <label>Risk Level</label>
              <select defaultValue="medium">
                <option value="low">Conservative</option>
                <option value="medium">Moderate</option>
                <option value="high">Aggressive</option>
              </select>
            </div>
            
            <div className="setting-item">
              <label>Maximum Position Size</label>
              <input type="number" defaultValue="1000" />
            </div>
            
            <div className="setting-item">
              <label>Stop Loss (%)</label>
              <input type="number" defaultValue="2" />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notifications</h2>
          <div className="settings-card">
            <div className="setting-item">
              <label>Trade Alerts</label>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            
            <div className="setting-item">
              <label>Price Alerts</label>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings; 