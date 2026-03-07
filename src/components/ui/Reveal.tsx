'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  effect?: "fade-up" | "fade-left" | "fade-right" | "scale-up" | "blur-in";
  className?: string;
}

export const Reveal = ({ children, delay = 0, effect = "fade-up", className = "" }: RevealProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const getEffectClasses = () => {
    switch(effect) {
      case "fade-up": return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20';
      case "fade-left": return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20';
      case "fade-right": return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20';
      case "scale-up": return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
      case "blur-in": return isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110';
      default: return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) ${getEffectClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
