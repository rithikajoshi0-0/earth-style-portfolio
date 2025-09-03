import React from 'react';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Python & C Extensions",
      description: "Deep expertise in Python development and C extensions for performance optimization"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Structures",
      description: "Advanced knowledge of complex data structures and algorithmic optimization"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Development",
      description: "Cutting-edge artificial intelligence solutions and machine learning implementations"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Full Stack",
      description: "End-to-end development capabilities from backend systems to user interfaces"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Constantly exploring new frontiers in AI, I bridge creativity and technical precision 
            to deliver impactful projects that shape the future of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-800/70 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;