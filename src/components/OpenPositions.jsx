import React from 'react';

function OpenPositions() {
  const positions = [
    { id: 1, pair: 'BTC/USDT', entry: 45000, current: 46000, pnl: '+2.22%' },
    { id: 2, pair: 'ETH/USDT', entry: 2800, current: 2750, pnl: '-1.79%' },
  ];

  return (
    <div className="positions-container">
      <h2 className="section-title">Open Positions</h2>
      <div className="positions-list">
        {positions.map(position => (
          <div key={position.id} className="position-card">
            <h3 className="pair-title">{position.pair}</h3>
            <div className="position-details">
              <div className="detail-item">
                <span className="label">Entry:</span>
                <span className="value">${position.entry.toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span className="label">Current:</span>
                <span className="value">${position.current.toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span className="label">PNL:</span>
                <span className={`value ${position.pnl.startsWith('+') ? 'profit' : 'loss'}`}>
                  {position.pnl}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenPositions; 