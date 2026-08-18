import React from 'react';

const MetricCard = ({ title, value, trend, trendDirection }) => {
  return (
    <div className="card kpi-card">
      <div className="kpi-card-header">
        <span className="kpi-card-title">{title}</span>
        <span className="kpi-card-menu">
          <i className="bi bi-three-dots"></i>
        </span>
      </div>
      <div className="kpi-card-value">{value}</div>
      <div className={`kpi-card-trend ${trendDirection}`}>
        <i className={`bi bi-arrow-${trendDirection === 'positive' ? 'up' : 'down'}`}></i>
        {trend}
      </div>
    </div>
  );
};

export default MetricCard;
