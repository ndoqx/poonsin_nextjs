"use client";

import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  effect?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "blur-in";
  className?: string;
}

export const Reveal = ({ children, delay = 0, effect = "fade-up", className = "" }: RevealProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const getEffectClasses = () => {
    switch(effect) {
      case "fade-up": return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case "fade-down": return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12';
      case "fade-left": return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case "fade-right": return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case "scale-up": return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      case "blur-in": return isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-105';
      default: return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-[800ms] ease-out ${getEffectClasses()} ${className}`}>
      {children}
    </div>
  );
};
