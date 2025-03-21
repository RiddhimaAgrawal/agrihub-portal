
import React from 'react';
import { Sprout, Leaf, Users, UserCheck, UserPlus, UserCog } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const features = [
  {
    title: "What We Do",
    description: "AgriHub connects farmers with resources and insights to promote sustainable agriculture and prevent stubble burning, a major issue in Haryana contributing to severe air pollution and health risks. Farmers register through a mobile or web app, providing farm details and Aadhaar verification for secure access. AI-driven recommendations match them with microbial solutions, equipment, and soil testing kits. Regular soil tests provide tailored crop advice. Farmers earn points and financial rewards for adopting eco-friendly practices, redeemable via a digital wallet.",
    icon: Sprout,
    delay: 0.1
  },
  {
    title: "How We Operate",
    description: "Through our digital platform, we facilitate knowledge sharing, offer training programs, and create connections between farmers, suppliers, and buyers. Our user-friendly tools help streamline agricultural operations. Real-time data on stubble-burning prevention and resource use is shared with government bodies to support policy-making and performance tracking. AgriHub enhances efficiency, transparency, and sustainability, empowering farmers and protecting the environment.",
    icon: Leaf,
    delay: 0.2
  },
  {
    title: "Our Community",
    description: "AGRIHUB builds a thriving community of progressive farmers, agricultural experts, and industry partners. Together, we're transforming farming practices and creating sustainable solutions for future generations.",
    icon: Users,
    delay: 0.3,
    extraInfo: [
      {
        title: "Farmers & Producers",
        description: "Over 10,000 farmers across Haryana have joined AgriHub, adopting sustainable practices and increasing their yields by an average of 15%.",
        icon: UserCheck
      },
      {
        title: "Agricultural Experts",
        description: "Our network includes soil scientists, crop specialists, and agricultural engineers who provide expertise and validate our recommendations.",
        icon: UserCog
      },
      {
        title: "New Members",
        description: "Join our growing community of forward-thinking farmers and contribute to a sustainable agricultural revolution.",
        icon: UserPlus
      }
    ]
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wide text-agrihub-darkGreen uppercase bg-agrihub-green/10 rounded-full animate-fade-up">Objective</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Empowering Farmers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            This project creates a digital platform to empower farmers and promote sustainability. By collecting farm geolocation, crop types, and soil health data, it provides tailored solutions like microbial recommendations, subsidized equipment, and soil health reports. A reward-based system encourages eco-friendly practices, including stubble-burning prevention, through financial benefits and discounts. The platform connects farmers with government resources, ensuring access to tools and support.
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl mt-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Real-time data reporting enhances transparency and supports policy-making by tracking stubble burning and resource use. With AI-driven recommendations, multilingual support, and offline access, the platform addresses digital literacy challenges, fostering long-term agricultural growth and sustainability.
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
              
              {feature.extraInfo && (
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold text-agrihub-darkGreen border-b border-gray-200 pb-2">Community Members</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {feature.extraInfo.map((info, i) => (
                      <HoverCard key={i}>
                        <HoverCardTrigger asChild>
                          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-agrihub-green/10 text-agrihub-green">
                              <info.icon size={18} />
                            </div>
                            <span className="text-sm font-medium">{info.title}</span>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{info.title}</h4>
                              <p className="text-sm">{info.description}</p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
