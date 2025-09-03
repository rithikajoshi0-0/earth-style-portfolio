import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 88 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Deep Learning", level: 92 },
        { name: "Neural Networks", level: 88 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 82 }
      ]
    },
    {
      category: "Data Science",
      skills: [
        { name: "Data Analysis", level: 94 },
        { name: "Statistical Modeling", level: 88 },
        { name: "Data Visualization", level: 90 },
        { name: "Big Data Processing", level: 85 }
      ]
    },
    {
      category: "Full Stack Development",
      skills: [
        { name: "React/Next.js", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Database Design", level: 87 },
        { name: "Cloud Services", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skill Constellations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A cosmic arrangement of technical expertise spanning AI, data science, and full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;