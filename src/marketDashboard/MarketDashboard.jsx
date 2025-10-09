import { FaPlus, FaDollarSign } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MarketDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [seasonalPage, setSeasonalPage] = useState(1);
  const [loyaltyPage, setLoyaltyPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const rowsPerPage = 4;
  const navigate = useNavigate();

  const [automationSettings, setAutomationSettings] = useState([
    {
      id: 1,
      title: "Automation Settings",
      subtext: "3 of 4 rules active",
      enabled: false,
    },
    {
      id: 2,
      title: "Automation Settings",
      subtext: "3 of 4 rules active",
      enabled: false,
    },
    {
      id: 3,
      title: "Automation Settings",
      subtext: "3 of 4 rules active",
      enabled: false,
    },
    {
      id: 4,
      title: "Automation Settings",
      subtext: "3 of 4 rules active",
      enabled: false,
    },
  ]);

  const stats = [
    {
      label: "Click through rate",
      value: "3.2%",
      change: "+0.4%",
      icon: HiCursorClick,
      iconBg: "bg-[#F7FFE5]",
    },
    {
      label: "Conversion Rate",
      value: "438",
      change: "+15% vs last month",
      trend: "up",
      icon: FaArrowTrendUp,
      iconBg: "bg-[#F7FFE5]",
    },
    {
      label: "Customer Acquisition Cost",
      value: "67",
      change: "-5% vs last month",
      trend: "down",
      icon: FaDollarSign,
      iconBg: "bg-[#F7FFE5]",
    },
    {
      label: "RIO",
      value: "23",
      change: "+12% vs last month",
      trend: "up",
      icon: FaArrowTrendUp,
      iconBg: "bg-[#ECFDF6]",
    },
  ];

  const activities = [
    {
      lead: "Agritech Solutions",
      contact: "John@agritech.com\n(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 95,
      status: "Hot",
    },
    {
      lead: "Agritech Solutions",
      contact: "John@agritech.com\n(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 75,
      status: "Warm",
    },
    {
      lead: "Agritech Solutions",
      contact: "John@agritech.com\n(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 65,
      status: "Cool",
    },
    {
      lead: "Agritech Solutions",
      contact: "John@agritech.com\n(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 85,
      status: "Hot",
    },
    {
      lead: "Agritech Solutions",
      contact: "John@agritech.com\n(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 65,
      status: "Cool",
    },
    {
      lead: "Agritech Solutions",
      contact: "John@agritech.com\n(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 85,
      status: "Hot",
    },
  ];
  const statusStyles = {
    Hot: "bg-red-100 text-red-600",
    Warm: "bg-yellow-100 text-yellow-600",
    Cool: "bg-green-100 text-green-600",
  };
  const leads = ["All Lead", "Hot", "Warm", "Cold"];

  const allSeasonalCampaigns = [
    {
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=300&fit=crop",
      title: "AgriBoost Season Kickoff",
      description:
        "A seasonal campaign offering discounted drone planting services for farmers at the start of the planting season.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop",
      title: "Fly With Us Operator Drive",
      description:
        "A recruitment campaign targeting drone pilots, encouraging licenses and guaranteed crop projects based on location availability.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      title: "Harvest Ready Agri Drone Drive",
      description:
        "A campaign to prepare farmers for the harvest season, offering last discounts on crop monitoring and aerial spraying services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=300&fit=crop",
      title: "Spring Planting Special",
      description:
        "Get ready for spring with our exclusive planting packages designed for maximum yield and efficiency.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop",
      title: "Winter Prep Campaign",
      description:
        "Prepare your fields for winter with our specialized drone services and soil analysis packages.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500&h=300&fit=crop",
      title: "Summer Growth Monitoring",
      description:
        "Track your crop growth throughout summer with our advanced monitoring and analytics services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=300&fit=crop",
      title: "Autumn Harvest Support",
      description:
        "Maximize your autumn harvest with our comprehensive drone support and logistics coordination.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      title: "Pest Control Initiative",
      description:
        "Protect your crops with our targeted pest control campaigns using precision drone technology.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500&h=300&fit=crop",
      title: "Irrigation Optimization",
      description:
        "Optimize water usage with our smart irrigation monitoring and management solutions.",
    },
  ];

  const allLoyaltyPrograms = [
    {
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=300&fit=crop",
      title: "Earn Rewards on Every Service",
      description:
        "Each time you book or use our services, you collect reward points. Over time, these points can be redeemed for discounts, credits, or rewards.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop",
      title: "Unlock Exclusive Member Benefits",
      description:
        "As part of our loyalty program, you'll gain access to exclusive perks such as weekend promotions, early access to new services, and premium rewards.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      title: "Share & Save Through Referrals",
      description:
        "Invite your farming colleagues to join and enjoy our services. Every referred referral earns you special perks and special discounts.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&h=300&fit=crop",
      title: "VIP Platinum Membership",
      description:
        "Reach platinum status and enjoy priority booking, dedicated support, and exclusive seasonal discounts.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
      title: "Birthday Bonus Program",
      description:
        "Celebrate your special day with bonus points and exclusive offers available during your birthday month.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
      title: "Early Bird Rewards",
      description:
        "Book services in advance and earn extra points plus guaranteed availability during peak seasons.",
    },
  ];

  const totalPages = Math.ceil(activities.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = activities.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const getPaginatedData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (data) => {
    return Math.ceil(data.length / cardsPerPage);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


  const handleToggleAutomation = (id) => {
    setAutomationSettings((prev) =>
      prev.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handleDeleteAutomation = (id) => {
    setAutomationSettings((prev) =>
      prev.filter((setting) => setting.id !== id)
    );
  };

  const handleAddAutomationRule = () => {
    const newId =
      automationSettings.length > 0
        ? Math.max(...automationSettings.map((s) => s.id)) + 1
        : 1;
    setAutomationSettings((prev) => [
      ...prev,
      {
        id: newId,
        title: "Automation Settings",
        subtext: "3 of 4 rules active",
        enabled: false,
      },
    ]);
  };

  const renderPagination = (currentPage, setCurrentPage, totalPages) => {
    const getPageNumbers = () => {
      const pages = [];
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          pages.push(1, 2, 3, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(1, "...", currentPage, "...", totalPages);
        }
      }
      return pages;
    };

    return (
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoIosArrowBack size={20} />
        </button>

        {getPageNumbers().map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            disabled={page === "..."}
            className={`w-8 h-8 rounded ${
              page === currentPage
                ? "bg-yellow-400 text-white font-semibold"
                : page === "..."
                ? "cursor-default"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    );
  };

  const seasonalCampaigns = getPaginatedData(
    allSeasonalCampaigns,
    seasonalPage
  );
  const seasonalTotalPages = getTotalPages(allSeasonalCampaigns);

  const loyaltyPrograms = getPaginatedData(allLoyaltyPrograms, loyaltyPage);
  const loyaltyTotalPages = getTotalPages(allLoyaltyPrograms);

  return (
    <div className="bg-[#F9FAFB]">
      <div className="flex-1 p-4 md:py-8 md:px-10 bg-gray-50 mt-2">
        <div className="mb-4 md:mb-6 flex justify-between">
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-900">
              Marketing Dashboard
            </h1>
            <p className="text-xs md:text-base text-gray-600">
              Monitor your customer service performance
            </p>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setOpen(true)}
              className="px-3 md:px-6 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700 font-medium text-[10px] md:text-base flex items-center gap-1"
            >
              <FaPlus />
              Create Campain
            </button>
          </div>
        </div>

        <div className="pb-3 md:pb-5">
          <h2 className="text-lg md:text-xl font-normal text-gray-700">
            Last 30 days overview
          </h2>
        </div>

        <div className="mb-4 md:mb-6 flex">
          <select
            className="px-2 md:px-4 py-1.5 md:py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-base text-gray-700"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-3 md:p-6 rounded-lg shadow-sm border border-gray-200 flex justify-between flex-col gap-1.5"
              >
                <div className=" text-gray-600 text-xs md:text-sm">
                  {stat.label}
                </div>
                <div className="flex items-start justify-between ">
                  <span className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    {stat.value}
                  </span>
                  <di className={`${stat.iconBg} p-2 rounded-lg`}>
                    <Icon className="w-4 h-4 md:w-8 md:h-8 text-gray-400" />
                  </di>
                </div>
                <div
                  className={`text-xs md:text-sm flex items-center gap-1 text-yellow-400 `}
                >
                  {stat.change}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                  Lead Management
                </h2>
                <h3>Truck and nuture your marketing leads</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <select
                  className="px-2 md:px-4 py-1.5 md:py-2 border border-gray-300 rounded-lg text-xs md:text-base text-gray-700 "
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                >
                  {leads.map((lead) => {
                    return (
                      <>
                        <option value={lead}>{lead}</option>
                      </>
                    );
                  })}
                </select>
                <button
                  onClick={() => setOpen(true)}
                  className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base"
                >
                  Register New Customer
                </button>
                <button
              onClick={() => setIsAutomationModalOpen(true)}
              className="px-3 md:px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-red-700 font-medium text-[10px] md:text-base flex items-center gap-1"
            >
              Automation
            </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Lead
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Contact
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Source
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Location
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Score
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{activity.lead}</td>
                    <td className="py-3 px-4 whitespace-pre-line">
                      {activity.contact}
                    </td>
                    <td className="py-3 px-4">{activity.source}</td>
                    <td className="py-3 px-4">{activity.location}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        activity.status === "Hot"
                          ? "text-red-600"
                          : activity.status === "Warm"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {activity.score}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          statusStyles[activity.status]
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="rounded-full p-1 text-gray-400 hover:text-green-500 transition">
                        &#8635;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs md:text-sm text-gray-600">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + rowsPerPage, activities.length)} of{" "}
              {activities.length} results
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>

              <span className="text-gray-600 text-xs md:text-sm">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Seasonal Campaigns Section */}
        <div className="my-4 md:my-12 bg-white p-3 md:p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Seasonal campaigns
            </h2>
            <button className="bg-green-500 hover:opacity-90 text-white font- md:font-medium py-2 px-1  md:px-4 rounded flex items-center gap-1 md:gap-2 transition-opacity">
              <FaPlus size={20} />
              Create Campaign
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalCampaigns.map((campaign, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-103"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {campaign.description}
                  </p>
                  <button
                    onClick={() =>
                      alert(`Viewing details for: ${campaign.title}`)
                    }
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {renderPagination(seasonalPage, setSeasonalPage, seasonalTotalPages)}
        </div>

        {/* Loyalty Programs Section */}
        <div className="my-4 md:my-6 bg-white p-3 md:p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Loyalty programs
            </h2>
            <button className="bg-green-500 hover:opacity-90 text-white font-medium py-2 px-1  md:px-4 rounded flex items-center gap-2 transition-opacity">
              <FaPlus size={20} />
              Create Campaign
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loyaltyPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-103"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {program.description}
                  </p>
                  <button
                    onClick={() =>
                      alert(`Viewing details for: ${program.title}`)
                    }
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {renderPagination(loyaltyPage, setLoyaltyPage, loyaltyTotalPages)}
        </div>
      </div>

      {/* Automation Settings Modal */}
      {isAutomationModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[70vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-gray-900">
                  if lead is hot
                </h2>
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                  3 of 4 rules active
                </p>
              </div>
              <button
                onClick={() => setIsAutomationModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MdClose size={24} />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5">
              {/* Automation Settings List */}
              <div className="space-y-3">
                {automationSettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="bg-gray-50 rounded-lg p-3 md:p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1">
                          {setting.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          {setting.subtext}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={setting.enabled}
                            onChange={() => handleToggleAutomation(setting.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                        <span className="text-xs md:text-sm text-gray-500 min-w-[60px]">
                          {setting.enabled ? "Enabled" : "Disabled"}
                        </span>
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteAutomation(setting.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Rule Button */}
              <button
                onClick={handleAddAutomationRule}
                className="w-full mt-4 py-3 text-gray-700 font-medium text-sm md:text-base flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                <FaPlus size={14} className="text-gray-600" />
                Add new automation rule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketDashboard;
