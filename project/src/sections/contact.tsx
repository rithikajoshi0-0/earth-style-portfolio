import React from 'react';
import { Mail, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rithikajoshi.b@gmail.com",
      href: "mailto:rithikajoshi.b@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/rithikajoshi1130",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/rithikajoshi0-0",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "Follow my journey",
      href: "https://www.instagram.com/rithikajoshi.b/?hl=en",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Cosmic Connections
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore new possibilities together? Reach out and let's create something extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 transition-all duration-500 hover:border-purple-500/40 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 bg-gradient-to-r ${contact.color} bg-opacity-20 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {contact.value}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-purple-400 mx-auto" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build the Future Together
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Whether you're looking to collaborate on AI projects, discuss data science innovations, 
              or explore full-stack solutions, I'm always excited to connect with fellow innovators 
              and forward-thinking organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;