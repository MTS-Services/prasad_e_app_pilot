import React from 'react';
import { useTranslation } from 'react-i18next';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import { Link } from 'react-router';

const Gallery = () => {
  const { t } = useTranslation();

  const galleryItems = [
    {
      image: banner1,
      categoryKey: 'industries.agriculture.title',
      titleKey: 'industries.agriculture.description',
    },
    {
      image: banner2,
      categoryKey: 'industries.construction.title',
      titleKey: 'industries.construction.description',
    },
    {
      image: banner3,
      categoryKey: 'industries.energy.title',
      titleKey: 'industries.energy.description',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-50">
      <div className="lg:w-10/12 xl:max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('industries.header')}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            {t('industries.subheader')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {galleryItems.map((item, index) => {
            const isLarge = index === 2; // Last item is large
            return (
              <div
                key={index}
                className={`relative ${
                  isLarge ? 'md:col-span-2 h-64 md:h-96' : 'h-64 md:h-80'
                } rounded-2xl overflow-hidden group cursor-pointer`}
              >
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 bg-white/5 backdrop-blur-xs w-full text-white">
                  <p className="text-xs md:text-sm mb-1 opacity-90">
                    {t(item.categoryKey)}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {t(item.titleKey)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link to={"/services"} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
            {t('industries.viewAllServices')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
