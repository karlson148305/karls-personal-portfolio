import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import portfolioBackground from '../assets/portfolio-background.jpg';

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
      image: null, // Placeholder for project images
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
      image: null, // Placeholder for project images
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
      image: null, // Placeholder for project images
      features: [
        "SolidWorks CAD modeling",
        "Servo-rudder control system",
        "Hydraulic actuation design",
        "Marine systems integration"
      ],
      category: "Marine Engineering"
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
              className="card-project parallax-tilt group animate-fade-in" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="overflow-hidden">
                {/* Project Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 border-b border-border group-hover:from-secondary/5 group-hover:to-accent/5 transition-all duration-500">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center animate-pulse">
                        <div className="w-16 h-16 bg-secondary/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-2xl">🔧</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-orbitron">
                          Project Image
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          Click to add image
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-4">
                  {/* Project Header */}
                  <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-orbitron font-medium text-secondary">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-base font-orbitron font-bold text-steel mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tools & Collaboration */}
                <div className="mb-3">
                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-steel mb-1">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <strong>Teamwork:</strong> {project.teamwork}
                  </p>
                </div>

                {/* Key Features */}
                <div className="flex-grow">
                  <h4 className="text-xs font-semibold text-steel mb-1">Key Features:</h4>
                  <ul className="space-y-0.5">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                  {/* Project Link */}
                  <div className="mt-3 pt-2 border-t border-border">
                    <Button 
                      onClick={() => window.open(project.github, '_blank')}
                      className="w-full btn-hero transform hover:scale-105 active:scale-95 transition-transform h-8 text-sm"
                    >
                      <Github className="h-3 w-3 mr-2" />
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