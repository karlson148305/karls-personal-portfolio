import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(Math.min(progress, 100));

          // Update active section
          const sections = ['home', 'about', 'portfolio', 'services', 'skills', 'experience', 'contact'];
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          
          if (currentSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
      <div 
        className="h-full bg-gradient-to-r from-secondary to-accent will-change-transform"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out'
        }}
      />
      
      {/* Current section indicator */}
      <div className="fixed top-20 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 z-40 hidden md:block will-change-transform">
        <p className="text-xs font-orbitron font-medium text-muted-foreground uppercase tracking-wider">
          Current: <span className="text-secondary">{activeSection}</span>
        </p>
      </div>
    </div>
  );
};

export default ScrollIndicator;