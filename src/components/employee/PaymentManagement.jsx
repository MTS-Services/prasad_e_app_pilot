

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MdOutlinePayment, MdPercent } from "react-icons/md";
import ApiService from '../../services/apiService';
import CollectPaymentModal from './components/Modal/CollectPaymentModa';
import ApplyDiscountModal from './components/Modal/ApplyDiscountModal';
import ResolveBillingModal from './components/Modal/ResolveBillingModal';

const PaymentManagement = () => {
  const { t, i18n } = useTranslation();
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [stats, setStats] = useState([]);
    // 3 ta alada state - prottek modal er jonno
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Fetch JSON Data Once
  const fetchTransactions = async () => {
    try {
      const data = await ApiService.get('/payment.json');
      setRecentTransactions(data.transactions);
      return data; // return data for stats calculation
    } catch (error) {
      console.error('Error fetching transactions:', error.message);
      return null;
    }
  };

  const updateStats = (data) => {
    if (!data) return;
    setStats([
      { label: t("dashboard.employee.pages.payment.card.todaysCollections"),
         value: data.summary.todaysCollections, change: '+25% vs last month', 
         trend: 'up' },
      { label: t("dashboard.employee.pages.payment.card.pendingPayments"), 
        value: data.summary.pendingPayments.amount, change: '+15% vs last month', 
        trend: 'up' },
      { label: t("dashboard.employee.pages.payment.card.refundProcessed"), 
        value: data.summary.refundProcessed.amount, change: '-5% vs last month', 
        trend: 'down' },
    ]);
  };

  useEffect(() => {
    let transactionData = null;

    const init = async () => {
      transactionData = await fetchTransactions();
      updateStats(transactionData);
    };

    init();

    // Recalculate stats on language change
    const handleLanguageChange = () => updateStats(transactionData);
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Pagination Logic
  const totalPages = Math.ceil(recentTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = recentTransactions.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => { if (currentPage > 1) setCurrentPage(prev => prev - 1); };
  const handleNext = () => { if (currentPage < totalPages) setCurrentPage(prev => prev + 1); };

  return (
    <div className="flex-1 p-4 md:p-8">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
         {t('dashboard.employee.title.paymentPageTitle')}
        </h1>
        <p className="text-xs md:text-base  text-gray-600">
         {t('dashboard.employee.subTitle.paymentpageSub')}
        </p>
      </div>

      {/* Buttons */}
    <div className="flex gap-2 md:gap-3 mb-2 md:mb-4">
  <button
    onClick={() => setIsPaymentModalOpen(true)}
  className="px-3 md:px-6 py-2 md:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-xs md:text-sm lg:text-base flex items-center">
    <MdOutlinePayment className="w-4 h-5 md:w-6 md:h-8 mr-1 -ml-1" />
    {t('dashboard.employee.button.collectPayment')}
  </button>

  <button
   onClick={() => setIsDiscountModalOpen(true)}
  className="px-3 md:px-6 py-2 md:py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 font-medium text-xs md:text-sm lg:text-base flex items-center">
    <MdPercent className="w-4 h-5 md:w-6 md:h-8 mr-1 -ml-1" />
    {t('dashboard.employee.button.discount')}
  </button>

  <button
    onClick={() => setIsBillingModalOpen(true)}
  className="px-3 md:px-6 py-2 md:py-2 bg-[#DC3545] text-white rounded-lg hover:bg-red-700 font-medium text-xs md:text-sm lg:text-base flex items-center">
    <Wrench className="w-4 h-5 md:w-6 md:h-8 mr-1 -ml-1" />
    {t('dashboard.employee.button.billing')}
  </button>
</div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 ${index === 2 ? "col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <span className="text-gray-600 text-xs md:text-sm">{stat.label}</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className={`text-xs md:text-sm flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {stat.trend === "up" ? (
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              ) : (
                <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />
              )}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">{t('dashboard.employee.table.tableTitle')}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.serviceName')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.serviceDate')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.payment')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.discount')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.outstanding')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.progress')}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {paginatedTransactions.map((txn, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 md:px-6 py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">{txn.serviceId}</div>
                        <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{txn.customerName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{txn.serviceDate}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{txn.payment}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{txn.discount}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{txn.outstanding}</td>
                  <td className="px-3 md:px-6 py-4">
                    <span
                      className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${txn.progress === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : txn.progress === 'Processed'
                          ? 'bg-blue-100 text-blue-700'
                          : txn.progress === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      {txn.progress}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, recentTransactions.length)} of {recentTransactions.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
       <CollectPaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
      <ApplyDiscountModal
        isOpen={isDiscountModalOpen} 
        onClose={() => setIsDiscountModalOpen(false)} 
      />
      <ResolveBillingModal 
        isOpen={isBillingModalOpen} 
        onClose={() => setIsBillingModalOpen(false)} 
      />
    </div>
  );
};

export default PaymentManagement;
