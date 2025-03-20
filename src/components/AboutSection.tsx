
import React from 'react';
import { Sprout, Farm, Users } from 'lucide-react';

const features = [
  {
    title: "What We Do",
    description: "AGRIHUB connects farmers with modern agricultural technologies and resources to increase productivity and sustainability. We provide access to innovative farming solutions, market information, and expert guidance.",
    icon: Sprout,
    delay: 0.1
  },
  {
    title: "How We Operate",
    description: "Through our digital platform, we facilitate knowledge sharing, offer training programs, and create connections between farmers, suppliers, and buyers. Our user-friendly tools help streamline agricultural operations.",
    icon: Farm,
    delay: 0.2
  },
  {
    title: "Our Community",
    description: "AGRIHUB builds a thriving community of progressive farmers, agricultural experts, and industry partners. Together, we're transforming farming practices and creating sustainable solutions for future generations.",
    icon: Users,
    delay: 0.3
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wide text-agrihub-darkGreen uppercase bg-agrihub-green/10 rounded-full animate-fade-up">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Revolutionizing Agriculture
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We're on a mission to empower farmers with technology and connections that drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up" 
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-agrihub-green/10 text-agrihub-green mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
