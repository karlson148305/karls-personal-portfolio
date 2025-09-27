import { Card } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Badge } from './ui/badge';
import { useState, useEffect } from 'react';
import { Wrench, Zap, Users, Atom, Settings, Code, Monitor, Calculator } from 'lucide-react';
import skillsGranta from '../assets/skills-granta.jpg';
import { PulsingDot, ProgressiveReveal } from './InteractiveElements';
import { FloatingElement } from './MicroInteractions';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const engineeringDomains = [
    {
      id: 'project',
      name: 'Project Management',
      icon: Users,
      keySkills: [
        'Project Planning & Scheduling',
        'Risk Management',
        'Cost Estimation & Budgeting',
        'Communication & Team Leadership'
      ],
      tools: [
        'Microsoft Project',
        'Microsoft Excel',
        'FMEA Tools'
      ]
    },
    {
      id: 'mechanical',
      name: 'Mechanical Engineering',
      icon: Wrench,
      keySkills: [
        'CAD Design & Drafting',
        'Mechanical Systems Design',
        'Finite Element Analysis (FEA)',
        'Design for Manufacturing/Assembly (DFM/DFA)',
        'Fluid Mechanics',
        'Mechanical Testing'
      ],
      tools: [
        'SolidWorks',
        'AutoCAD / Inventor',
        'Fusion 360',
        'PTC Creo',
        'CFD Tools (Fluent, OpenFOAM)'
      ]
    },
    {
      id: 'material',
      name: 'Material Science',
      icon: Atom,
      keySkills: [
        'Material Selection & Characterization',
        'Failure Analysis',
        'Corrosion & Fatigue Testing',
        'Phase Diagrams & Heat Treatment',
        'Composites & Polymers'
      ],
      tools: [
        'Ansys Granta (Material Selector)'
      ]
    },
    {
      id: 'electrical',
      name: 'Electrical & Electronics Engineering',
      icon: Zap,
      keySkills: [
        'Circuit Design (Analog/Digital)',
        'Control Systems'
      ],
      tools: [
        'Proteus / Multisim / LTspice',
        'MATLAB / Simulink',
        'Arduino IDE',
        'AutoCAD Electrical'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 43, 54, 0.9), rgba(33, 43, 54, 0.9)), url(${skillsGranta})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'blur(0.5px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-3 animate-fade-in typing-animation">
            Engineering Expertise
          </h2>
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in" style={{animationDelay: '200ms'}}>
            Comprehensive competencies across four engineering domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <Tabs defaultValue="project" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/70 backdrop-blur-sm">
            {engineeringDomains.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <TabsTrigger 
                  key={domain.id} 
                  value={domain.id}
                  className="flex items-center gap-2 text-foreground data-[state=active]:text-foreground data-[state=active]:bg-secondary"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline font-orbitron">{domain.name.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {engineeringDomains.map((domain) => {
            const IconComponent = domain.icon;
            return (
              <TabsContent key={domain.id} value={domain.id} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <IconComponent className="w-8 h-8 text-secondary" />
                    <h3 className="text-2xl font-orbitron font-bold text-white">
                      {domain.name}
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Key Skills */}
                  <FloatingElement intensity={0.2}>
                    <Card className="card-mechanical bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 enhanced-hover h-full">
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Settings className="w-5 h-5 text-secondary animate-spin" style={{animationDuration: '3s'}} />
                          <h4 className="text-xl font-orbitron font-semibold text-white">
                            Key Skills
                          </h4>
                        </div>
                        <div className="space-y-3">
                          {domain.keySkills.map((skill, index) => (
                            <ProgressiveReveal 
                              key={index} 
                              delay={index * 100}
                              direction="left"
                            >
                              <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/20 hover:bg-secondary/10 transition-all duration-300 enhanced-hover">
                                <PulsingDot className="flex-shrink-0" />
                                <span className="text-foreground font-medium">{skill}</span>
                              </div>
                            </ProgressiveReveal>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </FloatingElement>

                  {/* Tools & Software */}
                  <FloatingElement intensity={0.2}>
                    <Card className="card-mechanical bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 enhanced-hover h-full">
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Monitor className="w-5 h-5 text-secondary" />
                          <h4 className="text-xl font-orbitron font-semibold text-white">
                            Tools & Software
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {domain.tools.map((tool, index) => (
                            <ProgressiveReveal 
                              key={index}
                              delay={index * 150}
                              direction="up"
                            >
                              <span className="px-3 py-2 bg-secondary/10 text-secondary rounded-lg font-medium border border-secondary/20 hover:bg-secondary/20 hover:scale-105 transition-all duration-300 enhanced-hover">
                                {tool}
                              </span>
                            </ProgressiveReveal>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </FloatingElement>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;