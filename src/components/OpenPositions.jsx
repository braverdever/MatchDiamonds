import React from 'react';

function OpenPositions() {
  const positions = [
    { id: 1, pair: 'BTC/USDT', entry: 45000, current: 46000, pnl: '+2.22%' },
    { id: 2, pair: 'ETH/USDT', entry: 2800, current: 2750, pnl: '-1.79%' },
  ];

  return (
    <div className="positions-container">
      <h2>Open Positions</h2>
      <div className="positions-list">
        {positions.map(position => (
          <div key={position.id} className="position-card">
            <h3>{position.pair}</h3>
            <div className="position-details">
              <p>Entry: ${position.entry}</p>
              <p>Current: ${position.current}</p>
              <p className={position.pnl.startsWith('+') ? 'profit' : 'loss'}>
                {position.pnl}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenPositions; 