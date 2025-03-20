
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="C:\Users\KIIT\AppData\Local\Microsoft\Windows\INetCache\IE\5OOJIZAK" 
        alt="AgriHub Logo" 
        className="h-10 md:h-12" // Adjust height as needed
      />
    </div>
  );
};

export default Logo;
