import React from 'react';
import Avatar from '../common/Avatar';

const StaffOnDuty = ({ staff }) => {
  return (
    <div className="card staff-card">
      <h2 className="staff-card-title">Staff On Duty</h2>
      
      {staff.map((member) => (
        <div key={member.id} className="staff-item">
          <Avatar
            src={member.avatar}
            alt={member.name}
            size={44}
          />
          <div className="staff-item-info">
            <div className="staff-item-name">{member.name}</div>
            <div className="staff-item-role">{member.role}</div>
          </div>
          <div className="staff-item-workload">{member.workload}</div>
        </div>
      ))}
    </div>
  );
};

export default StaffOnDuty;
