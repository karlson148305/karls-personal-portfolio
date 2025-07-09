import { Card } from './ui/card';
import karlProfile from '../assets/karl-profile-2.jpg';
import aboutBlueprint from '../assets/about-blueprint.jpg';
const About = () => {
  return <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${aboutBlueprint})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-3 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg glow-blue group-hover:scale-105 transition-all duration-500 animate-float">
                <img src={karlProfile} alt="Karl Friedrich NGUEKO TCHINDEU" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 shadow-lg rounded-3xl py-[14px] px-[8px] animate-bounce hover:animate-pulse group-hover:scale-110 transition-all duration-300">
                <p className="font-orbitron font-bold text-sm">Mechanical Design</p>
                <p className="font-orbitron font-bold text-sm text-center">Engineer</p>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 animate-slide-up">
                  Passionate About Innovation
                </h3>
                <p className="text-gray-300 leading-relaxed animate-fade-in" style={{animationDelay: '200ms'}}>
                  Currently pursuing General Engineering with a specialization in Mechanical Engineering 
                  at Institut UCAC-ICAM, I am driven by a passion for innovation, real-world problem-solving, 
                  and sustainable design solutions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-orbitron font-semibold text-white mb-2 animate-slide-up" style={{animationDelay: '400ms'}}>
                  Educational Background
                </h4>
                <Card className="p-3 card-mechanical bg-card/80 backdrop-blur-sm hover:bg-card/90 hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '600ms'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-semibold text-steel text-sm">General Engineering</p>
                      <p className="text-xs text-muted-foreground">Specialization in Mechanical Engineering</p>
                      <p className="text-xs font-medium text-secondary">Institut UCAC-ICAM</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h4 className="text-lg font-orbitron font-semibold text-white mb-2 animate-slide-up" style={{animationDelay: '800ms'}}>
                  Core Values
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[{
                  icon: '💡',
                  title: 'Innovation',
                  desc: 'Creative solutions'
                }, {
                  icon: '🔧',
                  title: 'Problem-Solving',
                  desc: 'Real-world focus'
                }, {
                  icon: '🌱',
                  title: 'Sustainability',
                  desc: 'Eco-friendly designs'
                }].map((value, index) => <Card key={index} className="p-3 text-center card-mechanical bg-card/80 backdrop-blur-sm hover:bg-card/90 hover:scale-110 hover:rotate-2 transition-all duration-300 animate-fade-in" style={{animationDelay: `${1000 + index * 200}ms`}}>
                      <div className="text-xl mb-1 animate-bounce">{value.icon}</div>
                      <h5 className="font-orbitron font-semibold text-steel text-sm">{value.title}</h5>
                      <p className="text-xs text-muted-foreground">{value.desc}</p>
                    </Card>)}
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm border border-border p-4 rounded-2xl hover:bg-card/90 hover:scale-105 transition-all duration-300 animate-fade-in glow-blue" style={{animationDelay: '1600ms'}}>
                <blockquote className="text-base italic text-steel font-medium">
                  "I believe engineering is not just about machines, but about mastering ideas to improve the world."
                </blockquote>
                <p className="text-right text-secondary font-orbitron font-semibold mt-2 animate-pulse text-sm">
                  - Karl Friedrich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;