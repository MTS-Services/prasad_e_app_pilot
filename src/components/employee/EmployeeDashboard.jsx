// import React, { useState } from "react";
// import Coustomerpage from "./Coustomerpage";
// import OrderManagementPage from "./OrderManagementPage";
// import PaymentManagement from "./PaymentManagement";
// import SupportPage from "./SupportPage";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./DashBoard";

// const EmployeeDashboard = () => {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

  
//   const renderContent = () => {
//     switch (activeSection) {
//       case "dashboard":
//         return <Dashboard/>; 
//       case "customer":
//         return <Coustomerpage />;
//       case "orders":
//         return <OrderManagementPage />;
//       case "payments":
//         return <PaymentManagement />;
//       case "support":
//         return <SupportPage />;
//       default:
//         return <div>Page not found</div>;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//       />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
//         {/* Top space for mobile */}
//         <div className="lg:hidden h-20"></div>

//         {/* Main content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;








import React, { useState } from "react";
import Coustomerpage from "./Coustomerpage";
import OrderManagementPage from "./OrderManagementPage";
import PaymentManagement from "./PaymentManagement";
import SupportPage from "./SupportPage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./DashBoard";

import OrderDetailsPage from "./OrderDetailsPage";
import CustomerDetailsPage from "./components/CustomeDetailsPage";

const EmployeeDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewCustomerDetails = (customer) => {
    setSelectedCustomer(customer);
    setActiveSection("customerDetails");
  };

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setActiveSection("orderDetails");
  };

  const handleBackToDashboard = () => {
    setActiveSection("dashboard");
    setSelectedCustomer(null);
    setSelectedOrder(null);
  };

  const handleBackToCustomerDetails = () => {
    setActiveSection("customerDetails");
    setSelectedOrder(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard onViewCustomerDetails={handleViewCustomerDetails} />; 
      case "customerDetails":
        return (
          <CustomerDetailsPage
            customer={selectedCustomer}
            onBack={handleBackToDashboard}
            onViewOrderDetails={handleViewOrderDetails}
          />
        );
      case "orderDetails":
        return (
          <OrderDetailsPage 
            order={selectedOrder}
          onBack={handleBackToCustomerDetails}
          />
        );
      case "customer":
        return <Coustomerpage />;
      case "orders":
        return <OrderManagementPage />;
      case "payments":
        return <PaymentManagement />;
      case "support":
        return <SupportPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection === "customerDetails" || activeSection === "orderDetails" ? "dashboard" : activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <div className="lg:hidden h-20"></div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

