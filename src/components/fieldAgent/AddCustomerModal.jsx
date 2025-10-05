import React, { useState } from "react";
import { ChevronLeft, MapPin, Upload, XCircle } from "lucide-react";

const INITIAL_FORM = {
  firstName: "",
  middleName: "",
  lastName: "",
  alsoKnownAs: "",
  phone: "",
  email: "",
  geoLocation: "",
  district: "",
  mandal: "",
  village: "",
  registeredBy: "",
  kycDocument: "",
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  industry: "",
  lat1: "",
  lat2: "",
  lat3: "",
  acres: "",
};

export default function AddCustomerModal({ isOpen, onClose }) {
  const [modalStep, setModalStep] = useState(1);
  const [validationError, setValidationError] = useState("");
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleInputChange = (e) => {
    if (validationError) setValidationError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleClose = () => {
    setModalStep(1);
    setValidationError("");
    setFormData(INITIAL_FORM);
    onClose();
  };

  const validateStep = () => {
    if (modalStep === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.phone ||
        !formData.geoLocation ||
        !formData.registeredBy
      ) {
        return "Please fill all required fields in Customer Info (* marked).";
      }
    }
    if (modalStep === 2) {
      if (
        !formData.street ||
        !formData.city ||
        !formData.state ||
        !formData.postalCode ||
        !formData.country ||
        !formData.industry
      ) {
        return "Please fill all required fields in Address Details (* marked).";
      }
    }
    return "";
  };

  const nextStep = () => {
    const error = validateStep();
    if (error) {
      setValidationError(error);
      return;
    }
    if (modalStep < 3) setModalStep(modalStep + 1);
  };

  const prevStep = () => {
    if (modalStep > 1) {
      setModalStep(modalStep - 1);
      setValidationError("");
    }
  };

  const handleConfirm = () => {
    console.log("Form submitted:", formData);
    handleClose();
  };

  if (!isOpen) return null;

  const stepTitles = ["Customer Info", "Address Details", "Service Locations"];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
          bg-black/60 bg-opacity-50
          transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-white w-full max-w-3xl mx-4 md:mx-6 rounded-lg shadow-lg max-h-[90vh] flex flex-col
      transform transition-transform duration-300 px-2 md:px-4 lg:px-12
      ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b rounded-t-2xl border-gray-200 px-6 py-4 flex items-center gap-4 z-10">
          <button
            onClick={modalStep > 1 ? prevStep : handleClose}
            className="hover:bg-gray-100 p-2 rounded-lg text-gray-600 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg md:text-4xl font-semibold text-center flex-1">
            Add Customer
          </h2>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <h3 className="text-base md:text-lg lg:text-3xl font-semibold">
            {stepTitles[modalStep - 1]}
          </h3>

          {validationError && (
            <div className="flex items-center p-3 mb-4 text-sm font-medium text-red-800 bg-red-100 rounded-lg">
              <XCircle className="w-5 h-5 mr-2" />
              {validationError}
            </div>
          )}

          {/* Step 1 */}
          {modalStep === 1 && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm md:text-base font-medium">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Middle name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  placeholder="S"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Smith"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Also Known As
                </label>
                <input
                  type="text"
                  name="alsoKnownAs"
                  value={formData.alsoKnownAs}
                  onChange={handleInputChange}
                  placeholder="Nickname"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+92 9876543210"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Geo location<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="geoLocation"
                    value={formData.geoLocation}
                    onChange={handleInputChange}
                    placeholder="Select on map"
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder="Enter your District"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Mandal
                </label>
                <input
                  type="text"
                  name="mandal"
                  value={formData.mandal}
                  onChange={handleInputChange}
                  placeholder="Enter your Mandal"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  Village
                </label>
                <input
                  type="text"
                  value={formData.village}
                  name="village"
                  onChange={handleInputChange}
                  placeholder="Enter your Village"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Registered By<span className="text-red-500">*</span>
                </label>
                <select
                  name="registeredBy"
                  value={formData.registeredBy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                >
                  <option value="">Select Agent</option>
                  <option value="agent1">Agent 1</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {modalStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  KYC Documents
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="kycDocument"
                    value={formData.kycDocument}
                    accept=".doc,.docx"
                    onChange={handleInputChange}
                    placeholder="KYC number"
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                  <Upload className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Street<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder="Street address"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Postal Code<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="400020"
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="India"
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Industry<span className="text-red-500">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                >
                  <option value="">Select industry</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="survey">Survey & Mapping</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {modalStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  1st Latitude/Longitude
                </label>
                <input
                  type="text"
                  name="lat1"
                  value={formData.lat1}
                  onChange={handleInputChange}
                  placeholder="Lat, Long"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  2nd Latitude/Longitude
                </label>
                <input
                  type="text"
                  name="lat2"
                  value={formData.lat2}
                  onChange={handleInputChange}
                  placeholder="Lat, Long"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className=" text-sm font-medium mb-1 flex justify-between">
                  3rd Latitude/Longitude
                  <button
                    type="button"
                    className="!text-button-primary text-xl font-bold px-2  hover:bg-green-50"
                  >
                    +
                  </button>
                </label>
                <input
                  type="text"
                  name="lat3"
                  value={formData.lat3}
                  onChange={handleInputChange}
                  placeholder="Lat, Long"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Number of acres
                </label>
                <input
                  type="text"
                  name="acres"
                  value={formData.acres}
                  onChange={handleInputChange}
                  placeholder="Land area in acres"
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 rounded-b-2xl px-6 py-4 z-10">
          {modalStep < 3 ? (
            <button
              onClick={nextStep}
              className="w-full !bg-button-primary hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition shadow-md disabled:bg-gray-400"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="w-full !bg-button-primary hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition shadow-md"
            >
              Confirm Registration
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
