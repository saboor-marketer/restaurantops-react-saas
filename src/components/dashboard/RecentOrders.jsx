import React, { useState } from 'react';
import StatusBadge from '../common/StatusBadge';

const RecentOrders = ({ ordersData }) => {
  const [filter, setFilter] = useState('daily');
  const [searchTerm, setSearchTerm] = useState('');

  const currentOrders = ordersData[filter] || [];
  
  const filteredOrders = currentOrders.filter(order =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card orders-card">
      <div className="orders-card-header">
        <h2 className="orders-card-title">Recent Orders</h2>
        <div className="orders-filter">
          <button
            className={`orders-filter-btn ${filter === 'daily' ? 'active' : ''}`}
            onClick={() => setFilter('daily')}
          >
            Daily
          </button>
          <button
            className={`orders-filter-btn ${filter === 'weekly' ? 'active' : ''}`}
            onClick={() => setFilter('weekly')}
          >
            Weekly
          </button>
          <button
            className={`orders-filter-btn ${filter === 'monthly' ? 'active' : ''}`}
            onClick={() => setFilter('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="search-wrapper mb-3">
        <i className="bi bi-search"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Name</th>
              <th>Time</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.time}</td>
                <td>{order.amount}</td>
                <td>
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
