import { Card } from './ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Nohi Chocolat",
      position: "Production Intern",
      location: "Cameroon",
      period: "2023",
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
    {
      company: "Schwing Stetter",
      position: "Production Intern", 
      location: "India",
      period: "2024",
      type: "International Internship",
      description: "International internship experience in construction equipment manufacturing. Exposed to advanced production techniques and global manufacturing standards in heavy machinery production.",
      achievements: [
        "Studied heavy machinery manufacturing processes",
        "Gained international work experience",
        "Learned advanced production techniques",
        "Collaborated with multicultural teams"
      ],
      skills: ["Heavy Machinery", "Manufacturing Standards", "Cross-cultural Communication", "Industrial Operations"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-steel mb-4">
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
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-orbitron font-bold text-steel mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-semibold text-secondary mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <span className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-steel mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-semibold text-steel mb-2">Skills Developed:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
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
            <div className="p-8 text-center">
              <h3 className="text-2xl font-orbitron font-bold text-steel mb-4">
                Career Focus
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Though my experience lies in production, my true calling is in design engineering. 
                I'm passionate about transitioning from production operations to mechanical design and innovation, 
                where I can apply my understanding of manufacturing constraints to create better, more efficient designs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-steel text-primary-foreground rounded-lg font-orbitron font-medium">
                  Design Engineering
                </span>
                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-orbitron font-medium">
                  CAD Innovation
                </span>
                <span className="px-4 py-2 bg-mechanical-orange text-white rounded-lg font-orbitron font-medium">
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