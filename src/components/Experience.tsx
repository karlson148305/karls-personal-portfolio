import { Card } from './ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import experienceFactory from '../assets/experience-factory.jpg';

const Experience = () => {
  const experiences = [
    {
      company: "Schwing Stetter",
      position: "Production Intern", 
      location: "India",
      period: "2025",
      type: "International Internship",
      description: "International internship experience in construction equipment manufacturing. Exposed to advanced production techniques and global manufacturing standards in heavy machinery production, specifically transit mixers.",
      achievements: [
        "Observed transit mixer manufacturing processes",
        "Studied heavy machinery production techniques",
        "Gained international work experience",
        "Collaborated with multicultural engineering teams"
      ],
      skills: ["Heavy Machinery", "Manufacturing Standards", "Cross-cultural Communication", "Industrial Operations"]
    },
    {
      company: "Nohi Chocolat",
      position: "Production Site Assistant",
      location: "Cameroon",
      period: "2024",
      type: "Internship",
      description: "Gained hands-on experience in industrial production processes, quality control, and manufacturing operations. Observed production line optimization and learned about efficient workflow management.",
      achievements: [
        "Analyzed production efficiency metrics",
        "Assisted in quality control procedures", 
        "Learned industrial safety protocols",
        "Participated in process improvement discussions"
      ],
      skills: ["Production Management", "Quality Control", "Industrial Safety", "Process Analysis"]
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 43, 54, 0.85), rgba(33, 43, 54, 0.85)), url(${experienceFactory})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-3">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Building industry knowledge through hands-on experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background hidden md:block z-10"></div>

                {/* Content */}
                <div className="md:pl-16">
                  <Card className="card-mechanical">
                    <div className="p-4">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-base font-orbitron font-bold text-steel mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-sm font-semibold text-secondary mb-1">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </div>
                          <span className="inline-flex items-center px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-3">
                        <h5 className="font-semibold text-steel mb-1 text-sm">Key Achievements:</h5>
                        <ul className="space-y-0.5">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-secondary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-semibold text-steel mb-1 text-sm">Skills Developed:</h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Focus */}
        <div className="mt-16">
          <Card className="card-mechanical bg-gradient-to-r from-steel/5 to-secondary/5 border-steel/20">
            <div className="p-5 text-center">
              <h3 className="text-base font-orbitron font-bold text-steel mb-2">
                Career Focus
              </h3>
              <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm">
                Though my experience lies in production, my true calling is in design engineering. 
                I'm passionate about transitioning from production operations to mechanical design and innovation, 
                where I can apply my understanding of manufacturing constraints to create better, more efficient designs.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-steel text-primary-foreground rounded-lg font-orbitron font-medium text-sm">
                  Design Engineering
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg font-orbitron font-medium text-sm">
                  CAD Innovation
                </span>
                <span className="px-3 py-1 bg-mechanical-orange text-white rounded-lg font-orbitron font-medium text-sm">
                  Sustainable Solutions
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
