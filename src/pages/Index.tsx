import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import ScrollIndicator from '../components/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollIndicator />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;