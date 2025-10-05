import React from 'react';

const Industry = () => {
    const industries = [
        {
            icon: '🌾',
            title: 'Agriculture & Farming',
            description: 'Advanced aerial solutions for agriculture & farming',
        },
        {
            icon: '🏗️',
            title: 'Construction',
            description: 'Advanced aerial solutions for construction',
        },
        {
            icon: '⚡',
            title: 'Energy & Utilities',
            description: 'Advanced aerial solutions for agriculture & farming',
        },
        {
            icon: '👮',
            title: 'Public Safety & Government',
            description: 'Advanced aerial solutions for construction',
        },
    ];

    return (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
            <div className="lg:w-10/12 xl:max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Industries We Serve
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Specialized drone solutions tailored to your industry needs
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-sky-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4">{industry.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {industry.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                {industry.description}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href="#"
                                className="text-green-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base"
                            >
                                Learn more
                                <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* View All Services Button */}
                <div className="text-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
                        View All Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Industry;