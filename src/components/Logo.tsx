
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/12a23606-6899-4e5f-a905-167a8a10a7ff.png" 
        alt="AgriHub Logo" 
        className="h-10 md:h-12" 
      />
    </div>
  );
};

export default Logo;
