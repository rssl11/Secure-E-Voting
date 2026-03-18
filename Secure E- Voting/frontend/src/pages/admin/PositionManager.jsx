import React from 'react';

const PositionManager = () => {
  // Hierarchical Data Structure
  const partyHierarchy = [
    {
      partyName: 'Tech-Forward Party',
      code: 'TF-2026',
      branches: [
        { 
          branchName: 'Executive Slate', 
          positions: [
            { id: 'POS_01', title: 'President', minSelect: 1, maxSelect: 1 },
            { id: 'POS_02', title: 'Vice President', minSelect: 1, maxSelect: 1 }
          ]
        },
        { 
          branchName: 'Legislative Slate', 
          positions: [
            { id: 'POS_03', title: 'Senator', minSelect: 1, maxSelect: 12 }
          ]
        }
      ]
    },
    {
      partyName: 'Independent / Non-Affiliated',
      code: 'IND-2026',
      branches: [
        { 
          branchName: 'General Pool', 
          positions: [
            { id: 'POS_04', title: 'College Representative', minSelect: 1, maxSelect: 1 }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-16 border-b border-[#bdcfbc] pb-10">
          <div>
            <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em] mb-4">Structural Hierarchy</p>
            <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">Position <span className="text-[#8eb486] italic font-medium">Tree</span></h2>
          </div>
          <button className="px-8 py-4 bg-[#4a5448] text-[#e3f0e0] text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            + Define New Branch
          </button>
        </header>

        <div className="space-y-12">
          {partyHierarchy.map((party, pIdx) => (
            <div key={pIdx} className="space-y-6">
              {/* Party Root Level */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-8 bg-[#8eb486]"></div>
                <h3 className="text-sm font-black text-[#8eb486] uppercase tracking-[0.3em]">{party.partyName} // {party.code}</h3>
              </div>

              {party.branches.map((branch, bIdx) => (
                <div key={bIdx} className="ml-12 space-y-4">
                  {/* Branch Level Label */}
                  <div className="flex items-center gap-3 opacity-60">
                    <span className="text-[10px] font-mono font-bold text-[#4a5448] bg-white/40 px-3 py-1 rounded-lg border border-white/60">BRANCH_{bIdx + 1}</span>
                    <h4 className="text-xs font-black text-[#4a5448] uppercase tracking-widest">{branch.branchName}</h4>
                  </div>

                  {/* Position Cards (Nested) */}
                  <div className="space-y-3">
                    {branch.positions.map((pos, i) => (
                      <div key={i} className="bg-white/30 backdrop-blur-xl border border-white/80 p-6 rounded-[2rem] flex justify-between items-center group hover:bg-white/50 transition-all shadow-sm">
                        <div className="text-left flex items-center gap-6">
                           <div className="w-10 h-10 rounded-2xl bg-white/40 flex items-center justify-center border border-white/60 text-[#8eb486] font-mono text-xs">
                             {i + 1}
                           </div>
                           <div>
                              <h3 className="text-lg font-black text-[#3e473c] uppercase tracking-tight">{pos.title}</h3>
                              <p className="text-[9px] font-mono text-[#6b7c68] uppercase tracking-widest font-bold">
                                ID: {pos.id} • Req: {pos.minSelect}-{pos.maxSelect} Seats
                              </p>
                           </div>
                        </div>
                        <div className="flex gap-6 pr-4">
                          <button className="text-[9px] font-black text-[#8eb486] uppercase tracking-widest hover:text-[#4a5448]">Edit</button>
                          <button className="text-[9px] font-black text-red-700 uppercase tracking-widest hover:text-red-500">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionManager;