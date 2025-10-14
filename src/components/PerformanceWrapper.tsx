import React, { Suspense, lazy, memo } from 'react';
import { Skeleton } from './ui/skeleton';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export const PerformanceWrapper = memo<PerformanceWrapperProps>(({ 
  children, 
  fallback,
  className = '' 
}) => {
  const defaultFallback = (
    <div className={`space-y-4 ${className}`}>
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-12 w-3/4" />
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
});

PerformanceWrapper.displayName = 'PerformanceWrapper';

// Lazy load wrapper utility
export const lazyWithPreload = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  const Component = lazy(factory);
  
  return Object.assign(Component, {
    preload: factory,
  });
};

// Intersection observer for lazy loading
export const useLazyLoad = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};
