import React, { useState } from 'react';

const RegistryHub = () => {
  const [selectedParty, setSelectedParty] = useState(null);

  // Mock Data reflecting your school/org structure
  const partyRegistry = [
    {
      id: 'TF-2026',
      name: 'Tech-Forward Party',
      tagline: 'Digitizing Campus Integrity',
      color: 'bg-emerald-500',
      candidates: [
        { name: 'Jho Neil Poblacion', position: 'President', status: 'VERIFIED' },
        { name: 'Mark Rivera', position: 'Vice President', status: 'VERIFIED' }
      ],
      positions: [
        { title: 'Executive Board', seats: 2 },
        { title: 'College Representatives', seats: 12 }
      ]
    },
    {
      id: 'IND-2026',
      name: 'Independent Alliance',
      tagline: 'Transparency Above All',
      color: 'bg-stone-400',
      candidates: [
        { name: 'Alice Santos', position: 'Senator', status: 'PENDING' }
      ],
      positions: [
        { title: 'General Pool', seats: 5 }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12 bg-[#e3f0e0]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-b border-[#bdcfbc] pb-10">
          <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em] mb-4">Registry Management v4.0</p>
          <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">
            {selectedParty ? selectedParty.name : "Select a Party Slate"}
          </h2>
        </header>

        {!selectedParty ? (
          /* --- PARTY SELECTION DECK --- */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in zoom-in duration-500">
            {partyRegistry.map((party) => (
              <div 
                key={party.id}
                onClick={() => setSelectedParty(party)}
                className="group cursor-pointer bg-white/30 backdrop-blur-xl border border-white/80 p-12 rounded-[3.5rem] hover:scale-[1.02] transition-all shadow-xl relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${party.color} opacity-10 rounded-bl-full`}></div>
                <h3 className="text-3xl font-black text-[#3e473c] uppercase mb-2">{party.name}</h3>
                <p className="text-[10px] font-bold text-[#8eb486] uppercase tracking-[0.3em] mb-8">{party.tagline}</p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-black bg-[#4a5448] text-white px-4 py-2 rounded-xl uppercase">
                    {party.candidates.length} Nominees
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- UNIFIED CANDIDATE & POSITION VIEW --- */
          <div className="animate-in slide-in-from-bottom-10 duration-700">
            <button 
              onClick={() => setSelectedParty(null)}
              className="mb-12 text-[10px] font-black text-[#8eb486] uppercase tracking-widest hover:text-[#3e473c] transition-colors"
            >
              ← Back to Party Deck
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Positions Panel */}
              <div className="space-y-6">
                <h4 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-6">Defined Positions</h4>
                {selectedParty.positions.map((pos, i) => (
                  <div key={i} className="bg-white/40 border border-white/80 p-6 rounded-3xl shadow-sm">
                    <p className="text-lg font-black text-[#3e473c] uppercase">{pos.title}</p>
                    <p className="text-[10px] font-bold text-[#8eb486] uppercase">{pos.seats} Total Seats</p>
                  </div>
                ))}
                <button className="w-full py-4 border-2 border-dashed border-[#bdcfbc] rounded-3xl text-[10px] font-black text-[#8eb486] uppercase hover:bg-white/20 transition-all">
                  + Add Position Branch
                </button>
              </div>

              {/* Candidates Panel */}
              <div className="lg:col-span-2 space-y-6">
                <h4 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-6">Active Nominees</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedParty.candidates.map((can, i) => (
                    <div key={i} className="bg-white/30 backdrop-blur-md border border-white/80 p-8 rounded-[2.5rem] relative group">
                      <span className="absolute top-6 right-6 text-[9px] font-black text-[#8eb486] border border-[#8eb486]/30 px-3 py-1 rounded-full">
                        {can.status}
                      </span>
                      <p className="text-[10px] font-bold text-[#8eb486] uppercase tracking-widest mb-1">{can.position}</p>
                      <h5 className="text-xl font-black text-[#3e473c] uppercase mb-4">{can.name}</h5>
                      <div className="flex gap-4 pt-4 border-t border-[#bdcfbc]/30">
                        <button className="text-[9px] font-black text-[#6b7c68] uppercase hover:text-[#3e473c]">Edit</button>
                        <button className="text-[9px] font-black text-red-700 uppercase hover:text-red-500">Remove</button>
                      </div>
                    </div>
                  ))}
                  <button className="h-[200px] border-2 border-dashed border-[#bdcfbc] rounded-[2.5rem] flex flex-col items-center justify-center gap-2 text-[#8eb486] hover:bg-white/20 transition-all">
                    <span className="text-2xl">+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Enroll Candidate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistryHub;