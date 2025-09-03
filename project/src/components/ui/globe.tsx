import React from "react";

const Globe: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 
            0%, 100% { opacity: 0.1; } 
            50% { opacity: 1; } 
          }
          @keyframes twinkling-slow { 
            0%, 100% { opacity: 0.1; } 
            50% { opacity: 1; } 
          }
          @keyframes twinkling-long { 
            0%, 100% { opacity: 0.1; } 
            50% { opacity: 1; } 
          }
          @keyframes twinkling-fast { 
            0%, 100% { opacity: 0.1; } 
            50% { opacity: 1; } 
          }
        `}
      </style>
      <div className="flex items-center justify-center">
        <div
          className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.3),-5px_0_8px_#c3f4ff_inset,15px_2px_25px_#000_inset,-24px_-2px_34px_#c3f4ff99_inset,250px_0_44px_#00000066_inset,150px_0_38px_#000000aa_inset]"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg')",
            backgroundSize: "400px 280px",
            backgroundPosition: "left",
            animation: "earthRotate 30s linear infinite",
          }}
        >
          {/* Twinkling Stars */}
          <div
            className="absolute left-[-20px] top-[50px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[-40px] top-[30px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
          <div
            className="absolute left-[320px] top-[90px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[300px] top-[290px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[50px] top-[320px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-fast 1.5s infinite" }}
          />
          <div
            className="absolute left-[350px] top-[-20px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[360px] top-[60px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
        </div>
      </div>
    </>
  );
};

export default Globe;