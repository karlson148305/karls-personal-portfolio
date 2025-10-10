import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const directionClasses = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    scale: 'scale-90'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : undefined
      }}
    >
      <div className={!isVisible ? directionClasses[direction] : ''}>
        {children}
      </div>
    </div>
  );
};
