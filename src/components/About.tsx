import { Card } from './ui/card';
import karlProfile from '../assets/karl-profile.jpg';
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-steel mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src={karlProfile} alt="Karl Friedrich NGUEKO TCHINDEU" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
                <p className="font-orbitron font-bold text-sm">Mechanical Design</p>
                <p className="font-orbitron font-bold text-sm text-center">Engineer</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-steel mb-4">
                  Passionate About Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing General Engineering with a specialization in Mechanical Engineering 
                  at Institut UCAC-ICAM, I am driven by a passion for innovation, real-world problem-solving, 
                  and sustainable design solutions.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-semibold text-steel mb-3">
                  Educational Background
                </h4>
                <Card className="p-4 card-mechanical">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div>
                      <p className="font-semibold text-steel">General Engineering</p>
                      <p className="text-sm text-muted-foreground">Specialization in Mechanical Engineering</p>
                      <p className="text-sm font-medium text-secondary">Institut UCAC-ICAM</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-semibold text-steel mb-3">
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
                }].map((value, index) => <Card key={index} className="p-4 text-center card-mechanical">
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <h5 className="font-orbitron font-semibold text-steel">{value.title}</h5>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </Card>)}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <blockquote className="text-lg italic text-steel font-medium">
                  "I believe engineering is not just about machines, but about mastering ideas to improve the world."
                </blockquote>
                <p className="text-right text-secondary font-orbitron font-semibold mt-2">
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