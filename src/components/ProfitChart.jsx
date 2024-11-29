import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', profit: 1200 },
  { date: '2024-02', profit: 1800 },
  { date: '2024-03', profit: 1600 },
  { date: '2024-04', profit: 2400 },
];

function ProfitChart() {
  return (
    <div className="chart-container">
      <h2>Profit History</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="profit" stroke="#2196f3" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProfitChart; 