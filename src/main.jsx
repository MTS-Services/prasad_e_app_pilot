import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AppLayout from "../src/AppLayout"
import MarketDashboard from "./marketDashboard/MarketDashboard";

export const NotFound = () => (
  <div className="p-8 text-2xl font-bold">404 - Page Not Found</div>
);

const router = createBrowserRouter([
    {
      path : "/",
      Component : AppLayout,
      children : [
        {
          index : true,
          Component : MarketDashboard,
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
