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
      <h2 className="chart-title">Profit History</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <Tooltip 
              contentStyle={{ 
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProfitChart; 