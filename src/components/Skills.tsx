import { Card } from './ui/card';
import { useState, useEffect } from 'react';
import skillsGranta from '../assets/skills-granta.jpg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "SolidWorks", level: 90, category: "CAD Software" },
    { name: "Ansys Granta", level: 70, category: "Materials Analysis" },
    { name: "MS Office Pack", level: 95, category: "Productivity" },
    { name: "English", level: 80, category: "Languages (B2)" },
    { name: "French", level: 100, category: "Languages (Native)" },
    { name: "Project Management", level: 75, category: "Leadership" },
    { name: "Critical Thinking", level: 85, category: "Problem Solving" },
    { name: "Team Collaboration", level: 88, category: "Soft Skills" }
  ];

  const skillCategories = [
    { name: "CAD & Design", skills: ["SolidWorks", "3D Modeling", "Technical Drawing"] },
    { name: "Analysis & Simulation", skills: ["Ansys Granta", "Materials Research", "Performance Analysis"] },
    { name: "Languages", skills: ["French (Native)", "English (B2)", "Technical Communication"] },
    { name: "Project Management", skills: ["Agile Methodology", "Team Leadership", "Documentation"] },
    { name: "Soft Skills", skills: ["Critical Thinking", "Problem Solving", "Communication"] }
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
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4 animate-fade-in">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 mb-4 animate-fade-in" style={{animationDelay: '200ms'}}>
            Expertise across mechanical design and engineering tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 animate-slide-up">
              Proficiency Levels
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-sm text-gray-300 ml-2">({skill.category})</span>
                  </div>
                  <span className="text-secondary font-orbitron font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar hover:shadow-lg transition-shadow duration-300">
                  <div 
                    className="skill-progress hover:shadow-glow"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 animate-slide-up">
              Core Competencies
            </h3>
            <div className="grid gap-4">
              {skillCategories.map((category, index) => (
                <Card key={index} className="card-mechanical bg-card/70 backdrop-blur-sm hover:bg-card/90 hover:shadow-xl hover:scale-[1.05] hover:rotate-1 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="p-4">
                    <h4 className="text-lg font-orbitron font-semibold text-steel mb-3 flex items-center">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse shadow-glow"></div>
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium border border-secondary/20 hover:bg-secondary/20 hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-sm hover:shadow-glow animate-fade-in"
                          style={{animationDelay: `${skillIndex * 100}ms`}}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16">
          <Card className="card-mechanical bg-gradient-to-r from-secondary/5 to-accent/5 border-secondary/20">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-orbitron font-bold text-steel mb-4">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Currently expanding my expertise in advanced simulation tools and exploring cutting-edge 
                materials research. Always eager to learn new technologies that can enhance mechanical design processes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Advanced Simulation', 'Materials Science', 'Sustainable Design', 'Industry 4.0'].map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-orbitron font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;