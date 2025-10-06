import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import CForm from "../Components/Form/CForm";
import banner from "../images/aboutBanner.jpg";
import card from "../images/blogCard.png"
import card1 from "../images/blogCard1.png"
import card2 from "../images/card1.png"
import card3 from "../images/card2.jpg"
import { useTranslation } from "react-i18next";

const BlogCardComponent = ({ image, category, title, description, date }) => (
  <div className="bg-sky-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative  lg:h-[340px] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <span className={`text-xs font-medium text-green-500 uppercase tracking-wide`}>
        {category}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <button className="text-green-600 cursor-pointer text-sm font-medium flex items-center hover:text-green-700 transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const { t } = useTranslation();
  
  const blogs = [
    {
      image: card,
      category: "Industry Insights",
      categoryColor: "text-green-600",
      title: "The Future of Precision Agriculture in India",
      description: "How drone technology is revolutionizing farming practices and increasing yields by up to 30%.",
      date: "March 15, 2025"
    },
    {
      image: card1,
      category: "Success Stories",
      categoryColor: "text-orange-500",
      title: "5 Drone Innovations in Construction",
      description: "Real-world examples of how leading construction firms are using drones to save time and money.",
      date: "March 15, 2025"
    },
    {
      image: card2,
      category: "Industry Insights",
      categoryColor: "text-green-600",
      title: "DGCA Regulations: Complete Guide for 2025",
      description: "Everything you need to know about drone regulations and compliance in India.",
      date: "March 15, 2025"
    },
    {
      image: card3,
      category: "Success Stories",
      categoryColor: "text-orange-500",
      title: "Case Study: Solar Farm Inspection Success",
      description: "How we helped a 50MW solar farm identify defects and improve efficiency by 15%.",
      date: "March 15, 2025"
    },
    {
      image: card2,
      category: "Industry Insights",
      categoryColor: "text-green-600",
      title: "Thermal Imaging: Applications Beyond Energy",
      description: "Exploring innovative uses of thermal imaging drones across multiple industries.",
      date: "March 15, 2025"
    },
    {
      image: card,
      category: "Success Stories",
      categoryColor: "text-orange-500",
      title: "ROI Analysis: Drone Investment for Enterprises",
      description: "Comprehensive analysis of return on investment for enterprise drone programs.",
      date: "March 15, 2025"
    }
  ];
  
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="relative h-[270px] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute bg-gradient-to-l from-[#00C805] to-[#006202] inset-0"></div>
        <div className="lg:hidden absolute bg-gray-600/50 inset-0"></div>
        <div className="z-10 w-11/12 lg:w-10/12 xl:max-w-7xl mx-auto">
          <div className="text-white max-w-2xl">
            <h1 className="leading-relaxed text-left text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-0">
             {t('blog.title')}
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl py-3">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-11/12 lg:w-10/12 xl:max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {t('blog.title')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl py-3 max-w-2xl mx-auto">
             {t('blog.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <BlogCardComponent key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Blog;