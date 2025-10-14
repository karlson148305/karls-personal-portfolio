import { useEffect, useState, useCallback, useRef } from 'react';

interface ScrollState {
  x: number;
  y: number;
  direction: 'up' | 'down' | null;
}

export const useOptimizedScroll = (throttleMs: number = 100) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    x: 0,
    y: 0,
    direction: null,
  });
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
    
    setScrollState({
      x: window.scrollX,
      y: currentScrollY,
      direction,
    });
    
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (!ticking.current) {
          window.requestAnimationFrame(updateScrollState);
          ticking.current = true;
        }
      }, throttleMs);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [throttleMs, updateScrollState]);

  return scrollState;
};
