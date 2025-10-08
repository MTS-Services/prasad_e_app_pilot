import React, { useState } from 'react';
import {
  HiOutlineFilter,
  HiOutlineBell,
  HiOutlineSearch,
} from 'react-icons/hi';

// Import dashboard components
import RevenueChart from '../charts/RevenueChart';
import UserActivityTable from '../../common/UserActivityTable';

// Import hooks
import { useDashboardOverview } from '../../../hooks/useDashboardData';

// Import page components
import DroneOperatorPage from '../../pages/DroneOperatorPage';
import UserManagementPage from '../../pages/UserManagementPage';
import GenericPage from '../../pages/GenericPage';
import StatsCard from '../../common/StatsCard';
import Sidebar from '../../common/Sidebar';
import LoadingSpinner from '../../common/LoadingSpinner';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch dashboard data
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
  } = useDashboardOverview();

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        if (dashboardLoading) {
          return (
            <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
              <LoadingSpinner />
            </div>
          );
        }

        if (dashboardError) {
          return (
            <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
              <div className='text-center'>
                <p className='text-red-600 mb-4'>
                  Error loading dashboard data
                </p>
                <button
                  className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            </div>
          );
        }

        if (!dashboardData) {
          return (
            <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
              <p className='text-gray-500'>No dashboard data available</p>
            </div>
          );
        }

        return (
          <div className='min-h-screen bg-gray-50 w-full'>
            <div className='w-full px-6 py-6'>
              {/* Header Section - compact Figma match */}
              <div className='mb-4'>
                <div>
                  <h1 className='text-lg font-medium text-gray-900 mb-1'>
                    {dashboardData.overview?.title || 'Dashboard Overview'}
                  </h1>
                  <p className='text-gray-500 text-xs'>
                    {dashboardData.overview?.subtitle ||
                      'Monitor your platform performance and key metrics'}
                  </p>
                </div>
              </div>

              {/* Stats Grid - pixel perfect match */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
                {dashboardData.overview?.stats?.map((stat, index) => (
                  <StatsCard key={stat.id || index} stat={stat} />
                ))}
              </div>

              {/* Additional ticket stat */}
              {dashboardData.overview?.additionalStats && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                  {dashboardData.overview.additionalStats.map((stat, index) => (
                    <StatsCard key={stat.id || index} stat={stat} />
                  ))}
                  <div className='md:col-span-3'></div>
                </div>
              )}

              {/* Chart Section - full width like Figma */}
              <div className='mb-8'>
                {dashboardData.revenueChart && (
                  <RevenueChart
                    data={dashboardData.revenueChart.data}
                    title={dashboardData.revenueChart.title}
                  />
                )}
              </div>

              {/* Recent User Activity Table */}
              <div>
                {dashboardData.recentActivity && (
                  <UserActivityTable
                    data={dashboardData.recentActivity}
                    title={dashboardData.recentActivity.title}
                  />
                )}
              </div>
            </div>
          </div>
        );
      case 'drone-operator':
        return <DroneOperatorPage />;
      case 'user-management':
        return <UserManagementPage />;
      case 'employee-management':
        return (
          <GenericPage
            section='employees'
            title='Employee Management'
            subtitle='Manage and monitor employees'
          />
        );
      case 'field-agent':
        return (
          <GenericPage
            section='field-agents'
            title='Field Agents'
            subtitle='Manage and monitor field agents'
          />
        );
      case 'jobs':
        return (
          <GenericPage
            section='jobs'
            title='Jobs Management'
            subtitle='Manage and monitor jobs'
            statsColumns={3}
          />
        );
      case 'payments-management':
        return (
          <GenericPage
            section='payments'
            title='Payments Management'
            subtitle='Manage payments and revenue'
            statsColumns={3}
          />
        );
      case 'reports':
        return (
          <GenericPage
            section='reports'
            title='Reports & Analytics'
            subtitle='View and generate reports'
          />
        );
      case 'complaints':
        return (
          <GenericPage
            section='complaints'
            title='Complaints Management'
            subtitle='Manage customer complaints'
            statsColumns={3}
          />
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-50'>
          <div className='min-h-full'>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
