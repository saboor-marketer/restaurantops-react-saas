import React, { useState } from 'react';
import Avatar from '../common/Avatar';

const Header = ({ onMenuClick, isMobile }) => {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <header className="header">
      <div className="d-flex align-items-center gap-3">
        {isMobile && (
          <button className="mobile-menu-btn" onClick={onMenuClick}>
            <i className="bi bi-list"></i>
          </button>
        )}
        <h1 className="header-title">Overview</h1>
      </div>

      <div className="header-actions">
        {/* Search */}
        <div className="search-wrapper">
          <i className="bi bi-search"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>

        {/* Notifications */}
        <div className="position-relative">
          <button
            className="header-action-btn"
            onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
          >
            <i className="bi bi-bell"></i>
            <span className="badge"></span>
          </button>

          {showNotificationDropdown && (
            <div className="dropdown-menu show position-absolute end-0 mt-2">
              <div className="p-3">
                <p className="mb-0 text-muted small">No new notifications</p>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="position-relative">
          <div
            className="header-user"
            onClick={() => setShowUserDropdown(!showUserDropdown)}
          >
            <Avatar
              src="/src/assets/user-avatar.svg"
              alt="Daniel K."
              size={36}
            />
            <div className="header-user-info">
              <span className="header-user-name">Daniel K.</span>
              <span className="header-user-role">Admin</span>
            </div>
          </div>

          {showUserDropdown && (
            <div className="dropdown-menu show position-absolute end-0 mt-2">
              <a className="dropdown-item" href="#">
                <i className="bi bi-person me-2"></i>Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="bi bi-gear me-2"></i>Settings
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item text-danger" href="#">
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
