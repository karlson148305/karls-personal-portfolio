import { Card } from './ui/card';
import { Code, Settings, Briefcase } from 'lucide-react';

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
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-steel mb-4">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            From concept to CAD – Let's build what you imagine
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-mechanical group text-center hover:bg-card/80">
              <div className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-orbitron font-bold text-steel mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-steel mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your mechanical engineering ideas to life through innovative design and collaboration.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;