import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Dynamic Routing Optimization System",
      description: "Advanced algorithmic solution for optimizing routing patterns using AI-driven decision making and real-time data processing.",
      tech: ["Python", "AI/ML", "Algorithms", "Data Science"],
      status: "Completed"
    },
    {
      title: "Ryze Platform",
      description: "Comprehensive platform leveraging cutting-edge technology to deliver scalable solutions for modern business challenges.",
      tech: ["Full Stack", "Python", "Data Analytics", "AI"],
      status: "Completed"
    },
    {
      title: "EVE (Education via Entertainment)",
      description: "Innovative educational platform that transforms learning through engaging, entertainment-based approaches powered by AI.",
      tech: ["AI/ML", "Full Stack", "Educational Tech", "UX Design"],
      status: "Completed"
    },
    {
      title: "Cynotech Service Website",
      description: "Modern service website project combining elegant design with powerful functionality for enhanced user experience.",
      tech: ["Full Stack", "Web Development", "UI/UX", "Modern Frameworks"],
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Galactic Ventures
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the constellation of projects that showcase innovation across AI, data science, and full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-500 hover:border-purple-500/40 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-all duration-300 cursor-pointer">
                    <ExternalLink size={18} />
                  </div>
                  <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-all duration-300 cursor-pointer">
                    <Github size={18} />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;