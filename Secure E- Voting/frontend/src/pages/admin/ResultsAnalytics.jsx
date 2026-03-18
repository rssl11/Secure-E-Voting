import React from 'react';

const ResultsAnalytics = () => {
  const electionData = {
    totalVotes: 1890,
    participationRate: 67.6,
    candidates: [
      { name: 'CANDIDATE_ALPHA', votes: 1420, percent: 75, node: 'LU-01', trend: 'rising' },
      { name: 'CANDIDATE_BETA', votes: 470, percent: 25, node: 'LU-02', trend: 'stable' },
    ],
    diagnostics: [
      { factor: 'Peak Hour Traffic', impact: '+15%', description: 'High volume recorded between 10 AM - 12 PM.' },
      { factor: 'Node LU-01 Latency', impact: '-2%', description: 'Minor sync delays slightly slowed morning ingestion.' }
    ],
    prediction: {
      projectedWinner: 'CANDIDATE_ALPHA',
      confidenceInterval: 94.2,
      estimatedFinalTurnout: '82%'
    }
  };

  return (
    <div className="min-h-screen text-[#5d6d5a] p-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 border-b border-[#bdcfbc] pb-10 text-left">
          <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em] mb-4">Advanced Data Modeling</p>
          <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">Election <span className="text-[#8eb486] italic font-medium">Intelligence</span></h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 📊 1. DESCRIPTIVE ANALYTICS (The Current State) */}
          <section className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-4">01 // Descriptive Analytics</h3>
            {electionData.candidates.map((item, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/80 shadow-sm transition-all hover:bg-white/40">
                <div className="flex justify-between items-end mb-6 text-left">
                  <div>
                    <p className="text-[9px] font-mono text-[#8eb486] uppercase font-bold">NODE_{item.node}</p>
                    <h4 className="text-2xl font-black text-[#3e473c] uppercase">{item.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-[#8eb486] tracking-tighter">{item.percent}%</p>
                    <p className="text-[9px] font-bold text-[#6b7c68] uppercase">{item.votes} Votes</p>
                  </div>
                </div>
                <div className="h-3 w-full bg-white/50 border border-white/80 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-[#8eb486] to-[#4a5448] transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </section>

          {/* 🔍 2. DIAGNOSTIC ANALYTICS (The "Why") */}
          <section className="space-y-6">
            <h3 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-4">02 // Diagnostic Audit</h3>
            <div className="bg-[#4a5448] text-[#e3f0e0] p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-6">Root Cause Analysis</p>
                  {electionData.diagnostics.map((diag, i) => (
                    <div key={i} className="mb-6 last:mb-0 border-b border-white/10 pb-4 last:border-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold">{diag.factor}</span>
                        <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded">{diag.impact}</span>
                      </div>
                      <p className="text-[11px] opacity-70 leading-relaxed">{diag.description}</p>
                    </div>
                  ))}
               </div>
               {/* Decorative Organic Blob */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#8eb486] rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </section>

          {/* 🔮 3. PREDICTIVE ANALYTICS (The "Future") */}
          <section className="lg:col-span-3">
             <div className="bg-white/40 backdrop-blur-2xl border border-white/80 p-10 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-[10px] font-black text-[#8eb486] border border-[#8eb486]/30 px-4 py-2 rounded-full uppercase tracking-widest">AI Forecast Active</span>
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-4">03 // Predictive Engine</h3>
                  <h4 className="text-4xl font-black text-[#3e473c] uppercase tracking-tighter mb-2">Projected Winner:</h4>
                  <p className="text-5xl font-black text-[#8eb486] italic tracking-tighter uppercase">{electionData.prediction.projectedWinner}</p>
                </div>

                <div className="flex gap-10 border-l border-[#bdcfbc] pl-12">
                   <div className="text-left">
                     <p className="text-[10px] font-black text-[#6b7c68] uppercase tracking-widest mb-1">Confidence</p>
                     <p className="text-3xl font-black text-[#3e473c]">{electionData.prediction.confidenceInterval}%</p>
                   </div>
                   <div className="text-left">
                     <p className="text-[10px] font-black text-[#6b7c68] uppercase tracking-widest mb-1">Final Turnout</p>
                     <p className="text-3xl font-black text-[#3e473c]">{electionData.prediction.estimatedFinalTurnout}</p>
                   </div>
                </div>
             </div>
          </section>

        </div>

        <div className="mt-20 p-8 bg-white/30 backdrop-blur-xl border border-white/80 rounded-3xl text-center">
          <p className="text-[9px] font-bold text-[#4a5448] uppercase tracking-[0.6em] opacity-60">
            Verified Mathematical Certainty // Secure Audit Node 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsAnalytics;