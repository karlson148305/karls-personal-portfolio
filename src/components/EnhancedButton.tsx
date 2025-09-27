import React, { useState } from 'react';
import { Button, ButtonProps } from './ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends ButtonProps {
  loading?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  loadingText?: string;
  successText?: string;
  magneticEffect?: boolean;
  rippleEffect?: boolean;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  loading = false,
  success = false,
  icon,
  loadingText = 'Loading...',
  successText = 'Success!',
  magneticEffect = true,
  rippleEffect = true,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    if (rippleEffect) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = { x, y, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }

    onClick?.(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticEffect || disabled || loading) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const isDisabled = disabled || loading;

  return (
    <Button
      {...props}
      className={cn(
        'relative overflow-hidden transition-all duration-300 transform-gpu',
        'hover:shadow-lg active:scale-95',
        success && 'bg-green-600 hover:bg-green-700 border-green-600',
        className
      )}
      disabled={isDisabled}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
      }}
    >
      <span className={cn(
        'relative z-10 flex items-center justify-center gap-2 transition-all duration-200',
        (loading || success) && 'transform'
      )}>
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText}
          </>
        ) : success ? (
          <>
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
            </div>
            {successText}
          </>
        ) : (
          <>
            {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
            {children}
          </>
        )}
      </span>

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
            animationDuration: '0.6s',
            animationFillMode: 'forwards',
          }}
        />
      ))}

      {/* Loading shimmer effect */}
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" 
             style={{ animation: 'shimmer 2s infinite' }} />
      )}

      {/* Hover glow effect */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 opacity-0 transition-opacity duration-300',
        !isDisabled && 'hover:opacity-100'
      )} />
    </Button>
  );
};