
import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ImageSection from '../components/ImageSection';
import { ArrowDown } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for the carousel
  const carouselImages = [
    "/lovable-uploads/f0dcafc0-990a-4525-9e6b-dca2879b885b.png",
    "/lovable-uploads/73db4c78-f1da-47fc-951b-61b5f2c8886d.png",
    "/lovable-uploads/5e8e5f2b-87a9-4632-a1e1-59ac731a0b80.png",
    "/lovable-uploads/6916902e-410c-443f-a185-5b0363796899.png",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-agrihub-darkGreen uppercase bg-agrihub-green/10 rounded-full animate-fade-up">
            The Future of Farming
          </span>

          {/* Carousel replacing the background image */}
          <div className="relative w-full mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="h-96 md:h-[500px] lg:h-[600px]">
                    <div className="h-full w-full">
                      <img
                        src={image}
                        alt={`Agriculture scene ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 lg:left-6" />
              <CarouselNext className="right-2 md:right-4 lg:right-6" />
            </Carousel>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn px-8 py-3 rounded-lg bg-agrihub-green text-white font-medium hover:bg-agrihub-darkGreen transition-colors duration-300">
              Get Started
            </button>
            <button className="btn px-8 py-3 rounded-lg border border-agrihub-green text-agrihub-darkGreen font-medium hover:bg-agrihub-green/10 transition-colors duration-300">
              Learn More
            </button>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} className="text-agrihub-darkGreen animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <ImageSection />
      
      <footer className="py-10 px-6 md:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-sm text-gray-500">© 2023 AGRIHUB. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-agrihub-green transition-colors duration-300">Terms</a>
            <a href="#" className="text-gray-500 hover:text-agrihub-green transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-agrihub-green transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
