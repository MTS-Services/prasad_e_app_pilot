import React, { useState } from "react";
import { ChevronLeft, MapPin, Upload, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  kycDocument: null,
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
    const { name, value, files, type } = e.target;
    if (validationError) setValidationError("");

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] || null }); // store file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleClose = () => {
    setModalStep(1);
    setValidationError("");
    setFormData(INITIAL_FORM);
    onClose();
  };

  const { t } = useTranslation();
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
        !formData.industry ||
        !formData.kycDocument
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
    setModalStep((prev) => Math.min(prev + 1, 3)); //
  };

  const prevStep = () => {
    setModalStep((prev) => Math.max(prev - 1, 1));
    setValidationError("");
  };

  const handleConfirm = () => {
    console.log("Form submitted:", formData);
    handleClose();
  };

  if (!isOpen) return null;

  const stepTitles = [
    t("dashboard.fieldAgent.FirstModal.customerInfo"),
    t("dashboard.fieldAgent.SecondModal.addressDetails"),
    t("dashboard.fieldAgent.ThirdModal.serviceLocations"),
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
    bg-black/60 bg-opacity-50
    transition-opacity duration-300
    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={(e) => {
        // Close modal if clicking on overlay (not modal content)
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
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
            type="button"
            className="hover:bg-gray-100 p-2 rounded-lg text-[#002244] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg md:text-4xl font-semibold text-center flex-1">
            {t("dashboard.fieldAgent.FirstModal.addCustomer")}
          </h2>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <h3 className="text-base md:text-lg lg:text-3xl font-semibold">
            {stepTitles[modalStep - 1]}
          </h3>

          {validationError && (
            <div className="flex items-center p-3 mb-4 text-sm font-medium text-[#C43216] bg-red-100 rounded-lg">
              <XCircle className="w-5 h-5 mr-2" />
              {validationError}
            </div>
          )}

          {/* Step 1 */}
          {modalStep === 1 && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.firstName")}
                  <span className="text-[#C43216]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder={t("dashboard.fieldAgent.FirstModal.firstName")}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.middleName")}
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  placeholder={t("dashboard.fieldAgent.FirstModal.middleName")}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.lastName")}
                  <span className="text-[#C43216]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={t("dashboard.fieldAgent.FirstModal.alsoKnownAs")}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.alsoKnownAs")}
                </label>
                <input
                  type="text"
                  name="alsoKnownAs"
                  value={formData.alsoKnownAs}
                  onChange={handleInputChange}
                  placeholder={t("dashboard.fieldAgent.FirstModal.nickname")}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.phone")}
                  <span className="text-[#C43216]">*</span>
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
                  {t("dashboard.fieldAgent.FirstModal.email")}
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
                  {t("dashboard.fieldAgent.FirstModal.geoLocation")}
                  <span className="text-[#C43216]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="geoLocation"
                    value={formData.geoLocation}
                    onChange={handleInputChange}
                    placeholder={t(
                      "dashboard.fieldAgent.FirstModal.selectOnMap"
                    )}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.district")}
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.FirstModal.enterDistrict"
                  )}
                  className="mt-1 w-full border  rounded-md px-3 py-2 text-sm md:text-base  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.mandal")}
                </label>
                <input
                  type="text"
                  name="mandal"
                  value={formData.mandal}
                  onChange={handleInputChange}
                  placeholder={t("dashboard.fieldAgent.FirstModal.enterMandal")}
                  className="mt-1 w-full border  rounded-md px-3 py-2 text-sm md:text-base  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium">
                  {t("dashboard.fieldAgent.FirstModal.village")}
                </label>
                <input
                  type="text"
                  value={formData.village}
                  name="village"
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.FirstModal.enterVillage"
                  )}
                  className="mt-1 w-full border rounded-md px-3 py-2 text-sm md:text-base  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.FirstModal.registeredBy")}
                  <span className="text-[#C43216]">*</span>
                </label>
                <select
                  name="registeredBy"
                  value={formData.registeredBy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                >
                  <option value="">
                    {t("dashboard.fieldAgent.FirstModal.selectAgent")}
                  </option>
                  <option value="agent1">
                    {t("dashboard.fieldAgent.FirstModal.FieldAgent")}
                  </option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {modalStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.SecondModal.kycDocumentsUpload")}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="kycDocument"
                    accept=".doc,.docx,.jpg,.pdf,.png"
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-green-500"
                  />
                  <Upload className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                {/* Show selected file name (optional) */}
                {formData.kycDocument && (
                  <p className="text-sm mt-1">{formData.kycDocument.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.SecondModal.street")}
                  <span className="text-[#C43216]">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.SecondModal.streetAddress"
                  )}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("dashboard.fieldAgent.SecondModal.city")}
                    <span className="text-[#C43216]">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder={t(
                      "dashboard.fieldAgent.SecondModal.enterCity"
                    )}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("dashboard.fieldAgent.SecondModal.state")}
                    <span className="text-[#C43216]">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder={t(
                      "dashboard.fieldAgent.SecondModal.enterState"
                    )}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t("dashboard.fieldAgent.SecondModal.postalCode")}
                    <span className="text-[#C43216]">*</span>
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
                    {t("dashboard.fieldAgent.SecondModal.country")}
                    <span className="text-[#C43216]">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder={t(
                      "dashboard.fieldAgent.SecondModal.enterCountry"
                    )}
                    className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.SecondModal.industry")}
                  <span className="text-[#C43216]">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg bg-[#F7FFE5]  focus:ring-green-500"
                >
                  <option value="">
                    {t("dashboard.fieldAgent.SecondModal.selectIndustry")}
                  </option>
                  <option value="agriculture">
                    {t("dashboard.fieldAgent.SecondModal.agriculture")}
                  </option>
                  <option value="survey">
                    {t("dashboard.fieldAgent.SecondModal.surveyMapping")}
                  </option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {modalStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.ThirdModal.firstLatLong")}
                </label>
                <input
                  type="text"
                  name="lat1"
                  value={formData.lat1}
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.ThirdModal.firstLatLongValue"
                  )}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.ThirdModal.secondLatLong")}
                </label>
                <input
                  type="text"
                  name="lat2"
                  value={formData.lat2}
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.ThirdModal.firstLatLongValue"
                  )}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className=" text-sm font-medium mb-1 flex justify-between">
                  {t("dashboard.fieldAgent.ThirdModal.thirdLatLong")}
                  <p className="!text-button-primary text-xl font-bold px-2 ">
                    +
                  </p>
                </label>
                <input
                  type="text"
                  name="lat3"
                  value={formData.lat3}
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.ThirdModal.firstLatLongValue"
                  )}
                  className="w-full px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("dashboard.fieldAgent.ThirdModal.numberOfAcres")}
                </label>
                <input
                  type="text"
                  name="acres"
                  value={formData.acres}
                  onChange={handleInputChange}
                  placeholder={t(
                    "dashboard.fieldAgent.ThirdModal.landAreaInAcres"
                  )}
                  className="w-full text-black px-4 py-2 border rounded-lg  focus:ring-green-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-gray-200 rounded-b-2xl px-6 py-4 z-10">
          {modalStep < 3 ? (
            <button
              onClick={nextStep}
              type="button"
              className="w-full !bg-button-primary hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition shadow-md disabled:bg-gray-400"
            >
              {t("dashboard.fieldAgent.FirstModal.next")}
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              type="button"
              className="w-full !bg-button-primary hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition shadow-md"
            >
              {t("dashboard.fieldAgent.FirstModal.confirmRegistration")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
