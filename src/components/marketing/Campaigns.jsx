import React, { useState } from "react";

const Campaigns = () => {
  const [seasonalPage, setSeasonalPage] = useState(1);
  const [loyaltyPage, setLoyaltyPage] = useState(1);

  // Fake data for Seasonal Campaigns
  const seasonalCampaigns = [
    {
      id: 1,
      name: "Spring Sky Deals",
      type: "Brand Awareness",
      leads: 500,
      roi: "145%",
    },
    {
      id: 2,
      name: "Summer Heights Promo",
      type: "Customer Acquisition",
      leads: 600,
      roi: "200%",
    },
    {
      id: 3,
      name: "Monsoon View Specials",
      type: "Retargeting",
      leads: 700,
      roi: "300%",
    },
    {
      id: 4,
      name: "Autumn Horizon Offer",
      type: "Customer Acquisition",
      leads: 30,
      roi: "400%",
    },
    {
      id: 5,
      name: "Winter Skyline Campaign",
      type: "Brand Awareness",
      leads: 54,
      roi: "500%",
    },
    {
      id: 6,
      name: "New Year New Heights",
      type: "Retargeting",
      leads: 54,
      roi: "600%",
    },
  ];

  // Fake data for Loyalty Campaigns
  const loyaltyCampaigns = [
    {
      id: 1,
      name: "SkyPoints Rewards",
      type: "Brand Awareness",
      leads: 500,
      roi: "145%",
    },
    {
      id: 2,
      name: "DroneMiles Loyalty Program",
      type: "Customer Acquisition",
      leads: 800,
      roi: "200%",
    },
    {
      id: 3,
      name: "Aerial Advantage Club",
      type: "Retargeting",
      leads: 700,
      roi: "300%",
    },
    {
      id: 4,
      name: "Elite Flyer Membership",
      type: "Customer Acquisition",
      leads: 30,
      roi: "400%",
    },
    {
      id: 5,
      name: "Property Vision Rewards",
      type: "Brand Awareness",
      leads: 54,
      roi: "500%",
    },
    {
      id: 6,
      name: "Altitude Advantage",
      type: "Retargeting",
      leads: 54,
      roi: "600%",
    },
  ];

  const itemsPerPage = 5;

  const paginateData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalSeasonalPages = Math.ceil(seasonalCampaigns.length / itemsPerPage);
  const totalLoyaltyPages = Math.ceil(loyaltyCampaigns.length / itemsPerPage);

  const paginatedSeasonalCampaigns = paginateData(
    seasonalCampaigns,
    seasonalPage
  );
  const paginatedLoyaltyCampaigns = paginateData(loyaltyCampaigns, loyaltyPage);

  const CampaignTable = ({
    title,
    campaigns,
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
  }) => (
    <div className="bg-white rounded-lg shadow mb-8 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl lg:text-4xl font-bold text-gray-900">{title}</h2>
        <button className="bg-green-500 hover:bg-green-600 text-gray-900 px-4 py-2 rounded text-sm font-medium flex items-center">
          <span className="mr-1">+</span> Create Campaign
        </button>
      </div>

      <div className="overflow-x-auto h-[527px]">
        <table className="w-full lg:table-fixed">
          <thead className="">
            <tr className="border bg-gray-100 border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Campaign Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Campaign Types
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Leads Generated
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                ROI
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns?.map((campaign) => (
              <tr key={campaign.id} className="border border-gray-200">
                <td className="px-4 py-6 text-[16px] font-semibold text-gray-900">
                  {campaign.name}
                </td>
                <td className="px-4 py-6 text-[16px] text-black">
                  {campaign.type}
                </td>
                <td className="px-4 py-6 text-[16px] text-black">
                  {campaign.leads}
                </td>
                <td className="px-4 py-6 text-[16px] text-black">
                  {campaign.roi}
                </td>
                <td className="px-4 py-6 text-sm text-right">
                  <button className="bg-green-500 w-[120px] hover:bg-green-600 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm">
                    See details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-sky-500">
          Page {currentPage} of {totalPages} (Total: {totalItems} results)
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg text-sm ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                : "bg-transparent text-sky-500 border-sky-500"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-lg text-sm ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                : "bg-transparent text-sky-500 border-sky-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Seasonal Campaign Table */}
        <CampaignTable
          title="Seasonal Campaign Overview"
          campaigns={paginatedSeasonalCampaigns}
          currentPage={seasonalPage}
          setCurrentPage={setSeasonalPage}
          totalPages={totalSeasonalPages}
          totalItems={seasonalCampaigns.length}
        />

        {/* Loyalty Campaign Table */}
        <CampaignTable
          title="Loyalty Campaign Overview"
          campaigns={paginatedLoyaltyCampaigns}
          currentPage={loyaltyPage}
          setCurrentPage={setLoyaltyPage}
          totalPages={totalLoyaltyPages}
          totalItems={loyaltyCampaigns.length}
        />
      </div>
    </div>
  );
};

export default Campaigns;
