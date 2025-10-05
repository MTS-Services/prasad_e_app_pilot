
import CompleteSections from "../Components/CompleteSections";
import MissionNumbersSection from "../Components/MissionNumbersSection";
import banner from "../images/aboutBanner.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center"
      >
        {/* bg-gradient-to-l from-gray-500 via-green-600/15 to-white/35 */}
        <div className='absolute bg-gradient-to-r from-[#06422c]/70 via-[#013522cd]/60 to-[#035a3ab8]/35 inset-0'></div>
        <div className="lg:hidden absolute bg-gray-600/50 inset-0"></div>
        <div className="z-30 lg:w-10/12 xl:max-w-7xl mx-auto">
          <div className="">
            <div className="text-white max-w-2xl">
          
            <h1 className="leading-relaxed text-left text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-0">About Hindustan Drone Services</h1>
            <p className="text-white text-base sm:text-lg md:text-xl py-3">India's premier drone service provider, delivering excellence in aerial solutions since 2018. Trusted by government agencies, Fortune 500 companies, and enterprises across the nation.</p>
            
            </div>
          </div>
        </div>
      </div>

      <div>
        <MissionNumbersSection />
        <CompleteSections></CompleteSections>
      </div>
    </div>
  );
};

export default About;
