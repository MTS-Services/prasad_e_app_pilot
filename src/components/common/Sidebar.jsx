import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import {
  LayoutDashboard,
  Plane,
  Users,
  UserCheck,
  MapPin,
  Briefcase,
  CreditCard,
  BarChart3,
  AlertTriangle,
} from 'lucide-react';

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeSection,
  setActiveSection,
}) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 'dashboard',
      label: t('navigation.dashboard'),
      icon: LayoutDashboard,
    },
    {
      id: 'drone-operator',
      label: t('sidebar.admin.droneOperator'),
      icon: Plane,
    },
    {
      id: 'user-management',
      label: t('sidebar.admin.userManagement'),
      icon: Users,
    },
    {
      id: 'employee-management',
      label: t('sidebar.admin.employeeManagement'),
      icon: UserCheck,
    },
    {
      id: 'field-agent',
      label: t('sidebar.admin.fieldAgent'),
      icon: MapPin,
    },
    { id: 'jobs', label: t('sidebar.admin.jobs'), icon: Briefcase },
    {
      id: 'payments-management',
      label: t('sidebar.admin.paymentsManagement'),
      icon: CreditCard,
    },
    {
      id: 'reports',
      label: t('sidebar.admin.reports'),
      icon: BarChart3,
    },
    {
      id: 'complaints',
      label: t('sidebar.admin.complaints'),
      icon: AlertTriangle,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
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
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex flex-col h-full'>
          {/* Menu Items */}
          <nav className='flex-1 px-3 py-4 overflow-y-auto'>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type='button'
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg mb-1 transition-all duration-200 ${
                    isActive
                      ? 'bg-white border-l-4 border-green-600 font-semibold shadow-sm'
                      : 'text-black hover:bg-gray-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-green-600' : 'text-gray-500'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 z-30 bg-black/40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
