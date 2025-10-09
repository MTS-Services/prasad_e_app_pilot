import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Users, ShoppingCart, CreditCard, Headphones, Menu, Bell, Mail, LayoutDashboard } from 'lucide-react';

// Sidebar component
const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { id: 'customer', label: 'Customer', icon: Users, path: '/customer' },
        { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/orders' },
        { id: 'payments', label: 'Payments', icon: CreditCard, path: '/payments' },
        { id: 'support', label: 'Support', icon: Headphones, path: '/support' },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#EAEDF4] h-screen z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col`}>

                {/* Logo Section */}
                <div className="flex items-center gap-2 px-4 py-[13px] border-b border-gray-100 bg-white">
                    <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-base">D</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Demo Logo</span>
                </div>

                {/* Menu */}
                <nav className="flex-1 px-3 py-4 overflow-y-auto pl-5 mt-4">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.path === '/'
                            ? location.pathname === '/'       // exact match for dashboard
                            : location.pathname.startsWith(item.path); // startsWith for others

                        return (
                            <button
                                key={item.id}
                                onClick={() => { navigate(item.path); onClose(); }}
                                className={`w-full flex text-xl items-center gap-3 px-4 font-medium py-3 rounded-lg mb-1 text-left ${isActive ? 'bg-white border-l-6 font-bold border-green-600 text-green-600 shadow-sm' : 'text-black hover:bg-gray-50'}`}
                            >
                                <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                                <span className=" ">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

            </div>
        </>
    );
};

// Header component
const Header = ({ onMenuClick }) => {
    return (
        <header className="bg-white border-b border-gray-100 px-6 py-3.5 sticky top-0 z-30">
            <div className="flex items-center justify-between">
                {/* Mobile menu button */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-1.5 hover:bg-gray-50 rounded-md transition-colors"
                >
                    <Menu className="w-5 h-5 text-gray-700" />
                </button>

                {/* Empty space for alignment on desktop */}
                <div className="hidden lg:block"></div>

                {/* Right side - Notifications and User */}
                <div className="flex items-center gap-2">
                    <button className="relative p-2 hover:bg-gray-50 rounded-md transition-colors">
                        <Bell className="w-[18px] h-[18px] text-gray-600" />
                        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="p-2 hover:bg-gray-50 rounded-md transition-colors">
                        <Mail className="w-[18px] h-[18px] text-gray-600" />
                    </button>
                    <div className="w-px h-8 bg-gray-200 mx-1"></div>
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white font-semibold text-xs">JD</span>
                        </div>
                        <div className="text-left hidden sm:block">
                            <div className="text-xs font-semibold text-gray-800 leading-tight">John Davia</div>
                            <div className="text-[10px] text-gray-500 leading-tight">Admin User</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Main Layout
const EmployDashBoardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default EmployDashBoardLayout;
