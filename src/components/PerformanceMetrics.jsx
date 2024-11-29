import React from 'react';

function PerformanceMetrics() {
  return (
    <div className="metrics-container">
      <h2 className="section-title">Performance Metrics</h2>
      <div className="metrics-grid">
        <div className="metric-card">
          <span className="metric-label">Win Rate</span>
          <span className="metric-value">76%</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Avg. Trade</span>
          <span className="metric-value">$123.45</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Total Trades</span>
          <span className="metric-value">156</span>
        </div>
      </div>
    </div>
  );
}

export default PerformanceMetrics; 