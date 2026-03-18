import React from 'react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Registered', value: '4,200', status: 'VERIFIED' },
    { label: 'Votes Cast', value: '2,840', status: '67.6% PARTICIPATION' },
    { label: 'Active Protocols', value: '03', status: 'STABLE' },
    { label: 'Network Uptime', value: '99.9%', status: 'OPTIMAL' },
  ];

  const nodes = [
    { id: 'LU-01', status: 'Online', latency: '24ms' },
    { id: 'LU-02', status: 'Online', latency: '31ms' },
    { id: 'LU-03', status: 'Syncing', latency: '110ms' },
  ];

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-b border-[#bdcfbc] pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#8eb486] animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.5em] text-[#8eb486] uppercase">System Status: Nominal</span>
          </div>
          <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">Executive <span className="text-[#8eb486] italic font-medium">Summary</span></h2>
        </header>

        {/* 1. Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 bg-white/30 backdrop-blur-xl border border-white/80 rounded-3xl hover:bg-white/50 transition-all shadow-sm">
              <p className="text-[9px] font-black text-[#6b7c68] uppercase tracking-widest mb-6">{stat.label}</p>
              <h3 className="text-4xl font-black text-[#3e473c] mb-2">{stat.value}</h3>
              <p className="text-[9px] font-mono text-[#8eb486] font-bold uppercase">{stat.status}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 2. NEW: Node Monitor (2/3 width) */}
          <div className="lg:col-span-2 bg-white/20 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 shadow-xl">
             <h4 className="text-[10px] font-black text-[#4a5448] uppercase tracking-[0.3em] mb-8">Distributed Node Health</h4>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {nodes.map((node, i) => (
                  <div key={i} className="p-6 bg-white/40 border border-white/60 rounded-2xl flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mb-4 ${node.status === 'Online' ? 'bg-emerald-500' : 'bg-orange-400 animate-pulse'}`}></div>
                    <span className="text-sm font-black text-[#3e473c]">{node.id}</span>
                    <span className="text-[10px] font-mono text-[#8eb486] mt-1">{node.latency}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* 3. NEW: Security Metrics (1/3 width) */}
          <div className="bg-[#4a5448] text-[#e3f0e0] p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-8">Auth Security</h4>
                <div className="space-y-6">
                   <div>
                      <p className="text-2xl font-black italic">03</p>
                      <p className="text-[9px] uppercase tracking-widest opacity-70">Blocked IP Nodes (24h)</p>
                   </div>
                   <div className="pt-6 border-t border-white/10">
                      <p className="text-2xl font-black">99.8%</p>
                      <p className="text-[9px] uppercase tracking-widest opacity-70">Successful OTP Ingestion</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#8eb486] rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>

        {/* 4. Audit Feed Card */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] overflow-hidden shadow-xl">
          <div className="bg-white/40 px-8 py-5 border-b border-white/60 flex justify-between items-center">
            <h4 className="text-[10px] font-black text-[#4a5448] uppercase tracking-[0.3em]">System Audit Feed</h4>
            <span className="text-[9px] font-mono text-[#8eb486]">REF: LU_2026_LIVE</span>
          </div>
          <div className="p-8 font-mono text-[11px] text-[#5d6d5a] space-y-3 leading-relaxed">
            <p><span className="text-[#8eb486] mr-4 font-bold">10:15:01</span> ACCESS_GRANTED_ROOT // SECURE_NODE_01</p>
            <p><span className="text-[#8eb486] mr-4 font-bold">10:14:55</span> BLOCKCHAIN_SYNC_COMPLETE // LEDGER_STABLE</p>
            <p><span className="text-[#8eb486] mr-4 font-bold">10:12:30</span> INTEGRITY_CHECK_PASS // NO_ANOMALIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;