
import { useEffect, useMemo, useState } from "react";
import { TrendingUp, ShoppingCart, Clock, CreditCard } from "lucide-react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ApiService from "../../../services/apiService";
import { useTranslation } from "react-i18next";

// Custom Dropdown Component
const CustomDropdown = ({ label, options, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white shadow-sm hover:shadow-md transition"
      >
        <span>{value || placeholder}</span>
        <HiChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <div
            onClick={() => {
              onChange(""); // Reset selection
              setOpen(false);
            }}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-medium"
          >
            All
          </div>
          {options.map((opt, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ReportAnalysisPage = () => {
  const { t } = useTranslation();

  const [selectedPeriod, setSelectedPeriod] = useState("last30days");
  const [filters, setFilters] = useState({
    customerTypes: ["Aerial Media Services", "Ground Media Services"],
    serviceCategories: ["Aerial Photography & Videography (MP)", "Event Photography"],
  });

  const [summary, setSummary] = useState({});
  const [customers, setCustomers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCustomerType, setSelectedCustomerType] = useState("");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const itemsPerPage = 6;

  const periodOptions = [
    { key: "last7days", label: t("dashboard.employee.pages.dashboard.dropDown.last7days") },
    { key: "last30days", label: t("dashboard.employee.pages.dashboard.dropDown.last30days") },
    { key: "last60days", label: t("dashboard.employee.pages.dashboard.dropDown.last60days") },
    { key: "last90days", label: t("dashboard.employee.pages.dashboard.dropDown.last90days") },
    { key: "last6months", label: t("dashboard.employee.pages.dashboard.dropDown.last6months") },
    { key: "last12months", label: t("dashboard.employee.pages.dashboard.dropDown.last12months") },
  ];

  // Fetch data
  const fetchReportData = async () => {
    try {
      setLoading(true);
      const data = await ApiService.get("/employee/customerManagementData.json");

      setSummary(data.summary || {});
      setCustomers(data.customers || []);
      setActivities(data.customers || []); // Using customer date for activities
    } catch (error) {
      console.error("Error fetching report data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  const stats = [
    {
      label: "Total Customers",
      value: summary.totalCustomers || 0,
      change: "+13% vs last month",
      positive: true,
      icon: TrendingUp,
      bgColor: "bg-green-50",
    },
    {
      label: "Total Revenue",
      value: summary.totalRevenue || 0,
      change: "+8% vs last month",
      positive: true,
      icon: ShoppingCart,
      bgColor: "bg-blue-50",
    },
    {
      label: "Avg Duration",
      value: summary.avgDuration || 0,
      change: "-5% vs last month",
      positive: false,
      icon: Clock,
      bgColor: "bg-orange-50",
    },
    {
      label: "Pending Payments",
      value: summary.pendingPayments || 0,
      change: "+12% vs last month",
      positive: true,
      icon: CreditCard,
      bgColor: "bg-purple-50",
    },
  ];

  // Filter customers
  const filteredCustomers = customers.filter((customer) => {
    const matchesCustomerType = selectedCustomerType
      ? customer.customerType === selectedCustomerType
      : true;
    const matchesServiceCategory = selectedServiceCategory
      ? customer.serviceCategory === selectedServiceCategory
      : true;
    return matchesCustomerType && matchesServiceCategory;
  });

  // Filter activities by period (last N days)
  const filteredActivities = useMemo(() => {
    const now = new Date();
    let days = 30;

    switch (selectedPeriod) {
      case "last7days":
        days = 7;
        break;
      case "last30days":
        days = 30;
        break;
      case "last60days":
        days = 60;
        break;
      case "last90days":
        days = 90;
        break;
      case "last6months":
        days = 180;
        break;
      case "last12months":
        days = 365;
        break;
    }

    return activities.filter((a) => {
      if (!a.date) return false;

      // Support both YYYY-MM-DD and DD/MM/YYYY formats
      let activityDate = new Date(a.date);
      if (isNaN(activityDate)) {
        // Try DD/MM/YYYY
        const parts = a.date.split("/");
        if (parts.length === 3) {
          activityDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
        }
      }

      if (isNaN(activityDate)) return false;

      const diffDays = (now - activityDate) / (1000 * 60 * 60 * 24);
      return diffDays <= days;
    });
  }, [activities, selectedPeriod]);

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Customer Management</h1>
        <p className="text-sm md:text-base text-gray-600">Manage customer registration and profile setup</p>
      </div>

      {/* Filters & Analytics */}
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Filters & Analytics</h2>

        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          <>
            {/* Period Dropdown */}
            <div className="mb-4 md:mb-6 flex flex-col items-start gap-2 relative">
              <div className="relative w-52">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 md:px-4 md:py-2 bg-white border border-gray-300 rounded-xl text-xs md:text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {periodOptions.find((p) => p.key === selectedPeriod)?.label}
                  {dropdownOpen ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-20">
                    {periodOptions.map((period) => (
                      <button
                        key={period.key}
                        onClick={() => {
                          setSelectedPeriod(period.key);
                          setDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`block w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-gray-100 ${
                          selectedPeriod === period.key ? "bg-gray-50 font-medium text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {period.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <CustomDropdown
                label="Customer Type"
                options={filters.customerTypes}
                value={selectedCustomerType}
                onChange={(val) => {
                  setSelectedCustomerType(val);
                  setCurrentPage(1);
                }}
                placeholder="All Customer Types"
              />

              <CustomDropdown
                label="Service Category"
                options={filters.serviceCategories}
                value={selectedServiceCategory}
                onChange={(val) => {
                  setSelectedServiceCategory(val);
                  setCurrentPage(1);
                }}
                placeholder="All Service Categories"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <div className={`w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className={`text-xs ${stat.positive ? "text-green-600" : "text-red-600"}`}>{stat.change}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Customer Table */}
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Customer Details</h2>

        {loading ? (
          <p className="text-sm text-gray-500">Loading customer data...</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                      Service / Name
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                      Contact
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                      Date
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                      Duration
                    </th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentCustomers.map((customer, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 md:px-6 py-4">
                        <div className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">{customer.serviceName}</div>
                        <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{customer.company}</div>
                      </td>
                      <td className="px-3 md:px-6 py-4">
                        <div className="text-xs md:text-sm text-gray-900 whitespace-nowrap">{customer.contact}</div>
                        <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{customer.phone}</div>
                      </td>
                      <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{customer.date}</td>
                      <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{customer.duration}</td>
                      <td className="px-3 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900 whitespace-nowrap">${customer.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs md:text-sm text-gray-600">
                Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm ${
                    currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm ${
                    currentPage === totalPages || totalPages === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReportAnalysisPage;
