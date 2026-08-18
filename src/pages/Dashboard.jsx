import React from 'react';
import MetricCard from '../components/dashboard/MetricCard';
import IncomeChart from '../components/dashboard/IncomeChart';
import CategoryList from '../components/dashboard/CategoryList';
import POSOverview from '../components/dashboard/POSOverview';
import RecentOrders from '../components/dashboard/RecentOrders';
import StaffOnDuty from '../components/dashboard/StaffOnDuty';
import { kpiData, incomeData, posData } from '../data/dashboardData';
import { ordersData } from '../data/orders';
import { categoriesData } from '../data/categories';
import { staffData } from '../data/staff';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      {/* KPI Cards */}
      <div className="kpi-cards">
        {kpiData.map((kpi) => (
          <MetricCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            trend={kpi.trend}
            trendDirection={kpi.trendDirection}
          />
        ))}
      </div>

      {/* Main Analytics Row */}
      <div className="main-analytics-row">
        <IncomeChart data={incomeData} />
        <CategoryList categories={categoriesData} />
        <POSOverview data={posData} />
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        <RecentOrders ordersData={ordersData} />
        <StaffOnDuty staff={staffData} />
      </div>
    </div>
  );
};

export default Dashboard;
