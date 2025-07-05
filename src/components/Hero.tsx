import { Button } from './ui/button';
import karlProfile from '../assets/karl-profile.jpg';
import mechanicalPattern from '../assets/mechanical-pattern.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 43, 54, 0.8), rgba(33, 43, 54, 0.8)), url(${mechanicalPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mechanical-pattern absolute inset-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-4">
              <span className="text-secondary font-orbitron font-medium text-lg">
                🔧 Engineering with purpose
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              KARL FRIEDRICH
              <br />
              <span className="text-gradient">NGUEKO TCHINDEU</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-orbitron">
              Aspiring Mechanical Design Engineer
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Specializing in CAD modeling and simulation. Skilled in SolidWorks and exploring 
              advanced tools like Ansys Granta to improve design accuracy and materials selection.
            </p>
            
            <div className="mb-8">
              <p className="text-secondary font-orbitron font-medium text-lg">
                "Designing smarter machines for a sustainable tomorrow."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-hero"
              >
                View Portfolio
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="btn-outline-hero"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary glow-blue animate-float">
                <img 
                  src={karlProfile} 
                  alt="Karl Friedrich NGUEKO TCHINDEU"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mechanical-orange/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;