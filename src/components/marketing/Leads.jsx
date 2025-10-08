import { CiClock1 } from "react-icons/ci";
import map from "../../LandingPageUI/images/Map.svg";
import { FaCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MapPin, Users } from 'lucide-react';


const Leads = () => {
  const leads = [
    {
      id: 1,
      company: "Agritech Solutions",
      email: "John@agritech.com",
      phone: "(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 95,
      status: "Hot",
    },
    {
      id: 2,
      company: "Agritech Solutions",
      email: "John@agritech.com",
      phone: "(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 75,
      status: "Warm",
    },
    {
      id: 3,
      company: "Agritech Solutions",
      email: "John@agritech.com",
      phone: "(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 65,
      status: "Cool",
    },
    {
      id: 4,
      company: "Agritech Solutions",
      email: "John@agritech.com",
      phone: "(225) 555-0118",
      source: "Email campaign",
      location: "Gujrat, India",
      score: 85,
      status: "Hot",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Hot":
        return "text-red-500 bg-red-50";
      case "Warm":
        return "text-yellow-500 bg-yellow-50";
      case "Cool":
        return "text-green-500 bg-green-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "text-red-600";
    if (score >= 70) return "text-yellow-600";
    return "text-green-600";
  };
    const locations = [
    'Gujrat', 'Chennai', 'Lucknow', 'Hydrabad',
    'Mumbai', 'Rajhasthan', 'Delhi'
  ];
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-2">
            <div>
              <h2 className="text-xl lg:text-4xl font-bold text-gray-900 mb-2">
                Lead Management
              </h2>
              <p className="text-sm text-gray-600">
                Track and nurture your marketing leads
              </p>
            </div>
            <div className="flex flex-wrap py-3 lg:flex-row gap-3">
              <select className=" lg:px-4 lg:py-2 border border-gray-300 rounded-lg text-sm text-black bg-transparent">
                <option>All lead</option>
                <option>Hot</option>
                <option>Warm</option>
                <option>Cool</option>
              </select>
              <button className="lg:btn-md btn-xs btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-none border-none ">
                Export Leads
              </button>
              <button className="btn lg:btn-md btn-xs bg-yellow-400  text-gray-900 px-6 py-2 rounded-lg font-medium border-transparent shadow-none">
                Automation
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-100 bg-gray-100">
              <tr className="text-left">
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Lead
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Contact
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Source
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Location
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Score
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      {lead.company}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="text-gray-900">{lead.email}</div>
                      <div className="text-gray-500">{lead.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{lead.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      {lead.location}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-semibold ${getScoreColor(
                        lead.score
                      )}`}
                    >
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="w-8 lg:w-10 lg:h-10 h-8 rounded-full flex items-center justify-center  text-[#7bcd08] transition-colors">
                      <CiClock1 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100">
          <p className="text-sm text-gray-600">Showing 1 to 4 of 4 results</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

     <div className="grid lg:grid-cols-2 gap-6 mt-5">
        {/* Heatmap Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="font-semibold text-2xl text-gray-900 mb-4">
            Heatmap
          </h1>
          
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-gray-700">High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-gray-700">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-700">Low</span>
            </div>
          </div>

          {/* India Map SVG */}
          <div className="w-full h-auto flex items-center justify-center">
            <img src={map} alt="" />
          </div>
        </div>

        {/* Targeted Audience Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="font-semibold text-2xl text-gray-900 mb-6">
            Targeted Audience
          </h1>
          
          {/* Location Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-900">Location</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="px-3 py-1 font-semibold bg-red-100 rounded text-sm text-gray-700"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>

          {/* Demographics Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-900">Demographics</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-900 font-medium">
                <span className="">Age:</span> 22 - 55
              </p>
              <p className="text-gray-900 font-medium">
                <span className="">Income:</span> $75k+
              </p>
            </div>
          </div>

          {/* Audience Type Section */}
          <div>
            <h3 className=" text-gray-900 mb-2 font-medium">Audience Type</h3>
            <p className="text-gray-700 font-medium">Real estate developers & investor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
