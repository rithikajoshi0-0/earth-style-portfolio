import React, { useState, useEffect } from 'react';
import Navigation from './components/layout/navigation';
import Hero from './sections/hero';
import About from './sections/about';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Contact from './sections/contact';
import Starfield from './components/ui/starfield';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      {/* Starfield Background */}
      <Starfield />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div id="hero">
          <Hero onNavigate={handleNavigate} />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-purple-500/20 bg-slate-900/80 backdrop-blur-sm">
        <p className="text-gray-400">
          © 2025 Rithika Joshi B. Crafted with passion for innovation.
        </p>
      </footer>
    </div>
  );
}

export default App;