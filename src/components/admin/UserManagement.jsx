import React, { useState } from 'react';
import '../../styles/admin/userManagement.css';

function UserManagement() {
  const [users] = useState([
    { id: 1, username: '@john_doe', plan: 'Premium', status: 'Active', joinDate: '2024-02-15' },
    { id: 2, username: '@alice_smith', plan: 'Basic', status: 'Inactive', joinDate: '2024-01-20' },
    { id: 3, username: '@bob_wilson', plan: 'Premium', status: 'Active', joinDate: '2024-03-01' },
  ]);

  return (
    <div className="user-management">
      <div className="desktop-view">
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Plan</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="user-name-cell">
                    <span>{user.username}</span>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </div>
                </td>
                <td>{user.plan}</td>
                <td>{user.joinDate}</td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-view">
        <div className="user-cards">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <div className="user-header">
                  <h3>{user.username}</h3>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </div>
                <div className="user-details">
                  <span>Plan: {user.plan}</span>
                  <span>Joined: {user.joinDate}</span>
                </div>
              </div>
              <div className="card-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserManagement; 