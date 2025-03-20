
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="animate-fade-in" />
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="animate-slide-in-right" 
            style={{ animationDelay: '0.1s' }}
          >
            Login
          </Button>
          <Button 
            className="animate-slide-in-right"
            style={{ animationDelay: '0.2s' }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
