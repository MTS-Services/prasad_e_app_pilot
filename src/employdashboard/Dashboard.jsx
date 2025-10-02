// // import { Users, ShoppingCart, CreditCard, Headphones, Eye, TrendingUp, TrendingDown, Menu, X, LayoutDashboard } from 'lucide-react';

// // import { useState } from 'react';
// // import MultiStepRegistrationModal from './MultiStepRegistrationModal';
// // import RegistrationModal from './components/RegistrationModal';

// // const Dashboard = () => {
// //     const [selectedPeriod, setSelectedPeriod] = useState('Last 30 days');
// //    const [open, setOpen] = useState(false);
    

// //     const stats = [
// //         { label: 'Total Customer', value: '2,847', change: '+25% vs last month', trend: 'up', icon: Users },
// //         { label: 'Active orders', value: '438', change: '+15% vs last month', trend: 'up', icon: ShoppingCart },
// //         { label: 'Pending Payments', value: '67', change: '-5% vs last month', trend: 'down', icon: CreditCard },
// //         { label: 'Open tickets', value: '23', change: '+12% vs last month', trend: 'up', icon: Headphones },
// //         { label: 'Complete Order', value: '23', change: '+12% vs last month', trend: 'up', icon: ShoppingCart },
// //         { label: 'Canceled Order', value: '23', change: '-3% vs last month', trend: 'down', icon: ShoppingCart },
// //     ];

// //     const activities = [
// //         {
// //             name: 'Eleanor Pena',
// //             company: 'Agritech Solutions',
// //             contact: 'John@agritech.com',
// //             phone: '(225) 555-0118',
// //             location: 'Gujrat, India',
// //             server: 'Unassigned',
// //             progress: 'In Progress',
// //             priority: 'Low',
// //             avatar: 'EP'
// //         },
// //         {
// //             name: 'Esther Howard',
// //             company: 'Agritech Solutions',
// //             contact: 'John@agritech.com',
// //             phone: '(225) 555-0118',
// //             location: 'Gujrat, India',
// //             server: 'John Doe',
// //             progress: 'In Progress',
// //             priority: 'High',
// //             avatar: 'EH'
// //         },
// //         {
// //             name: 'Theresa Webb',
// //             company: 'Agritech Solutions',
// //             contact: 'John@agritech.com',
// //             phone: '(225) 555-0118',
// //             location: 'Gujrat, India',
// //             server: 'Unassigned',
// //             progress: 'In Progress',
// //             priority: 'Low',
// //             avatar: 'TW'
// //         },
// //         {
// //             name: 'Floyd Miles',
// //             company: 'Agritech Solutions',
// //             contact: 'John@agritech.com',
// //             phone: '(225) 555-0118',
// //             location: 'Gujrat, India',
// //             server: 'Prasad das',
// //             progress: 'In Progress',
// //             priority: 'Medium',
// //             avatar: 'FM'
// //         },
// //         {
// //             name: 'Floyd Miles',
// //             company: 'Agritech Solutions',
// //             contact: 'John@agritech.com',
// //             phone: '(225) 555-0118',
// //             location: 'Gujrat, India',
// //             server: 'Prasad das',
// //             progress: 'In Progress',
// //             priority: 'Medium',
// //             avatar: 'FM'
// //         },
// //         {
// //             name: 'Floyd Miles',
// //             company: 'Agritech Solutions',
// //             contact: 'John@agritech.com',
// //             phone: '(225) 555-0118',
// //             location: 'Gujrat, India',
// //             server: 'Prasad das',
// //             progress: 'In Progress',
// //             priority: 'Medium',
// //             avatar: 'FM'
// //         },
// //     ];

// //     return (
// //         <div className="flex-1 p-4 md:p-8 bg-gray-50">
// //             <div className="mb-4 md:mb-6">
// //                 <h1 className="text-lg md:text-2xl font-bold text-gray-900">
// //                     Dashboard Overview
// //                 </h1>
// //                 <p className="text-xs md:text-base text-gray-600">
// //                     Monitor your customer service performance
// //                 </p>
// //             </div>

// //             <div className="pb-3 md:pb-5">
// //                 <h2 className="text-lg md:text-xl font-normal text-gray-700">
// //                     Last 30 days overview
// //                 </h2>
// //             </div>

// //             <div className="mb-4 md:mb-6 flex">
// //                 <select
// //                     className="px-2 md:px-4 py-1.5 md:py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-base text-gray-700"
// //                     value={selectedPeriod}
// //                     onChange={(e) => setSelectedPeriod(e.target.value)}
// //                 >
// //                     <option>Last 30 days</option>
// //                     <option>Last 7 days</option>
// //                     <option>Last 90 days</option>
// //                 </select>
// //             </div>

