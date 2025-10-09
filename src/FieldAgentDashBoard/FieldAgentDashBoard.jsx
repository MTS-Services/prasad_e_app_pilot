import React, { useState } from 'react';
import { Users, IndianRupee, UserPlus, Bell, Settings, User } from 'lucide-react';
import AddCustomerModal from './Component/AddCoustomerModal';

export default function FieldAgentDashboard() {
  const [showModal, setShowModal] = useState(false);

  const customers = [
    { name: 'Jacob Jones', role: 'Customer', regCommission: '₹120', firstOrderCommission: '₹100', joinDate: 'March 6, 2018' },
    { name: 'Floyd Miles', role: 'Customer', regCommission: '₹120', firstOrderCommission: '₹100', joinDate: 'July 14, 2015' },
    { name: 'Dianne Russell', role: 'Customer', regCommission: '₹120', firstOrderCommission: '₹100', joinDate: 'December 19, 2013' },
    { name: 'Theresa Webb', role: 'Customer', regCommission: '₹120', firstOrderCommission: '₹100', joinDate: 'December 19, 2013' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-8 md:px-32 lg:px-60 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌿</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Demo Logo</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-800">John Davis</div>
                <div className="text-xs text-gray-500">Field agent</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-6 md:px-32 lg:px-60">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm w-full sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600 mb-2">Total user added by you</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">106</div>
                <div className="text-xs sm:text-sm text-green-600 mt-2">+8.2% from last month</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00EB06] rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm w-full">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600 mb-2">Total commission earned</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">₹10k</div>
                <div className="text-xs sm:text-sm text-green-600 mt-2">+8.2% from last month</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00EB06] rounded-lg flex items-center justify-center">
                <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm w-full">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600 mb-2">Outstanding payments</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">₹8k</div>
                <div className="text-xs sm:text-sm text-green-600 mt-2">+8.2% from last month</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00EB06] rounded-lg flex items-center justify-center">
                <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Table */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Added by you</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#00C805] hover:bg-green-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg flex items-center gap-2 justify-center text-sm md:text-base font-medium whitespace-nowrap"
              >
                <UserPlus className="w-4 h-4 md:w-5 md:h-5" />
                Add Customer
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="min-w-[120px] text-left py-4 px-4 text-sm font-medium text-gray-600">User</th>
                  <th className="min-w-[100px] text-left py-4 px-4 text-sm font-medium text-gray-600">Role</th>
                  <th className="min-w-[180px] text-left py-4 px-4 text-sm font-medium text-gray-600">Registration Commission</th>
                  <th className="min-w-[180px] text-left py-4 px-4 text-sm font-medium text-gray-600">First Order Commission</th>
                  <th className="min-w-[140px] text-left py-4 px-4 text-sm font-medium text-gray-600">Join Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {customers.map((customer, idx) => (
                  <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap">{customer.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{customer.role}</td>
                    <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{customer.regCommission}</td>
                    <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{customer.firstOrderCommission}</td>
                    <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{customer.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs sm:text-sm text-gray-600">Showing 6 of 106 Users</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">Previous</button>
              <button className="px-3 py-1 text-xs sm:text-sm bg-green-500 text-white rounded">1</button>
              <button className="px-3 py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
              <button className="px-3 py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">Next</button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <AddCustomerModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
