import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0] pt-44 pb-16 px-6">
      {/* Background Atmosphere */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#8eb486] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-6xl font-black tracking-tighter text-[#3e473c] mb-12">
          The <span className="text-[#8eb486]">Protocol</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-[#6b7c68] leading-relaxed">
              Our system is architected to eliminate the vulnerabilities of legacy voting. By leveraging modern cryptographic primitives, we ensure every voice is captured with absolute integrity.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {['Secure Access Levels.', 'Live Vote Tracking.', 'Fake Account Protection.'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white/30 border border-white/80 rounded-2xl backdrop-blur-xl shadow-sm">
                  <span className="text-[#8eb486] font-black text-lg">0{i+1}</span>
                  <span className="font-bold text-[#4a5448] tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/80 shadow-2xl relative overflow-hidden">
             {/* Diagonal Gloss */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
             
             <div className="relative z-10">
                <h4 className="font-black text-[#8eb486] uppercase tracking-[0.2em] text-[10px] mb-6">Institutional Mission</h4>
                <p className="text-3xl font-medium text-[#3e473c] leading-tight italic">
                  "To empower institutional democracy through technology that is impossible to compromise and effortless to verify."
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;