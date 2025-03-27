
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem("currentUser");
    if (userStr) {
      const user = JSON.parse(userStr);
      setIsLoggedIn(user.isLoggedIn);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/");
  };

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
        <Link to="/">
          <Logo className="animate-fade-in" />
        </Link>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                className="animate-slide-in-right" 
                style={{ animationDelay: '0.1s' }}
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
              <Button 
                className="animate-slide-in-right"
                style={{ animationDelay: '0.2s' }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="animate-slide-in-right" 
                style={{ animationDelay: '0.1s' }}
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button 
                className="animate-slide-in-right"
                style={{ animationDelay: '0.2s' }}
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
