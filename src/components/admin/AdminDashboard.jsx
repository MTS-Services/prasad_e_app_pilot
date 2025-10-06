import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HiHome,
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineCreditCard,
  HiOutlineChartBar,
  HiOutlineExclamation,
  HiMenuAlt3,
  HiX,
} from 'react-icons/hi';

// Import all admin components
import DroneOperator from './DroneOperator';
import UserManagement from './UserManagement';
import EmployeeManagement from './EmployeeManagement';
import FieldAgent from './FieldAgent';
import Jobs from './Jobs';
import PaymentsManagement from './PaymentsManagement';
import Reports from './Reports';
import Complaints from './Complaints';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { id: 'dashboard', label: t('navigation.dashboard'), icon: HiHome },
    {
      id: 'drone-operator',
      label: t('sidebar.admin.droneOperator'),
      icon: HiOutlineViewGrid,
    },
    {
      id: 'user-management',
      label: t('sidebar.admin.userManagement'),
      icon: HiOutlineUsers,
    },
    {
      id: 'employee-management',
      label: t('sidebar.admin.employeeManagement'),
      icon: HiOutlineUserGroup,
    },
    {
      id: 'field-agent',
      label: t('sidebar.admin.fieldAgent'),
      icon: HiOutlineLocationMarker,
    },
    { id: 'jobs', label: t('sidebar.admin.jobs'), icon: HiOutlineBriefcase },
    {
      id: 'payments-management',
      label: t('sidebar.admin.paymentsManagement'),
      icon: HiOutlineCreditCard,
    },
    {
      id: 'reports',
      label: t('sidebar.admin.reports'),
      icon: HiOutlineChartBar,
    },
    {
      id: 'complaints',
      label: t('sidebar.admin.complaints'),
      icon: HiOutlineExclamation,
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className='min-h-screen bg-gray-50 w-full'>
            <div className='w-full px-4 sm:px-6 lg:px-8 py-6'>
              {/* Header Section */}
              <div className='bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8'>
                <div className='flex items-center justify-between flex-wrap gap-4'>
                  <div className='flex items-center'>
                    <div className='bg-indigo-100 p-3 rounded-lg mr-4'>
                      <HiHome className='w-8 h-8 text-indigo-600' />
                    </div>
                    <div>
                      <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                        {t('dashboard.admin.title')}
                      </h1>
                      <p className='text-gray-600 mt-1'>
                        {t('dashboard.admin.welcome')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                      {t('dashboard.admin.fullAccess')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                <div className='bg-white p-6 rounded-xl shadow-sm'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-600'>
                        {t('stats.totalUsers')}
                      </p>
                      <p className='text-2xl font-bold text-gray-900'>1,234</p>
                    </div>
                    <div className='bg-blue-100 p-3 rounded-lg'>
                      <HiOutlineUsers className='w-6 h-6 text-blue-600' />
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-sm'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-600'>
                        {t('stats.activeSessions')}
                      </p>
                      <p className='text-2xl font-bold text-gray-900'>891</p>
                    </div>
                    <div className='bg-green-100 p-3 rounded-lg'>
                      <HiOutlineViewGrid className='w-6 h-6 text-green-600' />
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-sm'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-600'>
                        {t('stats.totalRevenue')}
                      </p>
                      <p className='text-2xl font-bold text-gray-900'>
                        $184,592
                      </p>
                    </div>
                    <div className='bg-emerald-100 p-3 rounded-lg'>
                      <HiOutlineCreditCard className='w-6 h-6 text-emerald-600' />
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-sm'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-600'>
                        {t('stats.openComplaints')}
                      </p>
                      <p className='text-2xl font-bold text-gray-900'>8</p>
                    </div>
                    <div className='bg-red-100 p-3 rounded-lg'>
                      <HiOutlineExclamation className='w-6 h-6 text-red-600' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className='bg-white rounded-xl shadow-sm p-6'>
                <h2 className='text-xl font-bold text-gray-900 mb-4'>
                  {t('dashboard.admin.overview')}
                </h2>
                <p className='text-gray-600'>
                  {t('dashboard.admin.overviewDescription')}
                </p>
              </div>
            </div>
          </div>
        );
      case 'drone-operator':
        return <DroneOperator />;
      case 'user-management':
        return <UserManagement />;
      case 'employee-management':
        return <EmployeeManagement />;
      case 'field-agent':
        return <FieldAgent />;
      case 'jobs':
        return <Jobs />;
      case 'payments-management':
        return <PaymentsManagement />;
      case 'reports':
        return <Reports />;
      case 'complaints':
        return <Complaints />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Mobile menu button - only show when sidebar is closed */}
      {!sidebarOpen && (
        <div className='lg:hidden fixed top-4 left-4 z-50'>
          <button
            onClick={() => setSidebarOpen(true)}
            className='bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200'
          >
            <HiMenuAlt3 className='w-5 h-5 text-gray-700' />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        <div className='flex flex-col h-full'>
          {/* Logo */}
          <div className='flex items-center justify-between h-16 px-4 border-b border-gray-200'>
            <div className='flex items-center min-w-0 flex-1'>
              <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
                <span className='text-white font-bold text-sm'>P</span>
              </div>
              <h1 className='text-base font-semibold text-gray-900 truncate'>
                {t('sidebar.prasadDashboard')}
              </h1>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className='lg:hidden p-2 rounded-md hover:bg-gray-100 ml-4 flex-shrink-0'
            >
              <HiX className='w-5 h-5 text-gray-500' />
            </button>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-4 py-6 space-y-2 overflow-y-auto'>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200
                    ${
                      activeSection === item.id
                        ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className='w-5 h-5 mr-3' />
                  <span className='font-medium'>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 z-30 bg-black opacity-50 lg:hidden'
          onClick={() => setSidebarOpen(false)}
          style={{ top: '0px' }}
        />
      )}

      {/* Main content */}
      <div className='flex-1 flex flex-col overflow-hidden lg:ml-0'>
        {/* Mobile header spacer */}
        <div className='lg:hidden h-20'></div>
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100'>
          <div className='min-h-full'>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
