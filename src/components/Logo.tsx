
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span className="text-2xl font-bold text-agrihub-darkGreen">AGRI<span className="text-agrihub-green">HUB</span></span>
    </div>
  );
};

export default Logo;
