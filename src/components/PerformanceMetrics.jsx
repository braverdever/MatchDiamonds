import React from 'react';

function PerformanceMetrics() {
  return (
    <div className="metrics-container">
      <h2>Performance Metrics</h2>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Win Rate</h3>
          <p>76%</p>
        </div>
        <div className="metric-card">
          <h3>Avg. Trade</h3>
          <p>$123.45</p>
        </div>
        <div className="metric-card">
          <h3>Total Trades</h3>
          <p>156</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceMetrics; 