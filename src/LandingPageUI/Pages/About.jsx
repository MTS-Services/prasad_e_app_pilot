import React from "react";
import CompleteSections from "../Components/CompleteSections";
import MissionNumbersSection from "../Components/MissionNumbersSection";
import banner from "../images/aboutBanner.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute bg-gradient-to-r from-[#06422c]/70 via-[#013522cd]/60 to-[#035a3ab8]/35 inset-0"></div>
        <div className="lg:hidden absolute bg-gray-600/50 inset-0"></div>
        <div className="z-30 lg:w-10/12 xl:max-w-7xl mx-auto">
          <div className="text-white max-w-2xl">
            <h1 className="leading-relaxed text-left text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-0">
              {t("about.header")}
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl py-3">
              {t("about.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div>
        <MissionNumbersSection />
        <CompleteSections />
      </div>
    </div>
  );
};

export default About;
