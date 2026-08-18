import React, { useState } from 'react';

const POSOverview = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card pos-card">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="pos-card-title mb-0">POS Overview</h2>
          <span className="pos-card-subtitle">Monthly</span>
        </div>

        <div className="pos-stats">
          <div className="pos-stat">
            <div className="pos-stat-label">Total Bill</div>
            <div className="pos-stat-value">{data.totalBill}</div>
          </div>
          <div className="pos-stat">
            <div className="pos-stat-label">AVG Value</div>
            <div className="pos-stat-value">{data.avgValue}</div>
          </div>
          <div className="pos-stat">
            <div className="pos-stat-label">Pick Hour</div>
            <div className="pos-stat-value">{data.pickHour}</div>
          </div>
        </div>

        <div className="pos-donut-container">
          <div className="pos-donut">
            <div className="pos-donut-inner">
              <div className="pos-donut-value">{data.totalPayment}</div>
              <div className="pos-donut-label">Total Payment</div>
            </div>
          </div>
        </div>

        <div className="pos-legend">
          {data.paymentMethods.map((method) => (
            <div key={method.label} className="pos-legend-item">
              <div
                className="pos-legend-dot"
                style={{ backgroundColor: method.color }}
              />
              <span>{method.label} {method.value}%</span>
            </div>
          ))}
        </div>

        <button className="pos-view-btn" onClick={() => setShowModal(true)}>
          View Details
        </button>
      </div>

      {showModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">POS Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="pos-stats">
                  <div className="pos-stat">
                    <div className="pos-stat-label">Total Bill</div>
                    <div className="pos-stat-value">{data.totalBill}</div>
                  </div>
                  <div className="pos-stat">
                    <div className="pos-stat-label">AVG Value</div>
                    <div className="pos-stat-value">{data.avgValue}</div>
                  </div>
                  <div className="pos-stat">
                    <div className="pos-stat-label">Pick Hour</div>
                    <div className="pos-stat-value">{data.pickHour}</div>
                  </div>
                </div>
                <div className="pos-legend mt-3">
                  {data.paymentMethods.map((method) => (
                    <div key={method.label} className="pos-legend-item">
                      <div
                        className="pos-legend-dot"
                        style={{ backgroundColor: method.color }}
                      />
                      <span>{method.label}: {method.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop show" onClick={() => setShowModal(false)}></div>}
    </>
  );
};

export default POSOverview;
