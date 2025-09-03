import React from 'react';

const Starfield: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {/* Layer 1 - Small stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-small-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Layer 2 - Medium stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-medium-${i}`}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.7,
              animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Layer 3 - Large twinkling stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-large-${i}`}
            className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.8,
              animation: `pulse ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Starfield;