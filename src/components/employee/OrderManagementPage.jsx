import { useState, useEffect } from 'react';
import { Eye, Plus, Calendar, X } from 'lucide-react';
import ApiService from '../../services/apiService';
import ServiceRequestModal from './components/Modal/ServiceRequestModal';
import ResheduleServiceModal from './components/Modal/ResheduleServiceModal';
import CancleModal from './components/Modal/CancleModal';
import { useTranslation } from 'react-i18next';

const OrderManagementPage = () => {
  const [activities, setActivities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResheduleModalOpen, setIsResheduleModalOpen] = useState(false);
  const [cancleModal, setCancleModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleCreateServiceModal = (formdata) => {
    console.log('Form data received in parent:', formdata);
  };
  const handleResheduleModal = (formdata) => {
    console.log('Form data received in parent:', formdata);
  };
  const handleCancleModal = (formdata) => {
    console.log('Form data received in parent:', formdata);
  };

  // Fetch activities via ApiService (Axios)
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const data = await ApiService.get('/order.json');
        console.log("all data ", data)
        setActivities(data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching activities:', err);
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentActivities = activities.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50">
      <div className="mb-2 md:mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{t('dashboard.employee.title.orderPageTitle')}</h1>
        <p className="text-sm md:text-base text-gray-600 pt-2">{t('dashboard.employee.subTitle.orderpageSub')}</p>
      </div>

      <div className="flex gap-2 md:gap-3 mb-2 md:mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base"
        >
          <Plus className="inline-block w-6 h-8 mr-1 -ml-1 " />
          {t('dashboard.employee.button.createServiceRequest')}
        </button>
        <button
          onClick={() => setIsResheduleModalOpen(true)} 
          className="px-4 md:px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 font-medium text-sm md:text-base"
        >
          <Calendar className="inline-block w-6 h-8 mr-1 -ml-1 " />
           {t('dashboard.employee.button.reshedule')}
        </button>
        <button
          onClick={() => setCancleModal(true)}
          className="px-4 md:px-6 py-2 bg-[#DC3545] text-white rounded-lg hover:bg-red-700 font-medium text-sm md:text-base"
        >
          <X className="inline-block w-6 h-8 mr-1 -ml-1 " />
          {t('dashboard.employee.button.cancel')}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">{t('dashboard.employee.table.tableTitle')}</h2>
          </div>
        </div>

        {loading && <div className="p-4 text-gray-700">Loading...</div>}
        {error && <div className="p-4 text-red-600">{error}</div>}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.orderIdName')}</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.serviceName')}</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.location')}</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.assignTo')}</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.progress')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.priority')}</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{t('dashboard.employee.table.action')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentActivities.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 md:px-6 py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="min-w-0">
                          <div className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">{activity.orderId}</div>
                          <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.customerName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <div className="text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.serviceName}</div>
                      <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.date}</div>
                    </td>
                    <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.location}</td>
                    <td className="px-3 md:px-6 py-4">
                      <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${activity.assignTo === 'Unassigned'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                        }`}>
                        {activity.assignTo}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <select className="px-2 md:px-3 py-1 bg-[#394C6B] text-white rounded text-xs md:text-sm">
                        <option>{activity.progress}</option>
                      </select>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <span className={`inline-flex px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium whitespace-nowrap ${activity.priority === 'High' ? 'text-red-600' :
                        activity.priority === 'Medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                        {activity.priority}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-4">
                      <button className="text-gray-600 hover:text-gray-900">
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-gray-600">Showing 1 to {activities.length} of {activities.length} results</div>
          <div className="flex gap-2">
            <button
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

        </div>
      </div>
      <ServiceRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCreateServiceModal} />
      <ResheduleServiceModal isOpen={isResheduleModalOpen} onClose={() => setIsResheduleModalOpen(false)} onSubmit={handleResheduleModal} />
      <CancleModal isOpen={cancleModal} onClose={() => setCancleModal(false)} onSubmit={handleCancleModal} />
    </div>
  );
};

export default OrderManagementPage;
