import React, { useState } from 'react';
import { Users, ShoppingCart, CreditCard, Headphones, Search, Bell, User, Menu, X ,LayoutDashboard} from 'lucide-react';

import Coustomerpage from './employdashboard/Coustomerpage';
import Dashboard from './employdashboard/Dashboard';
import OrdersPage from './employdashboard/Orderspage';


const Payments = () => (
  <div className="flex-1 p-4 md:p-8 bg-gray-50">
    <h1 className="text-xl md:text-2xl font-bold">Payments Page</h1>
    <p className="text-sm md:text-base text-gray-600 mt-2">Payment management content will appear here.</p>
  </div>
);

const Support = () => (
  <div className="flex-1 p-4 md:p-8 bg-gray-50">
    <h1 className="text-xl md:text-2xl font-bold">Support Page</h1>
    <p className="text-sm md:text-base text-gray-600 mt-2">Support ticket management content will appear here.</p>
  </div>
);

const Sidebar = ({ activePage, setActivePage, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon:LayoutDashboard },
    { id: 'customer', label: 'Customer', icon: Users },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'support', label: 'Support', icon: Headphones },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-gray-100  border-gray-200 h-screen z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
        <div className="p-4 md:p-6 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8  rounded flex items-center justify-center text-white font-bold">
              <img src="../src/assets/logo-8.png" alt="" srcset="" className='rounded-2xl'/>
            </div>
            <span className="font-semibold text-gray-900">Demo Logo</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 ">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 ${isActive
                    ? 'bg-white text-green-600'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white  border-gray-200 px-4 md:px-8 py-3 md:py-[19px]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5 text-gray-600" />
            
          </button>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search customer name or order id"
                className="w-full pl-9 md:pl-10 pr-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <div className=" sm:flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </div>
            <div>
              <div className="text-xs md:text-sm font-medium text-gray-900">John Davis</div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'customer':
        return <Coustomerpage />;
      case 'orders':
        return <OrdersPage />;
      case 'payments':
        return <Payments />;
      case 'support':
        return <Support />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen  bg-gray-50">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;