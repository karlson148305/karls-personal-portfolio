import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../hooks/use-theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-orbitron font-bold text-steel">
              KF<span className="text-secondary">N</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle - Ball Bearing Style */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="relative w-12 h-6 bg-muted rounded-full p-1 transition-all duration-300 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              <div className={`absolute inset-1 w-4 h-4 bg-gradient-to-br from-steel to-steel-light rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
              </div>
              <Sun className={`absolute left-1.5 top-1.5 h-3 w-3 text-mechanical-orange transition-opacity ${
                theme === 'light' ? 'opacity-100' : 'opacity-0'
              }`} />
              <Moon className={`absolute right-1.5 top-1.5 h-3 w-3 text-blueprint-blue transition-opacity ${
                theme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`} />
            </button>
          </nav>

          {/* Mobile menu and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="relative w-10 h-5 bg-muted rounded-full p-0.5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className={`w-4 h-4 bg-gradient-to-br from-steel to-steel-light rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
              }`}>
                <div className="w-1.5 h-1.5 bg-secondary rounded-full opacity-60"></div>
              </div>
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary transition-colors w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;