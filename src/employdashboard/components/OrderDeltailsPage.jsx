
// function OrderDetailsPage({ order, onBackToDashboard, onBackToCustomer }) {
//   const orderDetailsData = {
//     service: 'Agro Drone Service',
//     customerId: 'Service Order ID',
//     customerInfo: 'Customer Info ID',
//     images: [
//       'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500',
//       'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500',
//       'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500',
//       'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=500'
//     ],
//     videos: [
//       'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500',
//       'https://images.unsplash.com/photo-1588022274632-8b629ca80047?w=500'
//     ],
//     rating: 4,
//     reviews: 125
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-4xl mx-auto p-6">
//         <div className="flex gap-3 mb-6">
//           <button 
//             onClick={onBackToCustomer}
//             className="px-4 py-2 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 text-sm border border-green-300 rounded-lg hover:bg-green-50 transition-colors"
//           >
//             ← Back to Customer
//           </button>
//           <button 
//             onClick={onBackToDashboard}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm"
//           >
//             <Home className="w-4 h-4" />
//             Go to Dashboard
//           </button>
//         </div>

//         <div className="space-y-6">
//           <div className="pb-6 border-b">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded">Service:</span>
//               <h2 className="text-xl font-bold text-gray-900">{orderDetailsData.service}</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <div className="text-xs text-gray-500 mb-1">Service Order ID</div>
//                 <div className="font-semibold text-gray-900">{orderDetailsData.customerId}</div>
//               </div>
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <div className="text-xs text-gray-500 mb-1">Customer Info ID</div>
//                 <div className="font-semibold text-gray-900">{orderDetailsData.customerInfo}</div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               Images
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {orderDetailsData.images.map((img, idx) => (
//                 <div key={idx} className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
//                   <img src={img} alt={`Field ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               Videos
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {orderDetailsData.videos.map((video, idx) => (
//                 <div key={idx} className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-200">
//                   <img src={video} alt={`Video ${idx + 1}`} className="w-full h-full object-cover" />
//                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
//                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                       <Play className="w-7 h-7 text-green-600 ml-1" fill="currentColor" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               Customer Feedback
//             </h3>
//             <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
//               <div className="mb-5">
//                 <div className="text-sm text-gray-600 mb-2 font-medium">Rate Your Drone Operator</div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star 
//                         key={star} 
//                         className={`w-7 h-7 ${star <= orderDetailsData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
//                       />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-600 font-medium">({orderDetailsData.reviews})</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-600 mb-2 font-medium">Review</div>
//                 <div className="bg-white p-4 rounded-lg border border-green-200">
//                   <p className="text-gray-700 text-sm leading-relaxed">Great service! The drone operator was very professional.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderDetailsPage;






import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Home, Play, Star } from 'lucide-react';

function OrderDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = useParams();
  
  const order = location.state?.order;
  const customer = location.state?.customer;

  const orderDetailsData = {
    service: 'Agro Drone Service',
    customerId: 'Service Order ID',
    customerInfo: 'Customer Info ID',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500',
      'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=500'
    ],
    videos: [
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500',
      'https://images.unsplash.com/photo-1588022274632-8b629ca80047?w=500'
    ],
    rating: 4,
    reviews: 125
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  const handleBackToCustomer = () => {
    if (customer) {
      navigate(`/customer/${customer.id}`, { state: { customer } });
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex gap-3 mb-6">
          <button 
            onClick={handleBackToCustomer}
            className="px-4 py-2 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 text-sm border border-green-300 rounded-lg hover:bg-green-50 transition-colors"
          >
            ← Back to Customer
          </button>
          <button 
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            Go to Dashboard
          </button>
        </div>

        <div className="space-y-6">
          <div className="pb-6 border-b">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded">Service:</span>
              <h2 className="text-xl font-bold text-gray-900">{orderDetailsData.service}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Service Order ID</div>
                <div className="font-semibold text-gray-900">{orderDetailsData.customerId}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Customer Info ID</div>
                <div className="font-semibold text-gray-900">{orderDetailsData.customerInfo}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Images
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {orderDetailsData.images.map((img, idx) => (
                <div key={idx} className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <img src={img} alt={`Field ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {orderDetailsData.videos.map((video, idx) => (
                <div key={idx} className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-200">
                  <img src={video} alt={`Video ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-green-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Customer Feedback
            </h3>
            <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-2 font-medium">Rate Your Drone Operator</div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-7 h-7 ${star <= orderDetailsData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">({orderDetailsData.reviews})</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2 font-medium">Review</div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="text-gray-700 text-sm leading-relaxed">Great service! The drone operator was very professional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;