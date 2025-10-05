



import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Home } from 'lucide-react';

function CustomerDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerId } = useParams();

  // se
  const customer = location.state?.customer;

  const customerData = {
    name: customer?.name || 'Albert Flores',
    email: 'albert.flores@gmail.com',
    address: '2118 Thornridge Dr, Syracuse, Connecticut 35624',
    location: { latitude: '23.8103° N', longitude: '90.4125° E' }
  };

  const orders = [
    {
      id: 1,
      service: 'Agro Drone Service',
      description: 'Precision crop monitoring and field insights powered by aerial data.',
      image: 4, videos: 2, inf: 1,
      time: '10 minutes ago',
      date: '8 Sep, 2023'
    },
    {
      id: 2,
      service: 'Agro Drone Service',
      description: 'Precision crop monitoring and field insights powered by aerial data.',
      image: 4, videos: 2, inf: 1,
      time: '10 minutes ago',
      date: '8 Sep, 2023'
    },
    {
      id: 3,
      service: 'Agro Drone Service',
      description: 'Precision crop monitoring and field insights powered by aerial data.',
      image: 4, videos: 2, inf: 1,
      time: '10 minutes ago',
      date: '8 Sep, 2023'
    },
    {
      id: 3,
      service: 'Agro Drone Service',
      description: 'Precision crop monitoring and field insights powered by aerial data.',
      image: 4, videos: 2, inf: 1,
      time: '10 minutes ago',
      date: '8 Sep, 2023'
    },
    {
      id: 3,
      service: 'Agro Drone Service',
      description: 'Precision crop monitoring and field insights powered by aerial data.',
      image: 4, videos: 2, inf: 1,
      time: '10 minutes ago',
      date: '8 Sep, 2023'
    },
    {
      id: 4,
      service: 'Agro Drone Service',
      description: 'Precision crop monitoring and field insights powered by aerial data.',
      image: 4, videos: 2, inf: 1,
      time: '10 minutes ago',
      date: '8 Sep, 2023'
    }
  ];

  // Order Details button click handler
  const handleOrderClick = (order) => {
    navigate(`/order/${order.id}`, { state: { order, customer } });
  };

  // Go to Dashboard button
  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex-1 p-4 md:p-8">
        <button
          onClick={handleBackToDashboard}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
        >
          <Home className="w-4 h-4" />
          back
        </button>
<div className="bg-white border border-gray-100 rounded-xl shadow-sm lg:bg-transparent lg:border-0 lg:shadow-none p-4 sm:p-5 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-5 lg:gap-6">

            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 flex-1 text-center sm:text-left">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="Customer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{customerData.name}</h2>
                <p className="text-sm text-gray-600 mb-0.5">{customerData.email}</p>
                <p className="text-xs sm:text-sm text-gray-500">{customerData.address}</p>
              </div>
            </div>

            {/* Location Box */}
            <div className="bg-green-50 border border-green-100 px-4 py-2 sm:px-5 sm:py-3 rounded-lg w-full sm:w-auto">
              <div className="text-[11px] sm:text-xs text-gray-600 mb-1 font-medium">New Field (India Gate-wal)</div>
              <div className="text-xs sm:text-sm text-gray-800">
                Latitude: <span className="font-semibold">{customerData.location.latitude}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-800">
                Longitude: <span className="font-semibold">{customerData.location.longitude}</span>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Total Order Complete <span className="text-gray-600">( {orders.length} )</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {orders.map((order) => (
              <div key={order.id} className="bg-[rgba(247,255,229,1)] border border-green-100 rounded-xl p-5">
                <div className="flex gap-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <img src="https://cdn-icons-png.flaticon.com/512/3629/3629941.png" alt="Drone" className="w-10 h-10 opacity-80" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1.5 text-base">{order.service}</h4>
                    <p className="text-sm text-gray-600 leading-snug">{order.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm text-gray-700">
                  <span className="font-medium">{order.image} Image</span>
                  <span className="font-medium">{order.videos} Videos</span>
                  <span className="font-medium">{order.inf} Inf</span>
                  <span className="ml-auto text-xs text-gray-500">{order.time}</span>
                </div>

                <button
                  onClick={() => handleOrderClick(order)}
                  className="w-full bg-[#00C805] hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm shadow-sm"
                >
                  Order Details
                </button>


              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">KYC Document</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex items-center justify-center relative">
              <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-xs">
                <div className="text-center py-4">
                  <div className="text-sm font-bold text-gray-700">AADHAAR CARD</div>
                  <div className="text-xs text-gray-500 mt-2">Sample Document</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex items-center justify-center">
              <div className="bg-purple-50 rounded-xl shadow-2xl p-6 w-full max-w-sm border-2 border-purple-200">
                <div className="text-center py-4">
                  <div className="text-sm font-bold text-purple-900">PASSPORT</div>
                  <div className="text-xs text-purple-600 mt-2">Sample Document</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;