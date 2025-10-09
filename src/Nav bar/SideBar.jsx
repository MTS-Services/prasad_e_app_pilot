// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Users, ShoppingCart, CreditCard, Headphones, LayoutDashboard, X } from 'lucide-react';

// // সমস্ত role-based menu items
// const allMenuItems = {
//   admin: [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
//     { id: 'customer', label: 'Customer', icon: Users, path: '/customer' },
//     { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/orders' },
//     { id: 'payments', label: 'Payments', icon: CreditCard, path: '/payments' },
//     { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
//   ],
//   marketing: [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
//     { id: 'customer', label: 'Customer', icon: Users, path: '/customer' },
//     { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
//   ],
//   employee: [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
//     { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/orders' },
//   ],
//   fieldAgent: [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
//     { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
//   ],
// };

// const Sidebar = ({ isOpen, onClose, role }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // শুধু নির্দিষ্ট role-এর menu দেখাবে
//   const menuItems = allMenuItems[role] || [];

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-white h-screen z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
//         {/* Logo & Close */}
//         <div className="p-4 md:p-6 bg-white flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <img src="/src/assets/logo-8.png" alt="Logo" className="w-8 h-8 rounded-2xl" />
//             <span className="font-semibold text-gray-900">Demo Logo</span>
//           </div>
//           <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
//             <X className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="p-4 bg-gray-100 h-full overflow-y-auto">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;

//             return (
//               <button
//                 key={item.id}
//                 onClick={() => { navigate(item.path); onClose(); }}
//                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-left ${isActive ? 'bg-white text-green-600 shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="font-medium">{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;





import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Users, ShoppingCart, CreditCard, Headphones, LayoutDashboard, X } from 'lucide-react';

// Role-based menu items
const allMenuItems = {
  admin: [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'customer', label: 'Customer', icon: Users, path: '/customer' },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/orders' },
    { id: 'payments', label: 'Payments', icon: CreditCard, path: '/payments' },
    { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
  ],
  marketing: [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'customer', label: 'Customer', icon: Users, path: '/customer' },
    { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
  ],
  employee: [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/orders' },
  ],
  fieldAgent: [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
  ],
};

const Sidebar = ({ isOpen, onClose, role }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = allMenuItems[role] || [];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-white h-screen z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <nav className="p-4 bg-gray-100 h-full overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.id}
                onClick={() => { navigate(item.path); onClose(); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-left ${isActive ? 'bg-white text-green-600 shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
