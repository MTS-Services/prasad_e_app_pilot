import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Users,
  ShoppingCart,
  CreditCard,
  Headphones,
  Eye,
  TrendingUp,
  TrendingDown,
  Briefcase,
  DollarSign,
  AlertTriangle,
  Ticket,
} from 'lucide-react';

// Import components
import Sidebar from '../common/Sidebar';
import LoadingSpinner from '../common/LoadingSpinner';
import StatsCard from '../common/StatsCard';
import RevenueChart from './charts/RevenueChart';
import UserActivityTable from '../common/UserActivityTable';

// Import page components
import DroneOperatorPage from '../pages/DroneOperatorPage';
import UserManagementPage from '../pages/UserManagementPage';
import GenericPage from '../pages/GenericPage';

// Import API service
import ApiService from '../../services/apiService';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ApiService.get('/data/admin/dashboardData.json');
        setDashboardData(data);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
        setError(err.message || 'Something went wrong while fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (activeSection === 'dashboard') {
      fetchDashboardData();
    }
  }, [activeSection]);

  // Helper function to get icon components
  const getIconComponent = (iconName) => {
    const iconMap = {
      users: Users,
      briefcase: Briefcase,
      dollar: DollarSign,
      warning: AlertTriangle,
      ticket: Ticket,
    };
    return iconMap[iconName] || Users;
  };

  // Filter activities by selected period
  const filteredActivities = useMemo(() => {
    if (!activities) return [];
    const now = new Date();
    let days = 30; // default Last 30 days
    switch (selectedPeriod) {
      case 'Last 7 days':
        days = 7;
        break;
      case 'Last 30 days':
        days = 30;
        break;
      case 'Last 60 days':
        days = 60;
        break;
      case 'Last 90 days':
        days = 90;
        break;
      case 'Last 6 months':
        days = 180;
        break;
      case 'Last 12 months':
        days = 365;
        break;
      default:
        days = 30;
    }
    return activities.filter((a) => {
      if (!a.lastActive) return true; // Show all if no date
      const activityDate = new Date(a.lastActive);
      const diff = (now - activityDate) / (1000 * 60 * 60 * 24);
      return diff <= days;
    });
  }, [activities, selectedPeriod]);

  // Pagination
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewUser = (activity) => {
    navigate(`/user/${activity.user}`, { state: { activity } });
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className='flex-1 p-4 md:p-8 bg-gray-50'>
            {/* Header */}
            <div className='mb-4 md:mb-6'>
              <h1 className='text-lg md:text-2xl font-bold text-gray-900'>
                {t('dashboard.admin.overview', 'Dashboard Overview')}
              </h1>
              <p className='text-xs md:text-base text-gray-600'>
                {t(
                  'dashboard.admin.overviewDescription',
                  'Monitor your platform performance and key metrics'
                )}
              </p>
            </div>

            {/* Period Select */}
            <div className='mb-4 md:mb-6 flex flex-col items-start gap-2'>
              <h2 className='text-lg md:text-xl font-normal text-gray-700'>
                {selectedPeriod} overview
              </h2>
              <select
                className='px-2 md:px-4 py-1.5 md:py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-base text-gray-700'
                value={selectedPeriod}
                onChange={(e) => {
                  setSelectedPeriod(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
              </select>
            </div>

            {/* Loading & Error */}
            {loading && <div className='text-gray-700'>Loading...</div>}
            {error && <div className='text-red-600'>{error}</div>}

            {/* Stats */}
            {!loading && !error && (
              <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-6 md:mb-8'>
                {stats.map((stat, index) => {
                  const Icon = stat.icon || Users;
                  return (
                    <div
                      key={index}
                      className='bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200'
                    >
                      <div className='flex items-start justify-between mb-3 md:mb-4'>
                        <span className='text-gray-600 text-xs md:text-sm'>
                          {stat.label}
                        </span>
                        <Icon className='w-4 h-4 md:w-5 md:h-5 text-gray-400' />
                      </div>
                      <div className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                        {stat.value}
                      </div>
                      <div
                        className={`text-xs md:text-sm flex items-center gap-1 ${
                          stat.trend === 'up'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {stat.trend === 'up' ? (
                          <TrendingUp className='w-3 h-3 md:w-4 md:h-4' />
                        ) : (
                          <TrendingDown className='w-3 h-3 md:w-4 md:h-4' />
                        )}
                        {stat.trend === 'up' ? 'Increase' : 'Decrease'}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Activities Table */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200'>
              <div className='p-4 md:p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                <h2 className='text-lg md:text-xl font-bold text-gray-900'>
                  {t('dashboard.admin.recentActivity', 'Recent User Activity')}
                </h2>
              </div>

              <div className='overflow-x-auto'>
                <table className='w-full min-w-max'>
                  <thead className='bg-gray-50 border-b border-gray-200'>
                    <tr>
                      <th className='px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap'>
                        {t('table.headers.user', 'User')}
                      </th>
                      <th className='px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap'>
                        {t('table.headers.role', 'Role')}
                      </th>
                      <th className='px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap'>
                        {t('table.headers.jobTitle', 'Job Title')}
                      </th>
                      <th className='px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap'>
                        {t('table.headers.status', 'Status')}
                      </th>
                      <th className='px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap'>
                        {t('table.headers.lastActive', 'Last Active')}
                      </th>
                      <th className='px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap'>
                        {t('table.headers.actions', 'Action')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {!loading &&
                      !error &&
                      paginatedActivities.map((activity, index) => (
                        <tr key={index} className='hover:bg-gray-50'>
                          <td className='px-3 md:px-6 py-4'>{activity.user}</td>
                          <td className='px-3 md:px-6 py-4'>
                            <span className='text-xs md:text-sm text-gray-900'>
                              {activity.role}
                            </span>
                          </td>
                          <td className='px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900'>
                            {activity.jobTitle}
                          </td>
                          <td className='px-3 md:px-6 py-4'>
                            <span
                              className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                                activity.statusType === 'success'
                                  ? 'bg-green-100 text-green-700'
                                  : activity.statusType === 'warning'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {activity.status}
                            </span>
                          </td>
                          <td className='px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900'>
                            {activity.lastActive}
                          </td>
                          <td className='px-3 md:px-6 py-4'>
                            <button
                              onClick={() => handleViewUser(activity)}
                              className='text-gray-600 hover:text-gray-900'
                            >
                              <Eye className='w-4 h-4 md:w-5 md:h-5' />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className='px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='text-xs md:text-sm text-gray-600'>
                  Showing {paginatedActivities.length} of{' '}
                  {filteredActivities.length} results
                </div>
                <div className='flex gap-2'>
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className='px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50'
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className='px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50'
                  >
                    Next
                  </button>
                </div>
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
            section='fieldAgents'
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
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
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
