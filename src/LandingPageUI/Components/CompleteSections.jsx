import React from 'react';
import { Shield, Zap, Globe, Users, CheckCircle } from 'lucide-react';
import cardimage from "../images/aboutcard.png"
import cardimage1 from "../images/aboutcard1.png"
import cardimage2 from '../images/aboutcard2.jpg'
import cardimage3 from '../images/aboutcard3.jpg'

export default function CompleteSections() {


  const team = [
    {
      name: 'Arun Reddy',
      role: 'Director - Client Relations',
      description: '10+ years logistics management',
      image: cardimage3
    },
    {
      name: 'Priya Sharma',
      role: 'COO - Pilot Operations',
      description: 'Ex-IAF, 3000+ flight hours',
      image: cardimage1
    },
    {
      name: 'Meena Patel',
      role: 'VP of Technology',
      description: 'IIT Bombay, Aerospace Engineering',
      image: cardimage2
    },
    {
      name: 'Rajeev Kumar',
      role: 'CEO and Founder',
      description: '15+ years in Aviation',
      image: cardimage
    }
  ];

  return (
    <div className="bg-gray-50">
      

   

      {/* Meet Our Team Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-[40px]  text-center text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]  max-w-3xl mx-auto">
            Backed by expertise, driven by innovation. Our teams is committed to setting the standard for drone services excellence across the nation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-gray-950 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-sky-600 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-3">
            Trusted by leading organization
          </h2>
          <p className="text-[16px] text-gray-600">
            Government agencies, Fortune 500+ Companies, private enterprises across from diverse range of sectors.
          </p>
        </div>
      </div>
    </div>
  );
}