import React from 'react';

const VoterRegistry = () => {
  const voters = [
    { id: 'LU-2026-001', name: 'Alice Santos', email: 'alice.s@laguna.edu', status: 'VERIFIED' },
    { id: 'LU-2026-002', name: 'Mark Rivera', email: 'mark.r@laguna.edu', status: 'PENDING' },
    { id: 'LU-2026-003', name: 'Sofia Garcia', email: 'sofia.g@laguna.edu', status: 'VERIFIED' },
  ];

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-[#bdcfbc] pb-10 gap-8">
          <div>
            <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em] mb-4">Registry Management</p>
            <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">Identity <span className="text-[#8eb486] italic font-medium">Log</span></h2>
          </div>
          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl focus:border-[#8eb486] outline-none transition-all placeholder:text-[#9fb09c] font-mono text-xs uppercase text-[#3e473c]" 
              placeholder="SEARCH_BY_ID..." 
            />
          </div>
        </header>

        <div className="bg-white/30 backdrop-blur-2xl border border-white/80 rounded-[3rem] overflow-hidden shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/60 bg-white/40">
                <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest">Identification</th>
                <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest">Full Legal Name</th>
                <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest">Institutional Email</th>
                <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[11px]">
              {voters.map((voter, i) => (
                <tr key={i} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                  <td className="p-6 text-[#4a5448] font-bold">{voter.id}</td>
                  <td className="p-6 text-[#3e473c] font-black uppercase">{voter.name}</td>
                  <td className="p-6 text-[#6b7c68] italic">{voter.email}</td>
                  <td className="p-6 text-right">
                    <span className={`px-4 py-1.5 border rounded-full text-[9px] font-black tracking-tighter ${
                      voter.status === 'VERIFIED' ? 'border-[#8eb486] bg-[#8eb486]/10 text-[#4a5448]' : 'border-orange-300 bg-orange-50 text-orange-700'
                    }`}>
                      {voter.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VoterRegistry;