// //             <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
// //                 {stats.map((stat, index) => {
// //                     const Icon = stat.icon;
// //                     return (
// //                         <div
// //                             key={index}
// //                             className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200"
// //                         >
// //                             <div className="flex items-start justify-between mb-3 md:mb-4">
// //                                 <span className="text-gray-600 text-xs md:text-sm">{stat.label}</span>
// //                                 <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
// //                             </div>
// //                             <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
// //                                 {stat.value}
// //                             </div>
// //                             <div
// //                                 className={`text-xs md:text-sm flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
// //                             >
// //                                 {stat.trend === "up" ? (
// //                                     <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
// //                                 ) : (
// //                                     <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />
// //                                 )}
// //                                 {stat.change}
// //                             </div>
// //                         </div>
// //                     );
// //                 })}
// //             </div>

// //             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
// //                 <div className="p-4 md:p-6 border-b border-gray-200">
// //                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
// //                         <h2 className="text-lg md:text-xl font-bold text-gray-900">Recent Business Activity</h2>
// //                         <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
// //                             <button
// //                             onClick={() => setOpen(true)}
// //                             className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base">
// //                                 Register New Customer
// //                             </button>
// //                             <button className="px-4 md:px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 font-medium text-sm md:text-base">
// //                                 Assist in Profile Setup
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="overflow-x-auto">
// //                     <table className="w-full min-w-max">
// //                         <thead className="bg-gray-50 border-b border-gray-200">
// //                             <tr>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Service name</th>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Contact</th>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Location</th>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Server</th>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Progress</th>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Priority</th>
// //                                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Action</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody className="divide-y divide-gray-200">
// //                             {activities.map((activity, index) => (
// //                                 <tr key={index} className="hover:bg-gray-50">
// //                                     <td className="px-3 md:px-6 py-4">
// //                                         <div className="flex items-center gap-2 md:gap-3">
// //                                             <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium text-xs md:text-sm">
// //                                                 {activity.avatar}
// //                                             </div>
// //                                             <div className="min-w-0">
// //                                                 <div className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">{activity.name}</div>
// //                                                 <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.company}</div>
// //                                             </div>
// //                                         </div>
// //                                     </td>
// //                                     <td className="px-3 md:px-6 py-4">
// //                                         <div className="text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.contact}</div>
// //                                         <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.phone}</div>
// //                                     </td>
// //                                     <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.location}</td>
// //                                     <td className="px-3 md:px-6 py-4">
// //                                         <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${activity.server === 'Unassigned'
// //                                             ? 'bg-red-100 text-red-700'
// //                                             : 'bg-green-100 text-green-700'
// //                                             }`}>
// //                                             {activity.server}
// //                                         </span>
// //                                     </td>
// //                                     <td className="px-3 md:px-6 py-4">
// //                                         <select className="px-2 md:px-3 py-1 bg-[#394C6B] text-white rounded text-xs md:text-sm">
// //                                             <option>{activity.progress}</option>
// //                                         </select>
// //                                     </td>
// //                                     <td className="px-3 md:px-6 py-4">
// //                                         <span className={`inline-flex px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium whitespace-nowrap ${activity.priority === 'High' ? 'text-red-600' :
// //                                             activity.priority === 'Medium' ? 'text-yellow-600' :
// //                                                 'text-green-600'
// //                                             }`}>
// //                                             {activity.priority}
// //                                         </span>
// //                                     </td>
// //                                     <td className="px-3 md:px-6 py-4">
// //                                         <button className="text-gray-600 hover:text-gray-900">
// //                                             <Eye className="w-4 h-4 md:w-5 md:h-5" />
// //                                         </button>
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>

// //                 <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
// //                     <div className="text-xs md:text-sm text-gray-600">Showing 1 to 4 of 4 results</div>
// //                     <div className="flex gap-2">
// //                         <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50">
// //                             Previous
// //                         </button>
// //                         <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50">
// //                             Next
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //               <RegistrationModal isOpen={open} onClose={() => setOpen(false)} />
// //         </div>
// //     );
// // };


// // export default Dashboard;








// import { Users, ShoppingCart, CreditCard, Headphones, Eye, TrendingUp, TrendingDown, Menu, X, LayoutDashboard } from 'lucide-react';

// import { useState } from 'react';
// import MultiStepRegistrationModal from './MultiStepRegistrationModal';
// import RegistrationModal from './components/RegistrationModal';


// // ============================================
// // DASHBOARD COMPONENT
// // ============================================
// function Dashboard({ onViewCustomer }) {
//   const [selectedPeriod, setSelectedPeriod] = useState('Last 30 days');

