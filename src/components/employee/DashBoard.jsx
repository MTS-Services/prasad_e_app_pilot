
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Users, ShoppingCart, CreditCard, Headphones, Eye, TrendingUp, TrendingDown, ChevronUp, ChevronDown } from "lucide-react";

import RegistrationModal from "./components/Modal/RegistrationModal";
import AssistProfileSetupModal from "./components/Modal/AssistProfileSetupModal";
import ApiService from "../../services/apiService";
import { useTranslation } from "react-i18next";

function DashBoard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const navigate = useNavigate();
  // inside your component:
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const periods = [
    "Last 7 days",
    "Last 30 days",
    "Last 60 days",
    "Last 90 days",
    "Last 6 months",
    "Last 12 months",
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await ApiService.get("/dashboardOverviewData.json");
        const summaryStats = [
          {
            label:t('dashboard.employee.pages.dashboard.card.1st'),
            value: data.summary.totalCustomers,
            trend: "up",
            icon: Users,
          },
          {
            label: t('dashboard.employee.pages.dashboard.card.2nd'),
            value: data.summary.totalRevenue,
            trend: "up",
            icon: ShoppingCart,
          },
          {
            label: t('dashboard.employee.pages.dashboard.card.3rd'),
            value: data.summary.pendingPayments,
            trend: "down",
            icon: CreditCard,
          },
          {
            label: t('dashboard.employee.pages.dashboard.card.4th'),
            value: data.summary.avgDuration,
            trend: "up",
            icon: Headphones,
          },
          {
            label: t('dashboard.employee.pages.dashboard.card.5th'),
            value: data.summary.completedOrders,
            trend: "up",
            icon: ShoppingCart,
          },
          {
            label:t('dashboard.employee.pages.dashboard.card.6th'),
            value: data.summary.canceledOrders,
            trend: "down",
            icon: ShoppingCart,
          },
        ];

        setStats(summaryStats);
        setActivities(data.recentActivities);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError(err.message || "Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);
  // Filter activities by selected period
  const filteredActivities = useMemo(() => {
    if (!activities) return [];
    const now = new Date();
    let days = 30; // default Last 30 days
    switch (selectedPeriod) {
      case "Last 7 days": days = 7; break;
      case "Last 30 days": days = 30; break;
      case "Last 60 days": days = 60; break;
      case "Last 90 days": days = 90; break;
      case "Last 6 months": days = 180; break;
      case "Last 12 months": days = 365; break;
      default: days = 30;
    }
    return activities.filter(a => {
      const activityDate = new Date(a.date); // assuming your JSON has "date" field
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

  const handleViewCustomer = (activity) => {
    navigate(`/customer/${activity.serviceName}`, { state: { activity } });
  };

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-2xl font-bold text-gray-900">{t('dashboard.employee.title')}</h1>
        <p className="text-xs md:text-base text-gray-600">{t('dashboard.employee.welcome')}</p>
      </div>

      {/* Period Select */}
      <div className="mb-4 md:mb-6 flex flex-col items-start gap-2 relative">
        <h2 className="text-lg md:text-xl font-normal text-gray-700">
          {selectedPeriod} overview
        </h2>

        <div className="relative w-52">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between px-3 py-2 md:px-4 md:py-2 bg-white border border-gray-300 rounded-xl text-xs md:text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
          >
            {selectedPeriod}
            {dropdownOpen ? (
              <ChevronUp className="w-4 h-4 text-gray-500 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
            )}
          </button>

          {dropdownOpen && (
            <div
              className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-20 animate-fadeIn"
            >
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setDropdownOpen(false);
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-gray-100 ${selectedPeriod === period ? "bg-gray-50 font-medium text-gray-900" : "text-gray-700"
                    }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Loading & Error */}
      {loading && <div className="text-gray-700">Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}

      {/* Stats */}
      {!loading && !error && (
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon || Users;
            return (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <span className="text-gray-600 text-xs md:text-sm">{stat.label}</span>
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className={`text-xs md:text-sm flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {stat.trend === "up" ? <TrendingUp className="w-3 h-3 md:w-4 md:h-4" /> : <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />}
                  {stat.trend === "up" ? "Increase" : "Decrease"}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Activities Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 md:p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">{t('dashboard.employee.pages.dashboard.table.tableTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <button
              onClick={() => setOpen(true)}
              className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base"
            >
              Register New Customer
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 md:px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 font-medium text-sm md:text-base"
            >
              Assist in Profile Setup
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.serviceName')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.contact')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.location')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.served')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.progress')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.priority')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.pages.dashboard.table.action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {!loading &&
                !error &&
                paginatedActivities.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 md:px-6 py-4">{activity.serviceName}</td>
                    <td className="px-3 md:px-6 py-4">
                      <div className="text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.contact}</div>
                      <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.phone}</div>
                    </td>
                    <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.location}</td>
                    <td className="px-3 md:px-6 py-4">
                      <span
                        className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${activity.servedBy === "Unassigned" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                          }`}
                      >
                        {activity.servedBy}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <select className="px-2 md:px-3 py-1 bg-gray-700 text-white rounded text-xs md:text-sm">
                        <option>{activity.progress}</option>
                      </select>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <span
                        className={`inline-flex px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium whitespace-nowrap ${activity.priority === "High"
                            ? "text-red-600"
                            : activity.priority === "Medium"
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                      >
                        {activity.priority}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <button onClick={() => handleViewCustomer(activity)} className="text-gray-600 hover:text-gray-900">
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-gray-600">
            Showing {paginatedActivities.length} of {filteredActivities.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <RegistrationModal isOpen={open} onClose={() => setOpen(false)} />
      <AssistProfileSetupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default DashBoard;