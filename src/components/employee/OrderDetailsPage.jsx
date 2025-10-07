
import React, { useState } from "react";
import { ArrowLeft, Package, Globe } from "lucide-react";


// Order Details Page Component
const OrderDetailsPage = ({ order, onBack }) => {
  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Customer Details</span>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Order Details</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{order?.id || "ORD-001"}</h2>
            <p className="text-gray-600">Order Number</p>
          </div>
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700">
            Completed
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Service Name</p>
            <p className="text-lg font-semibold text-gray-900">{order?.serviceName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Description</p>
            <p className="text-gray-900">{order?.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Images</p>
              <p className="text-lg font-semibold text-gray-900">{order?.images}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Videos</p>
              <p className="text-lg font-semibold text-gray-900">{order?.videos}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">PDFs</p>
              <p className="text-lg font-semibold text-gray-900">{order?.pdfs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  export default OrderDetailsPage