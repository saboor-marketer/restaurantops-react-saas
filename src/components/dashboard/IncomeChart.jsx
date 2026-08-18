import React, { useState } from 'react';

const IncomeChart = ({ data }) => {
  const [period, setPeriod] = useState('monthly');

  const currentData = data[period];
  const maxValue = Math.max(...currentData.chartData.map(d => d.value));

  return (
    <div className="card income-chart-card">
      <div className="income-chart-header">
        <h2 className="income-chart-title">Average Monthly Income</h2>
        <div className="income-chart-toggle">
          <button
            className={`income-chart-toggle-btn ${period === 'monthly' ? 'active' : ''}`}
            onClick={() => setPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`income-chart-toggle-btn ${period === 'yearly' ? 'active' : ''}`}
            onClick={() => setPeriod('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="income-chart-value">{currentData.total}</div>
      <div className="income-chart-trend">
        <i className="bi bi-arrow-up"></i> {currentData.trend}
      </div>

      <div className="income-chart-container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '100%', paddingTop: '20px' }}>
          {currentData.chartData.map((item) => {
            const height = (item.value / maxValue) * 100;
            const isHighlighted = item.highlighted;
            
            return (
              <div key={item.month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                {isHighlighted && (
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: '600', 
                    color: '#252525',
                    marginBottom: '4px' 
                  }}>
                    {item.value}K
                  </div>
                )}
                <div
                  style={{
                    width: '32px',
                    height: `${height}%`,
                    backgroundColor: isHighlighted ? '#D9573A' : '#E96B4D',
                    borderRadius: '6px 6px 0 0',
                    transition: 'all 0.3s ease',
                    minHeight: '20px'
                  }}
                />
                <div style={{ 
                  fontSize: '11px', 
                  color: '#858585', 
                  marginTop: '8px',
                  fontWeight: '500'
                }}>
                  {item.month}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Grid lines */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          pointerEvents: 'none' 
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '25%', 
            left: 0, 
            right: 0, 
            borderBottom: '1px dashed #E8DFDD' 
          }} />
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: 0, 
            right: 0, 
            borderBottom: '1px dashed #E8DFDD' 
          }} />
          <div style={{ 
            position: 'absolute', 
            top: '75%', 
            left: 0, 
            right: 0, 
            borderBottom: '1px dashed #E8DFDD' 
          }} />
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;
