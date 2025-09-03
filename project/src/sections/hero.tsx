import React from 'react';
import { ChevronDown } from 'lucide-react';
import Globe from '../components/ui/globe';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rithika Joshi B
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              Artificial Intelligence & Data Science
            </p>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-lg text-gray-400 leading-relaxed">
              A passionate AI and Data Science developer who thrives at the intersection of advanced programming and innovation. 
              With expertise in Python and C extensions, data structures, and full stack development, she creates powerful 
              solutions that push the boundaries of technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Explore My Work
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 border-2 border-purple-500 text-purple-300 rounded-full font-medium transition-all duration-300 hover:bg-purple-500/10 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        {/* Right side - Globe */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Globe />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;