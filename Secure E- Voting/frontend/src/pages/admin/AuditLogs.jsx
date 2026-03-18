import React from 'react';

const AuditLogs = () => {
  const logs = [
    { timestamp: '2026-03-09 10:45:21', event: 'VOTE_CAST', details: 'BALLOT_ID: 8A3F... secured via Node_04', status: 'VERIFIED' },
    { timestamp: '2026-03-09 10:42:10', event: 'USER_AUTH', details: 'USR_HASH: LU-2026-4421 accessed Voter Portal', status: 'SUCCESS' },
    { timestamp: '2026-03-09 10:35:05', event: 'SYS_SYNC', details: 'Blockchain ledger synchronized', status: 'STABLE' },
  ];

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-left">
          <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.4em] mb-4">Security Protocol</p>
          <h2 className="text-4xl font-black text-[#3e473c] tracking-tight uppercase">Audit <span className="text-[#8eb486] italic font-medium">Ledger</span></h2>
        </header>

        <div className="bg-white/30 backdrop-blur-[40px] border border-white/80 rounded-[3rem] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/60 bg-white/40">
                  <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest">Timestamp</th>
                  <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest">Event Type</th>
                  <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest">Hash Details</th>
                  <th className="p-6 text-[10px] font-black text-[#6b7c68] uppercase tracking-widest text-right">Node Status</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[11px]">
                {logs.map((log, i) => (
                  <tr key={i} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                    <td className="p-6 text-[#6b7c68]">{log.timestamp}</td>
                    <td className="p-6 font-black text-[#4a5448] tracking-tighter">{log.event}</td>
                    <td className="p-6 text-[#6b7c68] opacity-80">{log.details}</td>
                    <td className="p-6 text-right">
                      <span className="px-3 py-1 bg-[#8eb486]/10 border border-[#8eb486]/30 text-[#4a5448] rounded-full text-[9px] font-black uppercase">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;