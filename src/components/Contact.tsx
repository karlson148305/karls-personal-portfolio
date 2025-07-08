import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Download, Phone, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import contactBackground from '../assets/contact-background.jpg';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!"
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "karl.ngueko@example.com",
    link: "mailto:karl.ngueko@example.com"
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    title: "LinkedIn",
    value: "Karl Friedrich NGUEKO TCHINDEU",
    link: "https://linkedin.com/in/karl-friedrich-ngueko-tchindeu"
  }, {
    icon: <Github className="h-5 w-5" />,
    title: "GitHub",
    value: "@karlson148305",
    link: "https://github.com/karlson148305"
  }, {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    value: "Institut UCAC-ICAM",
    link: null
  }];
  return <section id="contact" className="py-20 relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(33, 43, 54, 0.85), rgba(33, 43, 54, 0.85)), url(${contactBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-3 animate-fade-in">
            Let's Work Together!
          </h2>
          <p className="text-base text-gray-300 mb-3 animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            Ready to design something amazing? Get in touch and let's discuss your next project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>


        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 animate-slide-up">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{
              animationDelay: '400ms'
            }}>
                I'm always excited to discuss new opportunities, collaborate on engineering projects, 
                or simply connect with fellow engineers and innovators. Whether you have a specific project 
                in mind or just want to explore possibilities, don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => <Card key={index} className="bg-card/70 backdrop-blur-sm hover:bg-card/90 hover:scale-105 hover:rotate-1 transition-all duration-300 rounded-3xl animate-fade-in" style={{
              animationDelay: `${600 + index * 100}ms`
            }}>
                  <div className="p-4 px-[12px] py-[12px]">
                    {info.link ? <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center space-x-4 hover:text-secondary transition-colors">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-steel text-sm">{info.title}</p>
                          <p className="text-muted-foreground text-xs">{info.value}</p>
                        </div>
                      </a> : <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-steel text-sm">{info.title}</p>
                          <p className="text-muted-foreground text-xs">{info.value}</p>
                        </div>
                      </div>}
                  </div>
                </Card>)}
            </div>

          </div>

            {/* Contact Form */}
            <div>
              <Card className="card-mechanical bg-card/70 backdrop-blur-sm hover:bg-card/90 hover:scale-[1.02] transition-all duration-300 animate-fade-in" style={{
            animationDelay: '800ms'
          }}>
                <div className="p-4">
                  <h3 className="text-base font-orbitron font-bold text-steel mb-3 animate-slide-up">
                    Send a Message
                  </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-steel mb-1">
                      Full Name
                    </label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="w-full h-8 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-steel mb-1">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="w-full h-8 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-steel mb-1">
                      Message
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hello!" rows={3} required className="w-full resize-none text-sm" />
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>


        {/* Resume Section */}
        <div className="text-center mb-16">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-sm mx-auto hover:bg-card/90 transition-all duration-300 animate-fade-in mt-8">
            <h3 className="text-base font-orbitron font-bold text-steel mb-3">My Resume</h3>
            <div className="bg-muted/50 rounded-lg p-3 mb-3">
              <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg">📄</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-orbitron">Resume Preview</p>
                </div>
              </div>
            </div>
            <button className="btn-hero w-full h-8 text-sm">
              <svg className="h-3 w-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download My Resume
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">© 2024 Karl Friedrich NGUEKO TCHINDEU. Designed with passion for mechanical engineering.</p>
          <p className="text-sm text-muted-foreground mt-2">
            "Engineering with purpose. Designing for performance."
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;