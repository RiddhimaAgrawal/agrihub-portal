
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/d5940055-812d-4df8-ab6a-fe7e82ba671d.png" 
        alt="AgriHub Logo" 
        className="h-10 md:h-12" 
      />
    </div>
  );
};

export default Logo;
