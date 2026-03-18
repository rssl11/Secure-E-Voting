import React from 'react';

const ElectionManager = () => {
  const elections = [
    { name: 'University Student Council', start: '2026-03-10', end: '2026-03-15', status: 'Pending' },
    { name: 'College of IT Board', start: '2026-04-01', end: '2026-04-05', status: 'Draft' },
  ];

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-[#bdcfbc] pb-10">
          <h2 className="text-4xl font-black text-[#3e473c] tracking-tighter uppercase">Election <span className="text-[#8eb486] italic font-medium">Registry</span></h2>
          <button className="px-8 py-3 bg-[#4a5448] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:shadow-lg transition-all">
            + Create Election
          </button>
        </div>

        <div className="space-y-4">
          {elections.map((election, i) => (
            <div key={i} className="bg-white/30 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] flex justify-between items-center hover:bg-white/50 transition-all shadow-sm">
              <div className="text-left">
                <h3 className="text-2xl font-black text-[#3e473c] mb-2">{election.name}</h3>
                <div className="flex gap-6 text-[10px] font-bold text-[#8eb486] uppercase tracking-widest">
                  <p>Open: {election.start}</p>
                  <p>Close: {election.end}</p>
                </div>
              </div>
              <span className="px-5 py-2 bg-white/40 border border-[#bdcfbc] rounded-xl text-[9px] font-black text-[#4a5448] uppercase">
                {election.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionManager;