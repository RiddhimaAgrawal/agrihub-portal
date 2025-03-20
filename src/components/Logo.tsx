
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <h1 className="text-xl md:text-2xl font-display font-bold tracking-tight">
        <span className="text-agrihub-darkGreen">AGRI</span>
        <span className="text-agrihub-green">HUB</span>
      </h1>
    </div>
  );
};

export default Logo;
