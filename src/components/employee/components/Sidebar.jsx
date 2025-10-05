import React from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  LayoutDashboard,
  User,
  ShoppingCart,
  CreditCard,
  Headphones,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen, activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "customer", label: "Customer", icon: User },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "support", label: "Support", icon: Headphones },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      {!sidebarOpen && (
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          >
            <HiMenuAlt3 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <h2 className="text-lg font-semibold text-green-600">Employee Panel</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 ml-4 flex-shrink-0"
            >
              <HiX className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-3 py-4 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg mb-1 transition-all duration-200 ${
                    isActive
                      ? "bg-white  border-l-4 border-green-600 font-semibold shadow-sm"
                      : "text-black hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? "text-green-600" : "text-gray-500"}`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;





// import React from "react";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import {
//   LayoutDashboard,
//   User,
//   ShoppingCart,
//   CreditCard,
//   Headphones,
// } from "lucide-react";

// const Sidebar = ({ sidebarOpen, setSidebarOpen, activeSection, setActiveSection }) => {
//   const menuItems = [
//     { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
//     { id: "customer", label: "Customer", icon: User },
//     { id: "orders", label: "Orders", icon: ShoppingCart },
//     { id: "payments", label: "Payments", icon: CreditCard },
//     { id: "support", label: "Support", icon: Headphones },
//   ];

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       {!sidebarOpen && (
//         <div className="lg:hidden fixed top-4 left-4 z-50">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
//           >
//             <HiMenuAlt3 className="w-5 h-5 text-gray-700" />
//           </button>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-400 shadow-lg transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:static lg:inset-0
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Logo Section */}
//           <div className="flex items-center justify-between h-16 px-4 border-b">
//             <h2 className="text-lg font-semibold text-green-600">Employee Panel</h2>
//             <button
//               onClick={() => setSidebarOpen(false)}
//               className="lg:hidden p-2 rounded-md hover:bg-gray-100 ml-4 flex-shrink-0"
//             >
//               <HiX className="w-5 h-5 text-gray-500" />
//             </button>
//           </div>

//           {/* Menu Items */}
//           <nav className="flex-1 px-3 py-4 overflow-y-auto">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = activeSection === item.id; 

//               return (
//                 <button
//                   key={item.id}
//                   type="button"
//                   onClick={() => setActiveSection(item.id)}
//                   className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg mb-1 transition-all duration-200
//                     ${isActive
//                       ? "bg-green-50 text-green-700 border-l-4 border-green-600 font-semibold shadow-sm"
//                       : "text-gray-800 hover:bg-gray-50"
//                     }`}
//                 >
//                   <Icon
//                     className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-green-600" : "text-gray-500"}`}
//                   />
//                   <span className="truncate">{item.label}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black/40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
