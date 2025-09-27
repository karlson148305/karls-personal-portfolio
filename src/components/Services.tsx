import { Card } from './ui/card';
import { Code, Settings, Briefcase } from 'lucide-react';
import servicesBackground from '../assets/services-background.jpg';
import { MagneticButton, FloatingElement } from './MicroInteractions';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "3D CAD Modeling",
      description: "Transform your mechanical concepts into detailed 3D models using SolidWorks. From initial sketches to production-ready designs.",
      features: [
        "Concept to CAD conversion",
        "Detailed part modeling",
        "Assembly design",
        "Technical drawings"
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Material Optimization", 
      description: "Utilize Ansys Granta for intelligent material selection and optimization to ensure optimal performance and sustainability.",
      features: [
        "Material property analysis",
        "Performance optimization",
        "Sustainability assessment",
        "Cost-benefit analysis"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Collaborative Prototyping",
      description: "Work with cross-functional teams to bring your mechanical designs from concept to working prototypes.",
      features: [
        "Project management",
        "Team collaboration",
        "Prototype development",
        "Testing & validation"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 43, 54, 0.85), rgba(33, 43, 54, 0.85)), url(${servicesBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-3 animate-fade-in typing-animation">
            My Services
          </h2>
          <p className="text-lg text-gray-300 mb-4 animate-fade-in" style={{animationDelay: '200ms'}}>
            From concept to CAD – Let's build what you imagine
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FloatingElement key={index} intensity={0.3}>
              <MagneticButton className="w-full p-0 h-auto bg-transparent hover:bg-transparent">
                <Card className="card-mechanical group text-center hover:bg-card/80 bg-card/70 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in enhanced-hover h-full" 
                      style={{animationDelay: `${index * 200}ms`}}>
                  <div className="p-4 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow animate-pulse">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-orbitron font-bold text-steel mb-2 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1 mt-auto">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground animate-slide-left" 
                             style={{animationDelay: `${(index * 200) + (featureIndex * 100)}ms`}}>
                          <div className="w-1 h-1 bg-secondary rounded-full mr-2 flex-shrink-0 animate-pulse"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </MagneticButton>
            </FloatingElement>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <FloatingElement intensity={0.2}>
            <div className="bg-card border border-border rounded-xl p-5 max-w-xl mx-auto enhanced-hover">
              <h3 className="text-base font-orbitron font-bold text-steel mb-2 animate-fade-in">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm animate-fade-in stagger-1">
                Let's discuss how we can bring your mechanical engineering ideas to life through innovative design and collaboration.
              </p>
              <MagneticButton 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero h-8 text-sm px-6 py-2 rounded-lg animate-fade-in stagger-2"
              >
                Get In Touch
              </MagneticButton>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
};

export default Services;