import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { FaRupeeSign } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import AddCustomerModal from "./AddCustomerModal";
import ApiService from "../../services/apiService";
const FieldAgentDashboard = () => {
  const { t } = useTranslation();

  const [statsData, setStatsData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const ICONS = {
    PiUsersThreeBold: PiUsersThreeBold,
    FaRupeeSign: FaRupeeSign,
  };

  const staticCardHeaders = [
    {
      title: t("dashboard.fieldAgent.fieldAgentSummery.userAdded"),
    },
    {
      title: t("dashboard.fieldAgent.fieldAgentSummery.totalcommition"),
    },
    {
      title: t("dashboard.fieldAgent.fieldAgentSummery.totalPayments"),
    },
  ];
  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        setLoading(true);
        const data = await ApiService.get("/fieldAgentData.json"); // call static method directly
        setStatsData(data.statsData);
        setTableData(data.tableData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgentData();
  }, []);

  // Calculate total users and pages based on the fetched data
  const totalUsers = tableData.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  // Determine the data to show on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = tableData.slice(indexOfFirstUser, indexOfLastUser);

  // Helper to generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="   bg-[#FAFFFD] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statsData.map((stat, index) => {
            const IconComponent = ICONS[stat.icon]; // get actual component
            return (
              <div
                key={stat.id}
                className="bg-white rounded-lg shadow-sm p-5 relative"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-black text-sm mb-2">
                      {staticCardHeaders[index].title}
                    </p>

                    <h3 className="text-2xl md:text-4xl font-semi text-black mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-button-primary text-sm font-medium">
                      {stat.change}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} rounded-lg p-3 ml-4`}>
                    {IconComponent && (
                      <IconComponent className="text-white" size={24} />
                    )}
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
              {t("dashboard.fieldAgent.userAdd.AddedByYou")}
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="!bg-button-primary hover:bg-green-600 text-white px-1 sm:px-2 md:px-6 py-0 sm:py-1 md:py-2.5 rounded-sm font-medium flex items-center gap-2 text-sm md:text-base transition-colors"
            >
              <FiUserPlus size={18} />
              {t("dashboard.fieldAgent.userAdd.AddCustomer")}
            </button>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full lg:w-[1800px]">
              <thead className="bg-[#F5F7FA]">
                <tr >
                  {/* Always visible columns */}
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.CustomerList")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.Role")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t(
                      "dashboard.fieldAgent.tableHeader.RegistrationCommission"
                    )}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.FirstOrderCommission")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.EffectiveDate")}
                  </th>

                  {/* Scrollable columns */}
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.RegistrationDate")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.CustomerType")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.NextFollowUpDate")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.ServiceInterest")}
                  </th>
                  <th className="text-left py-4 px-6 text-sm md:text-base font-semibold text-black">
                    {t("dashboard.fieldAgent.tableHeader.QuickActions")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <td className="py-4 px-6 text-sm text-black">{row.customerList}</td>
                    <td className="py-4 px-6 text-sm text-black">{row.role}</td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.registrationCommission}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.firstOrderCommission}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.effectiveDate}
                    </td>

                    {/* Scrollable columns */}
                    <td className="py-4 px-6 text-sm text-black">
                      {row.registrationDate}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.customerType}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.nextFollowUpDate}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.serviceInterest}
                    </td>
                    <td className="py-4 px-6 text-sm text-black">
                      {row.quickActions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="py-4 md:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-2 md:pb-3">
              <p className="text-sm text-black px-4 md:px-6">
                {t("dashboard.fieldAgent.pagination.showing")}{" "}
                {currentUsers.length} of {totalUsers}{" "}
                {t("dashboard.fieldAgent.pagination.users")}
              </p>
              <div className="flex flex-row flex-wrap items-center gap-0.5 sm:gap-2 px-3 sm:px-4 md:px-6">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1} // This is correct, disables on page 1
                  className="px-2 sm:px-3 py-1.5 text-sm text-gray-600 !bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {t("dashboard.fieldAgent.pagination.previous")}
                </button>

                {/* Dynamically create page number buttons */}
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`px-3 py-1.5 text-sm rounded transition-colors ${
                      currentPage === number
                        ? "!bg-button-primary text-white font-medium"
                        : "!bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages} // Disable on the last page
                  className="px-2 sm:px-3 py-1.5 text-sm text-gray-600 !bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {t("dashboard.fieldAgent.pagination.next")}
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
