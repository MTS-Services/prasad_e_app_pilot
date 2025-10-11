import React, { useState, useEffect, useMemo } from 'react';
import { TrendingUp, TrendingDown, Plus, Eye } from 'lucide-react';
import { GrUserSettings } from 'react-icons/gr';
import CreateTicketModal from './components/Modal/CreateTicketModal';
import EscalateTicketModal from './components/Modal/EscalateTicketModal';
import ApiService from '../../services/apiService';
import { CiSearch } from "react-icons/ci";

const ITEMS_PER_PAGE = 4;

const SupportPage = () => {
    const [showCreate, setShowCreate] = useState(false);
    const [showEscalate, setShowEscalate] = useState(false);

    const [stats, setStats] = useState([]);
    const [supportData, setSupportData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch data from JSON file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.get('/employee/support.json');
                setStats(data.stats);
                setSupportData(data.supportData);
            } catch (error) {
                console.error('Failed to fetch support data:', error.message);
            }
        };
        fetchData();
    }, []);

    //  Filter data based on search
    const filteredData = useMemo(() => {
        if (!searchQuery.trim()) return supportData;
        return supportData.filter(
            (item) =>
                item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.issues.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [supportData, searchQuery]);

    //  Pagination logic
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredData.slice(start, end);
    }, [filteredData, currentPage]);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="flex-1 p-4 md:p-8">
            {/* Header */}
            <div className="mb-4 md:mb-6">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900">Support Management</h1>
                <p className="text-xs md:text-base text-gray-600">
                    Create and manage support tickets and escalations
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-4">
                <button
                    onClick={() => setShowCreate(true)}
                    className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm md:text-base"
                >
                    <Plus className="inline-block w-6 h-8 mr-1 -ml-1" />
                    Create SUPPORT TICKET
                </button>

                <button
                    onClick={() => setShowEscalate(true)}
                    className="px-4 md:px-6 py-2 bg-[#DC3545] text-white rounded-lg hover:bg-red-700 font-medium text-sm md:text-base"
                >
                    <GrUserSettings className="inline-block w-6 h-8 mr-1 -ml-1" />
                    Escalate to technical team
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
                {stats.map((stat, index) => {
                    const bottomContent = stat.change || stat.subtext;
                    return (
                        <div
                            key={index}
                            className={`bg-white p-3 md:p-4 rounded-lg  ${stat.label === 'Open Tickets' ? '' : ''
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2 md:mb-3">
                                <span className="text-gray-600 text-xs md:text-sm">{stat.label}</span>
                            </div>

                            <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{stat.value}</div>

                            {bottomContent && (
                                <div
                                    className={`text-xs md:text-sm flex items-center gap-1 ${stat.change
                                            ? stat.trend === 'up'
                                                ? 'text-green-600'
                                                : 'text-red-600'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    {stat.change && stat.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                                    {stat.change && stat.trend !== 'up' && <TrendingDown className="w-4 h-4" />}
                                    {bottomContent}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 md:p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900">
                        Recent Transaction
                    </h2>
                    {/* Search Field */}
                    <div className="relative w-full md:w-1/2 lg:w-1/3">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-2xl">
                            <CiSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by service name or issue..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-3 border-2 border-[#C2C2C2] rounded-xl focus:outline-none focus:ring-2 focus:ring-black/30 text-base"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Service/ name</th>
                                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Issues</th>
                                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Progress</th>
                                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Priority</th>
                                <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {paginatedData.length > 0 ? (
                                paginatedData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-3 md:px-6 py-4">
                                            <div className="font-medium text-gray-900 text-sm md:text-base">{item.serviceName}</div>
                                            <div className="text-xs md:text-sm text-gray-500">{item.name}</div>
                                        </td>
                                        <td className="px-3 md:px-6 py-4 text-xs md:text-[16px] text-gray-900 whitespace-nowrap">
                                            {item.issues}
                                        </td>
                                        <td className="px-3 md:px-6 py-4">
                                            <span
                                                className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${item.progress === 'Completed'
                                                    ? 'bg-[#EAF6EC] text-[#24963E]'
                                                    : item.progress === 'Processed'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : item.progress === 'Pending'
                                                            ? 'bg-yellow-100 text-yellow-700'
                                                            : 'bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {item.progress}
                                            </span>
                                        </td>
                                        <td className="px-3 md:px-6 py-4 text-xs md:text-sm whitespace-nowrap">
                                            {item.priority === 'High' ? (
                                                <span className="text-red-600 font-medium">High</span>
                                            ) : item.priority === 'Medium' ? (
                                                <span className="text-orange-500 font-medium">Medium</span>
                                            ) : (
                                                <span className="text-green-600 font-medium">Low</span>
                                            )}
                                        </td>
                                        <td className="px-3 md:px-6 py-4 text-xs md:text-sm whitespace-nowrap">
                                            <button className="text-blue-600 hover:underline">
                                                <Eye />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">
                                        No matching records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs md:text-sm text-gray-600">
                        Showing {paginatedData.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                        {(currentPage - 1) * ITEMS_PER_PAGE + paginatedData.length} of {filteredData.length} results
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className={`px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm ${currentPage === totalPages || totalPages === 0
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <CreateTicketModal isOpen={showCreate} onClose={() => setShowCreate(false)} />
            <EscalateTicketModal isOpen={showEscalate} onClose={() => setShowEscalate(false)} />
        </div>
    );
};

export default SupportPage;