//   const stats = [
//     { label: 'Total Customer', value: '2,847', change: '+25% vs last month', trend: 'up', icon: Users },
//     { label: 'Active orders', value: '438', change: '+15% vs last month', trend: 'up', icon: ShoppingCart },
//     { label: 'Pending Payments', value: '67', change: '-5% vs last month', trend: 'down', icon: CreditCard },
//     { label: 'Open tickets', value: '23', change: '+12% vs last month', trend: 'up', icon: Headphones },
//     { label: 'Complete Order', value: '23', change: '+12% vs last month', trend: 'up', icon: ShoppingCart },
//     { label: 'Canceled Order', value: '23', change: '-3% vs last month', trend: 'down', icon: ShoppingCart },
//   ];

//   const activities = [
//     {
//       name: 'Eleanor Pena',
//       company: 'Agritech Solutions',
//       contact: 'John@agritech.com',
//       phone: '(225) 555-0118',
//       location: 'Gujrat, India',
//       server: 'Unassigned',
//       progress: 'In Progress',
//       priority: 'Low',
//       avatar: 'EP'
//     },
//     {
//       name: 'Esther Howard',
//       company: 'Agritech Solutions',
//       contact: 'John@agritech.com',
//       phone: '(225) 555-0118',
//       location: 'Gujrat, India',
//       server: 'John Doe',
//       progress: 'In Progress',
//       priority: 'High',
//       avatar: 'EH'
//     },
//     {
//       name: 'Theresa Webb',
//       company: 'Agritech Solutions',
//       contact: 'John@agritech.com',
//       phone: '(225) 555-0118',
//       location: 'Gujrat, India',
//       server: 'Unassigned',
//       progress: 'In Progress',
//       priority: 'Low',
//       avatar: 'TW'
//     },
//     {
//       name: 'Floyd Miles',
//       company: 'Agritech Solutions',
//       contact: 'John@agritech.com',
//       phone: '(225) 555-0118',
//       location: 'Gujrat, India',
//       server: 'Prasad das',
//       progress: 'In Progress',
//       priority: 'Medium',
//       avatar: 'FM'
//     },
//   ];

//   return (
//     <div className="flex-1 p-4 md:p-8 bg-gray-50">
//       <div className="mb-4 md:mb-6">
//         <h1 className="text-lg md:text-2xl font-bold text-gray-900">Dashboard Overview</h1>
//         <p className="text-xs md:text-base text-gray-600">Monitor your customer service performance</p>
//       </div>

//       <div className="pb-3 md:pb-5">
//         <h2 className="text-lg md:text-xl font-normal text-gray-700">Last 30 days overview</h2>
//       </div>

//       <div className="mb-4 md:mb-6 flex">
//         <select
//           className="px-2 md:px-4 py-1.5 md:py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-base text-gray-700"
//           value={selectedPeriod}
//           onChange={(e) => setSelectedPeriod(e.target.value)}
//         >
//           <option>Last 30 days</option>
//           <option>Last 7 days</option>
//           <option>Last 90 days</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
//               <div className="flex items-start justify-between mb-3 md:mb-4">
//                 <span className="text-gray-600 text-xs md:text-sm">{stat.label}</span>
//                 <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
//               </div>
//               <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//               <div className={`text-xs md:text-sm flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
//                 {stat.trend === "up" ? (
//                   <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
//                 ) : (
//                   <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />
//                 )}
//                 {stat.change}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//         <div className="p-4 md:p-6 border-b border-gray-200">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <h2 className="text-lg md:text-xl font-bold text-gray-900">Recent Business Activity</h2>
//             <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
//               <button className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base">
//                 Register New Customer
//               </button>
//               <button className="px-4 md:px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 font-medium text-sm md:text-base">
//                 Assist in Profile Setup
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-max">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Service name</th>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Contact</th>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Location</th>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Server</th>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Progress</th>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Priority</th>
//                 <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {activities.map((activity, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-3 md:px-6 py-4">
//                     <div className="flex items-center gap-2 md:gap-3">
//                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium text-xs md:text-sm">
//                         {activity.avatar}
//                       </div>
//                       <div className="min-w-0">
//                         <div className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">{activity.name}</div>
//                         <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.company}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4">
//                     <div className="text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.contact}</div>
//                     <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.phone}</div>
//                   </td>
//                   <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.location}</td>
//                   <td className="px-3 md:px-6 py-4">
//                     <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${activity.server === 'Unassigned' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
//                       {activity.server}
//                     </span>
//                   </td>
//                   <td className="px-3 md:px-6 py-4">
//                     <select className="px-2 md:px-3 py-1 bg-gray-700 text-white rounded text-xs md:text-sm">
//                       <option>{activity.progress}</option>
//                     </select>
//                   </td>
//                   <td className="px-3 md:px-6 py-4">
//                     <span className={`inline-flex px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium whitespace-nowrap ${activity.priority === 'High' ? 'text-red-600' : activity.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>
//                       {activity.priority}
//                     </span>
//                   </td>
//                   <td className="px-3 md:px-6 py-4">
//                     <button 
//                       onClick={() => onViewCustomer(activity)}
//                       className="text-gray-600 hover:text-gray-900"
//                     >
//                       <Eye className="w-4 h-4 md:w-5 md:h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="text-xs md:text-sm text-gray-600">Showing 1 to 4 of 4 results</div>
//           <div className="flex gap-2">
//             <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50">
//               Previous
//             </button>
//             <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Dashboard;








