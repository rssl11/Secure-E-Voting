import React, { useState, useEffect } from 'react';

const CandidateManager = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const candidates = [
    { name: 'Jho Neil Poblacion', position: 'President', party: 'Tech-Forward', status: 'VERIFIED', color: 'bg-emerald-500' },
    { name: 'Alice Santos', position: 'Senator', party: 'Independent', status: 'PENDING', color: 'bg-stone-400' },
    { name: 'Mark Rivera', position: 'Vice President', party: 'Tech-Forward', status: 'VERIFIED', color: 'bg-[#8eb486]' },
    { name: 'Sofia Garcia', position: 'Secretary', party: 'Independent', status: 'VERIFIED', color: 'bg-[#4a5448]' },
  ];

  // Auto-play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % candidates.length);
    }, 4000); // Changes every 4 seconds
    return () => clearInterval(interval);
  }, [candidates.length]);

  const getCardStyles = (index) => {
    if (index === activeIndex) {
      return "z-30 scale-110 opacity-100 blur-0 translate-x-0";
    } else if (index === (activeIndex + 1) % candidates.length) {
      return "z-20 scale-90 opacity-60 blur-[2px] translate-x-24";
    } else if (index === (activeIndex - 1 + candidates.length) % candidates.length) {
      return "z-20 scale-90 opacity-60 blur-[2px] -translate-x-24";
    } else {
      return "z-10 scale-75 opacity-0 blur-md pointer-events-none";
    }
  };

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12 pt-32 overflow-hidden bg-[#e3f0e0]">
      <div className="max-w-7xl mx-auto text-center">
        
        <header className="mb-20">
          <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em] mb-4">Nominee Archive</p>
          <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">Candidate <span className="text-[#8eb486] italic font-medium">Registry</span></h2>
        </header>

        {/* Deck of Cards Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          {candidates.map((can, i) => (
            <div 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`absolute w-[350px] md:w-[400px] h-[550px] rounded-[3.5rem] overflow-hidden border border-white/60 shadow-2xl transition-all duration-700 ease-in-out cursor-pointer ${getCardStyles(i)}`}
            >
              {/* Profile Background */}
              <div className={`absolute inset-0 ${can.color} opacity-90`}></div>
              
              {/* Arrow Icon Button */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white text-xl">
                ↗
              </div>

              {/* Status Badge */}
              <div className="absolute top-8 left-8">
                <span className="text-[10px] font-black px-4 py-1.5 rounded-full backdrop-blur-md border bg-white/20 border-white/40 text-white uppercase">
                  {can.status}
                </span>
              </div>

              {/* Glass Info Plate */}
              <div className="absolute bottom-4 left-4 right-4 p-8 bg-white/20 backdrop-blur-[40px] border border-white/40 rounded-[2.5rem] text-left">
                <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">{can.position}</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{can.name}</h3>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <p className="text-[11px] text-white/70 font-bold uppercase tracking-widest">{can.party}</p>
                  <button className="text-[10px] font-black text-white hover:text-emerald-300 transition-colors uppercase">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {candidates.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-10 bg-[#4a5448]' : 'w-2 bg-[#8eb486]/40'}`}
            />
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <button className="px-12 py-5 bg-[#4a5448] text-[#e3f0e0] rounded-3xl font-black uppercase tracking-widest hover:shadow-2xl transition-all active:scale-95 shadow-lg shadow-green-900/10">
            Import Nominee Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateManager;