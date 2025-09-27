import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span className="animate-pulse text-secondary">|</span>
      )}
    </span>
  );
};

interface ProgressiveRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ProgressiveReveal: React.FC<ProgressiveRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  return (
    <div
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionClasses[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

interface SkillProgressBarProps {
  skill: string;
  level: number;
  delay?: number;
  color?: 'primary' | 'secondary' | 'accent';
}

export const SkillProgressBar: React.FC<SkillProgressBarProps> = ({
  skill,
  level,
  delay = 0,
  color = 'secondary'
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setProgress(level);
      }, 200);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  const colorClasses = {
    primary: 'from-primary to-primary/80',
    secondary: 'from-secondary to-accent',
    accent: 'from-accent to-accent/80'
  };

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <Badge variant="outline" className="text-xs">
          <AnimatedCounter target={level} suffix="%" />
        </Badge>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress bg-gradient-to-r ${colorClasses[color]}`}
          style={{
            width: `${progress}%`,
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </div>
  );
};

interface PulsingDotProps {
  className?: string;
  color?: string;
}

export const PulsingDot: React.FC<PulsingDotProps> = ({
  className = '',
  color = 'bg-secondary'
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`w-2 h-2 ${color} rounded-full animate-pulse`}></div>
      <div className={`absolute inset-0 w-2 h-2 ${color} rounded-full animate-ping opacity-75`}></div>
    </div>
  );
};