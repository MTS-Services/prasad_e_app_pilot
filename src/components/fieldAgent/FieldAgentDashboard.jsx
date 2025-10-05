import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlay, FaPause } from "react-icons/fa";
import {
  HiHome,
  HiClipboardList,
  HiLocationMarker,
  HiCamera,
  HiDocumentReport,
  HiCog,
  HiLogout,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { FaRupeeSign, FaUserCircle } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import AddCustomerModal from "./AddCustomerModal";
const FieldAgentDashboard = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalUsers = 106;
  const usersPerPage = 6;

  const statsData = [
    {
      id: 1,
      title: "Total user added by you",
      value: "106",
      change: "+8.2% from last month",
      icon: PiUsersThreeBold,
      bgColor: "bg-green-500",
    },
    {
      id: 2,
      title: "Total commission earned",
      value: "₹10k",
      change: "+8.2% from last month",
      icon: FaRupeeSign,
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Outstanding payments",
      value: "₹8k",
      change: "+8.2% from last month",
      icon: FaRupeeSign,
      bgColor: "bg-green-500",
    },
  ];

  // JSON data for table
  const tableData = [
    {
      id: 1,
      user: "Jacob Jones",
      role: "Customer",
      registrationCommission: "₹120",
      firstOrderCommission: "₹100",
      joinDate: "March 6, 2018",
    },
    {
      id: 2,
      user: "Floyd Miles",
      role: "Customer",
      registrationCommission: "₹120",
      firstOrderCommission: "₹100",
      joinDate: "July 14, 2015",
    },
    {
      id: 3,
      user: "Dianne Russell",
      role: "Customer",
      registrationCommission: "₹120",
      firstOrderCommission: "₹100",
      joinDate: "December 19, 2013",
    },
    {
      id: 4,
      user: "Theresa Webb",
      role: "Customer",
      registrationCommission: "₹120",
      firstOrderCommission: "₹100",
      joinDate: "December 19, 2013",
    },
  ];

  const menuItems = [
    { id: "dashboard", label: t("fieldAgent.dashboard"), icon: HiHome },
    {
      id: "assignments",
      label: t("fieldAgent.assignments"),
      icon: HiClipboardList,
    },
    { id: "location", label: t("fieldAgent.location"), icon: HiLocationMarker },
    { id: "photos", label: t("fieldAgent.photos"), icon: HiCamera },
    { id: "reports", label: t("fieldAgent.reports"), icon: HiDocumentReport },
    { id: "settings", label: t("fieldAgent.settings"), icon: HiCog },
  ];

  return (
    <div className="min-h-screen bg-[#FAFFFD] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {statsData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-lg shadow-sm p-5 relative"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-black text-sm mb-2">{stat.title}</p>
                    <h3 className="text-2xl md:text-4xl font-semi text-black mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-button-primary text-sm font-medium">
                      {stat.change}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} rounded-lg p-3 ml-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="flex justify-between items-center p-2 sm:p-4 md:p-6">
            <h2 className="sm:text-lg md:text-2xl font-semibold text-black">
              Added by you
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="!bg-button-primary hover:bg-green-600 text-white px-1 sm:px-2 md:px-6 py-0 sm:py-1 md:py-2.5 rounded-sm font-medium flex items-center gap-2 text-sm md:text-base transition-colors"
            >
              <FiUserPlus size={18} />
              Add Customer
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F5F7FA]">
                <tr>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    User
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    Role
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    Registration Commission
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    First Order Commission
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    Join Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <td className="py-4 px-6 text-sm text-black ">
                      {row.user}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">{row.role}</td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.registrationCommission}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.firstOrderCommission}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className=" py-4 md:py-6 ">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-2 md:pb-3">
              <p className="text-sm text-black px-4 md:px-6">
                Showing {usersPerPage} of {totalUsers} Users
              </p>
              <div className="flex items-center gap-0.5 sm:gap-2 sm:px-4 md:px-6">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 sm:px-3 py-1.5 text-sm text-gray-600 !bg-gray-100 hover:bg-gray-100 rounded  disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <button className="px-2 sm:px-3 py-1.5text-sm !bg-button-primary text-white rounded font-medium">
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className="px-2 sm:px-3 py-1.5 text-sm text-black !bg-gray-100 hover:bg-gray-100 rounded transition-colors"
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-2 sm:px-3 py-1.5 text-sm text-gray-600 !bg-gray-100 hover:bg-gray-100 rounded transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <AddCustomerModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default FieldAgentDashboard;
