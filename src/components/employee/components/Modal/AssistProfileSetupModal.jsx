import React, { useState, useEffect } from "react";

const AssistProfileSetupModal = ({ isOpen, onClose }) => {
  const initialFormData = {
    emailOrPhone: "",
    setupType: "",
    firstName: "",
    lastName: "",
    aka: "",
    geoLocation: "",
    district: "",
    mandal: "",
    village: "",
    kycDocument: null,
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    area: "",
    lat1: "",
    long1: "",
    lat2: "",
    long2: "",
    lat3: "",
    long3: "",
    acres: "",
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  // Modal open হলে reset হবে
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData(initialFormData);
      setErrors({});
    }
  }, [isOpen]);

  const formatLabel = (key) => {
    const labels = {
      emailOrPhone: "Customer Email or Phone*",
      setupType: "Setup Type*",
      firstName: "First Name*",
      lastName: "Last Name*",
      aka: "Also Known As",
      geoLocation: "Geo Location*",
      district: "District*",
      mandal: "Mandal*",
      village: "Village*",
      kycDocument: "KYC Document*",
      street: "Street*",
      city: "City*",
      state: "State*",
      postalCode: "Postal Code*",
      country: "Country*",
      area: "Select Area*",
      lat1: "1st Latitude*",
      long1: "1st Longitude*",
      lat2: "2nd Latitude*",
      long2: "2nd Longitude*",
      lat3: "3rd Latitude*",
      long3: "3rd Longitude*",
      acres: "Number of Acres*",
    };
    return labels[key] || key;
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation
  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.emailOrPhone)
        newErrors.emailOrPhone = "Email or Phone is required";
      if (!formData.setupType)
        newErrors.setupType = "Setup Type is required";
    }
    if (step === 2) {
      ["firstName", "lastName", "geoLocation", "district", "mandal", "village"].forEach((key) => {
        if (!formData[key]) newErrors[key] = `${formatLabel(key)} is required`;
      });
    }
    if (step === 3) {
      if (!formData.kycDocument)
        newErrors.kycDocument = `${formatLabel("kycDocument")} is required`;
      ["street", "city", "state", "postalCode", "country", "area"].forEach((key) => {
        if (!formData[key]) newErrors[key] = `${formatLabel(key)} is required`;
      });
    }
    if (step === 4) {
      ["lat1", "long1", "lat2", "long2", "lat3", "long3", "acres"].forEach((key) => {
        if (!formData[key]) newErrors[key] = `${formatLabel(key)} is required`;
      });
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step === 1) {
      if (formData.setupType === "Personal Information") setStep(2);
      else if (formData.setupType === "Verification Details") setStep(3);
      else if (formData.setupType === "Service Location") setStep(4);
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log(`Saved Data for Step ${step}:`, formData);
      onClose(); // save এর পর modal বন্ধ
    }
  };

  // Reusable FormField
  const FormField = ({ id, label, type = "text", value, onChange, error, options = [] }) => {
    const isFile = type === "file";
    const isSelect = type === "select";
    const inputClasses = `w-full border ${error ? "border-red-500" : "border-gray-300"} rounded-lg p-2.5 text-gray-900 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 shadow-sm transition duration-150 ease-in-out`;
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {isSelect ? (
          <select id={id} name={id} value={value} onChange={onChange} className={inputClasses}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : isFile ? (
          <input id={id} name={id} type="file" onChange={onChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        ) : (
          <input id={id} name={id} type={type} value={value} onChange={onChange} className={inputClasses} />
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50 overflow-y-auto p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
          {step === 1 && "Step 1: Choose Setup Type"}
          {step === 2 && "Step 2: Personal Information"}
          {step === 3 && "Step 3: Verification Details"}
          {step === 4 && "Step 4: Service Location"}
        </h2>

        <div className="border-t border-gray-200 pt-4 max-h-[60vh] overflow-y-auto pr-2">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <FormField
                id="emailOrPhone"
                label={formatLabel("emailOrPhone")}
                value={formData.emailOrPhone}
                onChange={handleChange}
                error={errors.emailOrPhone}
              />
              <FormField
                id="setupType"
                label={formatLabel("setupType")}
                type="select"
                value={formData.setupType}
                onChange={handleChange}
                error={errors.setupType}
                options={[
                  { value: "", label: "-- Select Setup Type --" },
                  { value: "Personal Information", label: "Personal Information" },
                  { value: "Verification Details", label: "Verification Details" },
                  { value: "Service Location", label: "Service Location" },
                ]}
              />
              <button
                onClick={handleNext}
                className="w-full mt-6 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150"
              >
                Next
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["firstName", "lastName", "aka", "geoLocation", "district", "mandal"].map((key) => (
                <FormField key={key} id={key} label={formatLabel(key)} value={formData[key]} onChange={handleChange} error={errors[key]} />
              ))}
              <div className="md:col-span-2">
                <FormField id="village" label={formatLabel("village")} value={formData.village} onChange={handleChange} error={errors.village} />
              </div>
              <div className="md:col-span-2">
                <button onClick={handleSubmit} className="w-full mt-6 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150">
                  Save Personal Info
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <FormField id="kycDocument" label={formatLabel("kycDocument")} type="file" onChange={handleChange} error={errors.kycDocument} />
              </div>
              {["street", "city", "state", "postalCode", "country"].map((key) => (
                <FormField key={key} id={key} label={formatLabel(key)} value={formData[key]} onChange={handleChange} error={errors[key]} />
              ))}
              <FormField
                id="area"
                label={formatLabel("area")}
                type="select"
                value={formData.area}
                onChange={handleChange}
                error={errors.area}
                options={[
                  { value: "", label: "-- Select Area --" },
                  { value: "Area1", label: "Area 1" },
                  { value: "Area2", label: "Area 2" },
                  { value: "Area3", label: "Area 3" },
                ]}
              />
              <div className="md:col-span-2">
                <button onClick={handleSubmit} className="w-full mt-6 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150">
                  Save Verification Details
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["lat1", "long1", "lat2", "long2", "lat3", "long3"].map((key) => (
                <FormField key={key} id={key} label={formatLabel(key)} value={formData[key]} onChange={handleChange} error={errors[key]} />
              ))}
              <div className="md:col-span-2">
                <FormField id="acres" label={formatLabel("acres")} value={formData.acres} onChange={handleChange} error={errors.acres} />
              </div>
              <div className="md:col-span-2">
                <button onClick={handleSubmit} className="w-full mt-6 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150">
                  Save Service Location
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssistProfileSetupModal;

