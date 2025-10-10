import { ReactNode, useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const sectionTop = rect.top + scrolled;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate offset only when section is in view
        if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
          setOffsetY((scrolled - sectionTop) * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={className}>
      <div style={{ transform: `translateY(${offsetY}px)`, transition: 'transform 0.1s ease-out' }}>
        {children}
      </div>
    </div>
  );
};
