
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedStepProps {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const AnimatedStep = ({ 
  step, 
  title, 
  description, 
  isActive, 
  onClick,
  icon
}: AnimatedStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      onClick={onClick}
      className={cn(
        "relative flex gap-4 p-4 rounded-lg cursor-pointer transition-all duration-500 opacity-0",
        isVisible ? "opacity-100 translate-x-0" : "translate-x-[-20px]",
        isActive 
          ? "bg-vincero-blue/40 border border-vincero-lightBlue/30" 
          : "hover:bg-white/5"
      )}
      style={{ 
        transitionDelay: `${step * 100}ms`,
      }}
    >
      <div className={cn(
        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
        isActive ? "bg-vincero-lightBlue text-vincero-blue" : "bg-white/10 text-white"
      )}>
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-xs font-semibold px-2 py-0.5 rounded-full transition-colors",
            isActive ? "bg-vincero-orange/20 text-vincero-orange" : "bg-white/10 text-white/70"
          )}>
            Paso {step}
          </span>
          <h3 className={cn(
            "text-lg font-bold transition-colors",
            isActive ? "text-vincero-lightBlue" : "text-white"
          )}>
            {title}
          </h3>
        </div>
        <p className="text-sm text-white/70 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedStep;
