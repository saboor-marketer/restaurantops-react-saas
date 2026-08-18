import React, { useState } from 'react';

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: 'bi-grid' },
    { name: 'Order', icon: 'bi-bag' },
    { name: 'Inventory', icon: 'bi-file-earmark' },
    { name: 'Analytics', icon: 'bi-graph-up' },
    { name: 'Message', icon: 'bi-lightning' },
    { name: 'Staff', icon: 'bi-people' },
  ];

  const bottomNavItems = [
    { name: 'Settings', icon: 'bi-gear' },
    { name: 'Help & Support', icon: 'bi-question-circle' },
  ];

  return (
    <div className={`sidebar ${isMobile && isOpen ? 'show' : ''}`}>
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <i className="bi bi-shop"></i>
        </div>
        <span className="sidebar-brand-text">Restroq</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.name}
            className={`sidebar-nav-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => {
              setActiveItem(item.name);
              if (isMobile) onClose();
            }}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.name}</span>
          </a>
        ))}

        <div className="sidebar-divider"></div>

        {bottomNavItems.map((item) => (
          <a
            key={item.name}
            className={`sidebar-nav-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => {
              setActiveItem(item.name);
              if (isMobile) onClose();
            }}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Upgrade Card */}
      <div className="sidebar-upgrade-card">
        <img
          src="/src/assets/upgrade-food.svg"
          alt="Premium features"
          className="sidebar-upgrade-image"
        />
        <p className="sidebar-upgrade-title">
          Unlock advanced tools to manage your restaurant more efficiently
        </p>
        <button className="sidebar-upgrade-btn">Upgrade to pro</button>
      </div>
    </div>
  );
};

export default Sidebar;
