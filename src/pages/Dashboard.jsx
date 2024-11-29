import React from 'react';
import PerformanceMetrics from '../components/PerformanceMetrics';
import OpenPositions from '../components/OpenPositions';
import ProfitChart from '../components/ProfitChart';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Trading Dashboard</h1>
        <div className="quick-stats">
          <div className="stat-card">
            <h3>Total Profit</h3>
            <p className="profit">+$1,234.56</p>
          </div>
          <div className="stat-card">
            <h3>Active Trades</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Win Rate</h3>
            <p>76%</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-grid">
        <ProfitChart />
        <OpenPositions />
        <PerformanceMetrics />
      </div>
    </div>
  );
}

export default Dashboard; 