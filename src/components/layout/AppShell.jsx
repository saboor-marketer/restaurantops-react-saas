import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const AppShell = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {!isMobile && <Sidebar />}
      {isMobile && <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} isMobile />}
      
      <div className="main-content">
        <Header onMenuClick={handleMenuClick} isMobile={isMobile} />
        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppShell;
