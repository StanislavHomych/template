'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedBlockProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animationType?: 'fade' | 'slide' | 'fade-slide';
}

export default function AnimatedBlock({ 
  children, 
  delay = 0, 
  className = '',
  animationType = 'fade-slide'
}: AnimatedBlockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fade: isVisible ? 'opacity-100' : 'opacity-0',
    slide: isVisible ? 'translate-y-0' : 'translate-y-8',
    'fade-slide': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
}

