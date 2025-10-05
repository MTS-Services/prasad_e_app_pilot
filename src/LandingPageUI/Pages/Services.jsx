import Banner from "../images/serviceBanner.jpg";
import { ArrowRight, Sprout, HardHat, Zap, Shield } from 'lucide-react';

const Services = () => {
     const services = [
    {
      icon: Sprout,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      title: 'Agriculture & Farming',
      description: 'Advanced aerial solutions for agriculture & farming',
      features: [
        'Crop Health Monitoring',
        'Precision Spraying',
        'Irrigation Mapping',
        'Yield Prediction'
      ]
    },
    {
      icon: HardHat,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-700',
      title: 'Construction & Infrastructure',
      description: 'Advanced aerial solutions for construction',
      features: [
        '3D Site Mapping',
        'Progress Tracking',
        'Volumetric Calculations',
        'Safety Audits'
      ]
    },
    {
      icon: Zap,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Energy & Utilities',
      description: 'Power line inspection, solar panel assessment, wind turbine monitoring.',
      features: [
        'Thermal Imaging',
        'Asset Inspection',
        'Vegetation Management',
        'Fault Detection'
      ]
    },
    {
      icon: Shield,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      title: 'Public Safety & Government',
      description: 'Emergency response, disaster management, surveillance, and crowd monitoring.',
      features: [
        'Emergency Response',
        'Disaster Assessment',
        'Border Surveillance',
        'Traffic Monitoring'
      ]
    }
  ];
  return (
   <div>
     <div
      className="relative h-[372px] flex items-center justify-center bg-center  bg-cover px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      
          <div className='absolute bg-gradient-to-r from-[#06422c]/70 via-[#013522cd]/60 to-[#035a3ab8]/35 inset-0'></div>
      <div className="z-10 w-full lg:w-10/12 xl:max-w-7xl mx-auto ">
        <div className="text-white max-w-2xl">
          <h1 className="leading-relaxed text-left text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-0">
            Comprehensive Drone Services
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl py-3">
            Professional aerial solutions tailored to your industry. Powered by
            cutting-edge technology and operated by certified experts.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-white pt-30 py-16 px-8">
      <div className="xl:max-w-7xl lg:w-10/12 w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-sky-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xl text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[16px] text-gray-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors">
                    Book a Service
                  </button>
                  <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Services;
