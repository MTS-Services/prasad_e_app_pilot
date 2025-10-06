import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const Industry = () => {
      const { t } = useTranslation();

    const industries = [
        {
            icon: '🌾',
            titleKey: 'industries.agriculture.title',
            descriptionKey: 'industries.agriculture.description',
        },
        {
            icon: '🏗️',
            titleKey: 'industries.construction.title',
            descriptionKey: 'industries.construction.description',
        },
        {
            icon: '⚡',
            titleKey: 'industries.energy.title',
            descriptionKey: 'industries.energy.description',
        },
        {
            icon: '👮',
            titleKey: 'industries.publicSafety.title',
            descriptionKey: 'industries.publicSafety.description',
        },
    ];

    return (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
            <div className="lg:w-10/12 xl:max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {t('industries.header')}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                       {t('industries.subheader')}
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
                                {t(industry.titleKey)}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                {t(industry.descriptionKey)}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href="/services"
                                className="text-green-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base"
                            >
                                {t('industries.learnMore')}
                                <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* View All Services Button */}
                <div className="text-center">
                    <Link to={'services'} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
                        {t('industries.viewAllServices')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Industry;