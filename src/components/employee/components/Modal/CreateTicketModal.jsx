import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const priorities = ["Low", "Medium", "High"];
const categories = ["Technical Issue", "Billing Issue", "Other"];
const services = ["Mapping & Surveying", "Installation", "Maintenance"];

// ✅ Reusable Dropdown Component
const Dropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="text-sm font-medium text-gray-700 block mb-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 text-sm bg-white 
        transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:outline-none hover:border-green-400`}
      >
        <span className={`${selected ? "text-gray-800" : "text-gray-400"}`}>
          {selected || `Select ${label}`}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-500 transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-200 transform transition-all duration-200 origin-top ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <div
            key={option}
            onClick={() => {
              setSelected(option);
              setOpen(false);
            }}
            className={`px-3 py-2 cursor-pointer text-sm hover:bg-green-100 transition ${
              selected === option ? "bg-green-50 font-medium" : ""
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const CreateTicketModal = ({ isOpen, onClose }) => {
  const [customer, setCustomer] = useState("");
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !customer ||
      !issueTitle ||
      !issueDescription ||
      !selectedPriority ||
      !selectedCategory ||
      !selectedService
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Success toast
    toast.success("Ticket created successfully!");

    // Close modal after short delay
    setTimeout(() => {
      onClose();
      // Clear form
      setCustomer("");
      setIssueTitle("");
      setIssueDescription("");
      setSelectedPriority("");
      setSelectedCategory("");
      setSelectedService("");
    }, 1000);
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-2">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Create a Ticket</h2>
            <button
              onClick={onClose}
              className="text-gray-500 text-xl hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-4 pt-4 pb-4 space-y-3">
            {/* Customer */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Customer <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter customer name or phone number"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
              />
            </div>

            {/* Priority & Category */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Dropdown
                label="Priority"
                options={priorities}
                selected={selectedPriority}
                setSelected={setSelectedPriority}
              />
              <Dropdown
                label="Category"
                options={categories}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </div>

            {/* Issue Title */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Issue Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Brief description of the issue"
                value={issueTitle}
                onChange={(e) => setIssueTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
              />
            </div>

            {/* Service Type */}
            <Dropdown
              label="Service Type"
              options={services}
              selected={selectedService}
              setSelected={setSelectedService}
            />

            {/* Issue Description */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Issue Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Detailed description of the customer's issue..."
                rows="4"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-md py-2 transition"
            >
              Create Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTicketModal;
