import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import portfolioBackground from '../assets/portfolio-background.jpg';
import phoneHolderImage from '../assets/phone-holder-generated.jpg';
import droneAssemblyImage from '../assets/drone-assembly-generated.jpg';
import droneFlightImage from '../assets/drone-flight-generated.jpg';
import boatMainImage from '../assets/boat-main-generated.jpg';
import boatControllerImage from '../assets/boat-controller-generated.jpg';
import roomDesignImage from '../assets/room-design-generated.jpg';

const Portfolio = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
      card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
    };

    const handleMouseLeave = (index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;

      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    };

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, index);
        const mouseLeaveHandler = () => handleMouseLeave(index);

        card.addEventListener('mousemove', mouseMoveHandler);
        card.addEventListener('mouseleave', mouseLeaveHandler);

        return () => {
          card.removeEventListener('mousemove', mouseMoveHandler);
          card.removeEventListener('mouseleave', mouseLeaveHandler);
        };
      }
    });
  }, []);

  const projects = [
    {
      title: "Phone Holder Project",
      description: "Designed a phone holder prototype with adjustable angles for ergonomic use. Created detailed 3D models and prototypes focusing on user comfort and versatility.",
      tools: ["SolidWorks", "3D Modeling", "Prototyping"],
      teamwork: "3-member collaboration",
      github: "https://github.com/karlson148305/phone-holder",
      image: phoneHolderImage,
      features: [
        "Adjustable angle mechanism",
        "Ergonomic design principles",
        "Material optimization",
        "User-centered approach"
      ],
      category: "Product Design"
    },
    {
      title: "Drone Project", 
      description: "Developed a working drone integrating aerodynamics, energy systems, control algorithms, and mechanical design. Complete system from concept to flight testing.",
      tools: ["CAD Design", "Electrical Systems", "Control Algorithms", "Testing"],
      teamwork: "Multi-disciplinary project",
      github: "https://github.com/karlson148305/drone-project",
      images: [droneAssemblyImage, droneFlightImage],
      features: [
        "Aerodynamic optimization",
        "Energy system integration",
        "Autonomous algorithms",
        "Flight testing protocols"
      ],
      category: "Systems Integration"
    },
    {
      title: "Boat Project",
      description: "A two-year project combining mechanical design, electrical control, electronics integration, fluid mechanics, and systems engineering to develop a functional boat steering system.",
      tools: ["CAD Modeling", "Servo Control", "Hydraulic Systems", "Fluid Mechanics"],
      teamwork: "Multi-disciplinary engineering project",
      github: "https://github.com/karlson148305/Boat-Project",
      images: [boatMainImage, boatControllerImage],
      features: [
        "SolidWorks CAD modeling",
        "Servo-rudder control system",
        "Hydraulic actuation design",
        "Marine systems integration"
      ],
      category: "Marine Engineering"
    },
    {
      title: "Room-Design",
      description: "A one-month leisure project where I modeled my entire room in SolidWorks, focusing on accurate spatial dimensions, furniture layout, and realistic assembly of individual components. This exercise enhanced my 3D modeling skills and attention to detail in a real-world environment.",
      tools: ["SolidWorks", "3D Modeling", "CAD", "Design"],
      teamwork: "Individual leisure project",
      github: "https://github.com/karlson148305/Room-Design-Leisure-",
      image: roomDesignImage,
      features: [
        "Accurate spatial dimensions",
        "Detailed furniture layout",
        "Realistic component assembly",
        "Enhanced 3D modeling skills"
      ],
      category: "CAD Design"
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 43, 54, 0.85), rgba(33, 43, 54, 0.85)), url(${portfolioBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-3 animate-fade-in typing-animation">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-300 mb-4 animate-fade-in" style={{animationDelay: '200ms'}}>
            Engineering solutions from concept to reality
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 animate-fade-in" 
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Project Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/5"></div>
                  {project.images ? (
                    <div className="w-full h-full grid grid-cols-2 gap-1 p-2">
                      {project.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative overflow-hidden rounded-lg">
                          <img 
                            src={img} 
                            alt={`${project.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      ))}
                    </div>
                  ) : project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/10 to-transparent">
                      <div className="text-center animate-pulse">
                        <div className="w-16 h-16 bg-secondary/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-2xl">🔧</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-orbitron">Project Image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs font-orbitron font-medium rounded-full border border-secondary/20 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* GitHub button overlay */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="backdrop-blur-sm bg-background/80 hover:bg-secondary/90 shadow-lg"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Project Header */}
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools & Collaboration */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium border border-accent/20 hover:bg-accent/20 transition-colors duration-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Collaboration:</strong> {project.teamwork}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0 opacity-70"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Link */}
                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      onClick={() => window.open(project.github, '_blank')}
                      className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl h-10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in collaborating on engineering projects?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="btn-outline-hero"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;