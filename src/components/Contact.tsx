import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea'; 
import { Mail, Linkedin, Github, Download, Phone, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "karl.ngueko@example.com",
      link: "mailto:karl.ngueko@example.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn", 
      value: "Karl Friedrich NGUEKO TCHINDEU",
      link: "https://linkedin.com/in/karl-friedrich-ngueko-tchindeu"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "@karlson148305",
      link: "https://github.com/karlson148305"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Institut UCAC-ICAM",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-steel mb-4">
            Let's Work Together!
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Ready to design something amazing? Get in touch and let's discuss your next project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-steel mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on engineering projects, 
                or simply connect with fellow engineers and innovators. Whether you have a specific project 
                in mind or just want to explore possibilities, don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-mechanical">
                  <div className="p-4">
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 hover:text-secondary transition-colors"
                      >
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-steel">{info.title}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-steel">{info.title}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="card-mechanical bg-gradient-to-r from-secondary/5 to-accent/5 border-secondary/20">
              <div className="p-6 text-center">
                <h4 className="text-lg font-orbitron font-bold text-steel mb-3">
                  Download My Resume
                </h4>
                <p className="text-muted-foreground mb-4">
                  Get a detailed overview of my skills, experience, and projects.
                </p>
                <Button className="btn-hero">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-mechanical">
              <div className="p-6">
                <h3 className="text-2xl font-orbitron font-bold text-steel mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-steel mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-steel mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-steel mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
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

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Karl Friedrich NGUEKO TCHINDEU. Designed with passion for mechanical engineering.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            "Engineering with purpose. Designing for performance."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;