import { Users, ShoppingCart, CreditCard, Headphones, Eye, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 days');
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Customer', value: '2,847', change: '+25% vs last month', trend: 'up', icon: Users },
    { label: 'Active orders', value: '438', change: '+15% vs last month', trend: 'up', icon: ShoppingCart },
    { label: 'Pending Payments', value: '67', change: '-5% vs last month', trend: 'down', icon: CreditCard },
    { label: 'Open tickets', value: '23', change: '+12% vs last month', trend: 'up', icon: Headphones },
    { label: 'Complete Order', value: '23', change: '+12% vs last month', trend: 'up', icon: ShoppingCart },
    { label: 'Canceled Order', value: '23', change: '-3% vs last month', trend: 'down', icon: ShoppingCart },
  ];

  const activities = [
    {
      id: 1,
      name: 'Eleanor Pena',
      company: 'Agritech Solutions',
      contact: 'John@agritech.com',
      phone: '(225) 555-0118',
      location: 'Gujrat, India',
      server: 'Unassigned',
      progress: 'In Progress',
      priority: 'Low',
      avatar: 'EP'
    },
    {
      id: 2,
      name: 'Esther Howard',
      company: 'Agritech Solutions',
      contact: 'John@agritech.com',
      phone: '(225) 555-0118',
      location: 'Gujrat, India',
      server: 'John Doe',
      progress: 'In Progress',
      priority: 'High',
      avatar: 'EH'
    },
    {
      id: 3,
      name: 'Theresa Webb',
      company: 'Agritech Solutions',
      contact: 'John@agritech.com',
      phone: '(225) 555-0118',
      location: 'Gujrat, India',
      server: 'Unassigned',
      progress: 'In Progress',
      priority: 'Low',
      avatar: 'TW'
    },
    {
      id: 4,
      name: 'Floyd Miles',
      company: 'Agritech Solutions',
      contact: 'John@agritech.com',
      phone: '(225) 555-0118',
      location: 'Gujrat, India',
      server: 'Prasad das',
      progress: 'In Progress',
      priority: 'Medium',
      avatar: 'FM'
    },
  ];

  // Eye icon click করলে customer page এ যাবে
  const handleViewCustomer = (customer) => {
    navigate(`/customer/${customer.id}`, { state: { customer } })
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50">
      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-xs md:text-base text-gray-600">Monitor your customer service performance</p>
      </div>

      <div className="pb-3 md:pb-5">
        <h2 className="text-lg md:text-xl font-normal text-gray-700">Last 30 days overview</h2>
      </div>

      <div className="mb-4 md:mb-6 flex">
        <select
          className="px-2 md:px-4 py-1.5 md:py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-base text-gray-700"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <span className="text-gray-600 text-xs md:text-sm">{stat.label}</span>
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
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
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Recent Business Activity</h2>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base">
                Register New Customer
              </button>
              <button className="px-4 md:px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 font-medium text-sm md:text-base">
                Assist in Profile Setup
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Service name</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Contact</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Location</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Server</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Progress</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Priority</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-3 md:px-6 py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium text-xs md:text-sm">
                        {activity.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">{activity.name}</div>
                        <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4">
                    <div className="text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.contact}</div>
                    <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{activity.phone}</div>
                  </td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-900 whitespace-nowrap">{activity.location}</td>
                  <td className="px-3 md:px-6 py-4">
                    <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${activity.server === 'Unassigned' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {activity.server}
                    </span>
                  </td>
                  <td className="px-3 md:px-6 py-4">
                    <select className="px-2 md:px-3 py-1 bg-gray-700 text-white rounded text-xs md:text-sm">
                      <option>{activity.progress}</option>
                    </select>
                  </td>
                  <td className="px-3 md:px-6 py-4">
                    <span className={`inline-flex px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium whitespace-nowrap ${activity.priority === 'High' ? 'text-red-600' : activity.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>
                      {activity.priority}
                    </span>
                  </td>
                  <td className="px-3 md:px-6 py-4">
                    <button 
                      onClick={() => handleViewCustomer(activity)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Eye className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-gray-600">Showing 1 to 4 of 4 results</div>
          <div className="flex gap-2">
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;