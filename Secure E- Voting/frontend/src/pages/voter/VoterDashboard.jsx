import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // IMPORT NAVIGATE

const VoterDashboard = () => {
  const navigate = useNavigate(); // INITIALIZE NAVIGATE

  // Modal & Step States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [votingStep, setVotingStep] = useState(1); // 1: Pres, 2: Vice, 3: Senator, 4: Members, 5: Confirm, 6: Receipt
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isPartyDetailOpen, setIsPartyDetailOpen] = useState(false);

  // Selection State (Cross-party voting)
  const [selectedPres, setSelectedPres] = useState([]);
  const [selectedVice, setSelectedVice] = useState(null);
  const [selectedSenators, setSelectedSenators] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  // Carousel Indices
  const [selectedParty, setSelectedParty] = useState(null);
  const [leaderIndex, setLeaderIndex] = useState(0);
  const [presIndex, setPresIndex] = useState(0);

  // Full Candidate Registry organized by Party and Position
  const partyData = [
    {
      name: 'Tech-Forward',
      tagline: 'Digitizing Campus Integrity',
      gradient: 'from-[#8eb486] to-[#4a5448]',
      leaders: [
        { id: 'P1', name: 'Jho Neil Poblacion', pos: 'President', img: '👤', party: 'Tech-Forward', color: 'bg-emerald-500' },
        { id: 'V1', name: 'Mark Rivera', pos: 'Vice President', img: '👤', party: 'Tech-Forward', color: 'bg-[#8eb486]' },
        { id: 'S1', name: 'Sarah Chen', pos: 'Senator', img: '👤', party: 'Tech-Forward', color: 'bg-[#4a5448]' },
      ],
      members: [
        { id: 'M1', name: 'David Lim', pos: 'Representative' },
        { id: 'M2', name: 'James Wilson', pos: 'Representative' }
      ]
    },
    {
      name: 'Independent',
      tagline: 'Transparency Above All',
      gradient: 'from-stone-400 to-stone-600',
      leaders: [
        { id: 'P2', name: 'Alice Santos', pos: 'President', img: '👤', party: 'Independent', color: 'bg-stone-400' },
        { id: 'V2', name: 'Sofia Garcia', pos: 'Vice President', img: '👤', party: 'Independent', color: 'bg-stone-500' },
        { id: 'S2', name: 'Carlos Reyes', pos: 'Senator', img: '👤', party: 'Independent', color: 'bg-stone-600' },
      ],
      members: [
        { id: 'M3', name: 'Peter Parker', pos: 'Representative' }
      ]
    },
    {
      name: 'New Leaders',
      tagline: 'Unity in Diversity',
      gradient: 'from-[#5d6d5a] to-[#3e473c]',
      leaders: [
        { id: 'P3', name: 'Elena Cruz', pos: 'President', img: '👤', party: 'New Leaders', color: 'bg-[#5d6d5a]' },
        { id: 'V3', name: 'Michael Tan', pos: 'Vice President', img: '👤', party: 'New Leaders', color: 'bg-[#4a5448]' },
        { id: 'S3', name: 'Lily Evans', pos: 'Senator', img: '👤', party: 'New Leaders', color: 'bg-[#3e473c]' },
      ],
      members: [
        { id: 'M4', name: 'Bruce Wayne', pos: 'Representative' }
      ]
    }
  ];

  const allPresidents = partyData.flatMap(p => p.leaders.filter(l => l.pos === 'President'));
  const allVices = partyData.flatMap(p => p.leaders.filter(l => l.pos === 'Vice President'));
  const allSenators = partyData.flatMap(p => p.leaders.filter(l => l.pos === 'Senator'));
  const allMembers = partyData.flatMap(p => p.members);

  const handlePartyClick = (party) => {
    setSelectedParty(party);
    setLeaderIndex(0);
    setIsPartyDetailOpen(true);
  };

  // High-Fidelity Deck Styles with improved spacing
  const getDeckStyles = (index, active, listLength) => {
    const diff = (index - active + listLength) % listLength;
    if (diff === 0) return "z-30 scale-110 opacity-100 translate-x-0 blur-0 shadow-2xl";
    if (diff === 1) return "z-20 scale-90 opacity-40 translate-x-64 blur-[2px]";
    if (diff === listLength - 1) return "z-20 scale-90 opacity-40 -translate-x-64 blur-[2px]";
    return "opacity-0 scale-75 blur-md pointer-events-none";
  };

  const toggleSelection = (id, list, setList, max) => {
    if (list.includes(id)) {
      setList(list.filter(item => item !== id));
    } else if (list.length < max) {
      setList([...list, id]);
    }
  };

  return (
    <div className="min-h-screen text-[#5d6d5a] p-8 md:p-12 pt-44 bg-[#e3f0e0] relative overflow-x-hidden font-sans">

      {/* Background Animated Blobs for Atmosphere */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c5e1bc] rounded-full filter blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#bdcfbc] rounded-full filter blur-[100px] opacity-40"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">

        {/* --- 🚀 REFINED ACTION CONSOLE (Command Center) --- */}
        <div className="bg-white/40 backdrop-blur-[50px] border border-white/80 p-1 rounded-[4rem] shadow-[0_32px_64px_rgba(74,84,72,0.15)] relative overflow-hidden group">
          <div className="bg-white/10 p-10 md:p-14 rounded-[3.8rem] border border-white/40 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#8eb486] animate-ping"></span>
                <p className="text-[11px] font-black text-[#8eb486] uppercase tracking-[0.6em]">System Active</p>
              </div>
              <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter leading-none">
                Voter <span className="text-[#8eb486] italic font-medium">Console</span>
              </h2>
              <p className="text-xs font-mono text-[#6b7c68] opacity-60 tracking-widest uppercase">Encryption: AES-256-GCM</p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full md:w-auto items-center justify-end">
              <button
                onClick={() => setIsRankingOpen(true)}
                className="relative overflow-hidden px-8 py-4 bg-white/40 backdrop-blur-md border border-white/80 rounded-[2rem] shadow-sm transition-all hover:bg-white/60 hover:-translate-y-1 active:translate-y-0"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg">📊</span>
                  <span className="text-xs font-black text-[#3e473c] uppercase tracking-widest">Live Standings</span>
                </div>
              </button>

              {/* NEW BUTTON FOR OFFICIAL RESULTS */}
              <button
                onClick={() => navigate('/voter/results')}
                className="relative overflow-hidden px-8 py-4 bg-white/40 backdrop-blur-md border border-[#8eb486]/50 rounded-[2rem] shadow-sm transition-all hover:bg-[#8eb486]/20 hover:-translate-y-1 active:translate-y-0"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg">🏆</span>
                  <span className="text-xs font-black text-[#4a5448] uppercase tracking-widest">Official Results</span>
                </div>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="relative group/launch overflow-hidden px-10 py-4 bg-[#4a5448] rounded-[2rem] shadow-[0_20px_40px_rgba(74,84,72,0.25)] transition-all hover:shadow-[0_25px_50px_rgba(74,84,72,0.35)] hover:-translate-y-1 active:translate-y-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/launch:animate-[shimmer_2s_infinite] pointer-events-none"></div>
                <span className="relative z-10 text-xs font-black text-[#e3f0e0] uppercase tracking-[0.4em]">Launch Voting</span>
              </button>
            </div>
          </div>
          <div className="bg-[#4a5448]/5 px-14 py-3 border-t border-white/40 flex justify-between items-center">
            <p className="text-[9px] font-bold text-[#8eb486] uppercase tracking-widest">Network Status: Distributed Node [LU-01]</p>
            <p className="text-[9px] font-bold text-[#6b7c68] uppercase tracking-widest opacity-40">UTC-8 // MARCH 2026</p>
          </div>
        </div>

        {/* --- 2. CLICKABLE PARTY SLATES --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partyData.map((party, i) => (
            <div
              key={i}
              onClick={() => handlePartyClick(party)}
              className="group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/70 p-10 rounded-[3rem] shadow-lg text-left hover:bg-white/40 transition-all hover:scale-[1.03] active:scale-95"
            >
              <h4 className="text-2xl font-black text-[#3e473c] uppercase tracking-tight">{party.name}</h4>
              <p className="text-[10px] font-bold text-[#8eb486] uppercase tracking-widest mt-3 italic opacity-70">Slate Verified for 2026</p>
              <div className="mt-6 pt-4 border-t border-[#bdcfbc]/40">
                <span className="text-[8px] font-black uppercase text-[#8eb486] tracking-[0.2em]">Click to view Nominees</span>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* --- 📊 REFINED LIVE STANDINGS MODAL --- */}
      {isRankingOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-[#e3f0e0]/70 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-white/20 backdrop-blur-[50px] border border-white/80 p-12 rounded-[4rem] shadow-[0_32px_64px_rgba(74,84,72,0.2)] relative overflow-hidden font-sans">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#8eb486]/20 rounded-full filter blur-[80px]"></div>
            <button onClick={() => setIsRankingOpen(false)} className="absolute top-10 right-12 text-[#8eb486] font-black text-xl hover:text-[#4a5448] transition-colors">✕</button>
            <header className="mb-12 text-center relative z-10">
              <h3 className="text-4xl font-black text-[#3e473c] uppercase tracking-tighter leading-none">Live <span className="text-[#8eb486] italic font-medium">Standings</span></h3>
              <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.4em] mt-4">Real-time Transmission Data</p>
            </header>
            <div className="space-y-6 relative z-10">
              {[{ n: 'JHO NEIL POBLACION', v: 1240, p: 45 }, { n: 'MARK RIVERA', v: 1100, p: 40 }].map((rank, i) => (
                <div key={i} className="group bg-white/40 backdrop-blur-md border border-white/80 p-8 rounded-[2.5rem] flex justify-between items-center shadow-sm transition-all hover:bg-white/60 hover:scale-[1.02]">
                  <div className="text-left">
                    <h5 className="text-xl font-black text-[#3e473c] uppercase tracking-tight leading-none mb-2">{rank.n}</h5>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8eb486] animate-pulse"></span>
                      <p className="text-[10px] font-bold text-[#6b7c68] uppercase tracking-widest">{rank.v} Verified Votes</p>
                    </div>
                  </div>
                  <p className="text-4xl font-black text-[#8eb486] tracking-tighter">{rank.p}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- 🗳️ REFINED VOTING PROTOCOL MODAL (Step-by-Step Position Pick) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[170] flex items-center justify-center p-4 bg-[#e3f0e0]/70 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-5xl bg-white/20 backdrop-blur-[60px] border border-white/80 p-16 rounded-[4.5rem] shadow-2xl relative overflow-hidden">

            {/* Glossy Backdrop Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none group-hover:animate-pulse"></div>

            <button onClick={() => { setIsModalOpen(false); setVotingStep(1); }} className="absolute top-12 right-12 text-[#8eb486] font-black text-xl">✕</button>

            {/* STEP 1: PRESIDENTS (CAROUSEL DECK STYLE) */}
            {votingStep === 1 && (
              <div className="space-y-12 animate-in fade-in zoom-in duration-700 text-center relative z-10">
                <header>
                  <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter leading-none mb-4">Select <span className="text-[#8eb486] italic">Presidents</span></h2>
                  <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em]">Authorization Step 01 // Capacity: 3</p>
                </header>

                <div className="relative h-[550px] flex items-center justify-center">
                  {allPresidents.map((p, i) => (
                    <div
                      key={p.id}
                      onClick={() => setPresIndex(i)}
                      className={`absolute w-[350px] h-[500px] rounded-[3.5rem] overflow-hidden border border-white/60 shadow-2xl transition-all duration-700 ease-in-out cursor-pointer ${getDeckStyles(i, presIndex, allPresidents.length)}`}
                    >
                      <div className={`absolute inset-0 ${p.color} opacity-90`}></div>
                      <div className="absolute top-8 left-8">
                        <span className="text-[9px] font-black px-4 py-1.5 rounded-full backdrop-blur-md border bg-white/20 border-white/40 text-white uppercase tracking-widest">
                          {selectedPres.includes(p.id) ? 'Selected Node' : 'Official Nominee'}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 p-8 bg-white/20 backdrop-blur-[40px] border border-white/40 rounded-[2.5rem] text-left">
                        <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">{p.pos}</p>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{p.name}</h3>
                        <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
                          <p className="text-[11px] text-white/70 font-bold uppercase tracking-widest">{p.party}</p>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleSelection(p.id, selectedPres, setSelectedPres, 3); }}
                            className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${selectedPres.includes(p.id) ? 'bg-white text-[#4a5448] shadow-lg' : 'bg-white/20 border border-white/40 text-white hover:bg-white/30'}`}
                          >
                            {selectedPres.includes(p.id) ? '✓ Selection Confirmed' : 'Authorize Selection'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button disabled={selectedPres.length === 0} onClick={() => setVotingStep(2)} className="px-16 py-6 bg-[#4a5448] text-[#e3f0e0] rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl disabled:opacity-30">Proceed to Vice President</button>
              </div>
            )}

            {/* STEP 2: VICE PRESIDENT */}
            {votingStep === 2 && (
              <div className="space-y-12 animate-in slide-in-from-right-12 duration-700 text-center relative z-10">
                <header><h2 className="text-5xl font-black text-[#3e473c] uppercase mb-4">Select <span className="text-[#8eb486] italic">Vice President</span></h2></header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {allVices.map(v => (
                    <div key={v.id} onClick={() => setSelectedVice(v.id)} className={`p-8 rounded-[2.5rem] border-2 transition-all cursor-pointer flex items-center gap-6 ${selectedVice === v.id ? 'border-[#8eb486] bg-[#8eb486]/10 shadow-lg' : 'border-white/80 bg-white/25 hover:border-white'}`}>
                      <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center text-2xl">👤</div>
                      <div className="text-left"><h4 className="text-lg font-black uppercase leading-none mb-1">{v.name}</h4><p className="text-[9px] font-bold text-[#8eb486] uppercase tracking-widest">{v.party}</p></div>
                    </div>
                  ))}
                </div>
                <button disabled={!selectedVice} onClick={() => setVotingStep(3)} className="px-16 py-6 bg-[#4a5448] text-[#e3f0e0] rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl disabled:opacity-30">Proceed to Senators</button>
              </div>
            )}

            {/* STEP 3: SENATORS */}
            {votingStep === 3 && (
              <div className="space-y-12 animate-in slide-in-from-right-12 duration-700 text-center relative z-10">
                <header>
                  <h2 className="text-5xl font-black text-[#3e473c] uppercase mb-4">Council <span className="text-[#8eb486] italic">Senators</span></h2>
                  <p className="text-[10px] font-bold text-[#8eb486] uppercase tracking-[0.4em]">Capacity: Choose up to 12 // {selectedSenators.length}/12</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto max-h-[400px] overflow-y-auto pr-3 custom-scrollbar">
                  {allSenators.map(s => (
                    <div key={s.id} onClick={() => toggleSelection(s.id, selectedSenators, setSelectedSenators, 12)} className={`p-6 rounded-[2rem] border-2 transition-all cursor-pointer flex justify-between items-center ${selectedSenators.includes(s.id) ? 'border-[#8eb486] bg-[#8eb486]/10' : 'border-white/80 bg-white/25'}`}>
                      <h4 className="text-sm font-black uppercase">{s.name}</h4>
                      {selectedSenators.includes(s.id) && <span className="text-[#8eb486] font-bold">✓</span>}
                    </div>
                  ))}
                </div>
                <button onClick={() => setVotingStep(4)} className="px-16 py-6 bg-[#4a5448] text-[#e3f0e0] rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl">Proceed to Members</button>
              </div>
            )}

            {/* STEP 4: GENERAL MEMBERS */}
            {votingStep === 4 && (
              <div className="space-y-12 animate-in slide-in-from-right-12 duration-700 text-center relative z-10">
                <header><h2 className="text-5xl font-black text-[#3e473c] uppercase mb-4">Council <span className="text-[#8eb486] italic">Members</span></h2></header>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[350px] overflow-y-auto pr-3 custom-scrollbar">
                  {allMembers.map(m => (
                    <div key={m.id} onClick={() => toggleSelection(m.id, selectedMembers, setSelectedMembers, 5)} className={`p-6 rounded-[2rem] border-2 transition-all cursor-pointer flex justify-between items-center ${selectedMembers.includes(m.id) ? 'border-[#8eb486] bg-[#8eb486]/10' : 'border-white/80 bg-white/25'}`}>
                      <h5 className="text-sm font-black uppercase">{m.name}</h5>
                      {selectedMembers.includes(m.id) && <span className="text-[#8eb486]">✓</span>}
                    </div>
                  ))}
                </div>
                <button onClick={() => setVotingStep(5)} className="px-16 py-6 bg-[#4a5448] text-[#e3f0e0] rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl">Finalize Ballot</button>
              </div>
            )}

            {/* STEP 5: FINAL RECEIPT */}
            {votingStep === 5 && (
              <div className="mt-10 text-center animate-in zoom-in duration-500 relative z-10">
                <div className="w-20 h-20 bg-white/50 border border-white/80 mx-auto mb-8 rounded-[2rem] flex items-center justify-center text-[#8eb486] text-4xl shadow-inner">✓</div>
                <h2 className="text-4xl font-black text-[#3e473c] uppercase mb-8 leading-none">Transmission Verified</h2>
                <div className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/60 shadow-inner max-w-lg mx-auto">
                  <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-widest mb-4">Audit Ledger Immutable Hash</p>
                  <p className="text-[11px] font-mono text-[#4a5448] break-all leading-relaxed font-bold border-l-4 border-[#8eb486] pl-6 py-2">SHA256:8A3F9D2E1B9C5F6D7E8A1B2C3D4E5F6G7H8I9J0K</p>
                </div>
                <button onClick={() => { setIsModalOpen(false); setVotingStep(1); }} className="mt-12 px-16 py-6 bg-[#4a5448] text-white rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl transition-all hover:scale-105 active:scale-95">Reset Session Archive</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- 🎭 PARTY DOSSIER MODAL (Viewing the Party Nominees) --- */}
      {isPartyDetailOpen && selectedParty && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-[#e3f0e0]/70 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-4xl bg-white/20 backdrop-blur-[60px] border border-white/80 p-12 rounded-[4.5rem] shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button onClick={() => setIsPartyDetailOpen(false)} className="absolute top-10 right-12 text-[#8eb486] font-black text-xl hover:text-[#4a5448]">✕</button>
            <header className="mb-10 text-center border-b border-[#bdcfbc]/40 pb-8">
              <h3 className="text-4xl font-black text-[#3e473c] uppercase leading-none mb-3">{selectedParty.name}</h3>
              <p className="text-[11px] font-bold text-[#8eb486] uppercase tracking-[0.5em] italic">{selectedParty.tagline}</p>
            </header>

            {/* Leadership Carousel with Rotating Leaders */}
            <div className="relative h-80 flex items-center justify-center mb-16">
              {selectedParty.leaders.map((leader, i) => (
                <div
                  key={i}
                  onClick={() => setLeaderIndex(i)}
                  className={`absolute w-60 h-72 bg-gradient-to-br ${selectedParty.gradient} p-8 rounded-[3rem] transition-all duration-700 flex flex-col items-center justify-center cursor-pointer border border-white/40 ${getDeckStyles(i, leaderIndex, 3)}`}
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center text-4xl mb-6 shadow-inner border border-white/30 text-white">
                    {leader.img}
                  </div>
                  <h5 className="text-xl font-black text-white uppercase text-center leading-tight mb-1">{leader.name}</h5>
                  <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest">{leader.pos}</p>
                </div>
              ))}
              <button
                onClick={() => setLeaderIndex((prev) => (prev + 1) % 3)}
                className="absolute -bottom-6 bg-[#4a5448] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#8eb486] transition-all"
              >
                Inspect Next Leader →
              </button>
            </div>

            {/* Party Member Grid underneath */}
            <div className="space-y-4 pt-10 border-t border-[#bdcfbc]/50 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedParty.members.map((member, i) => (
                  <div key={i} className="bg-white/40 border border-white/60 p-6 rounded-[2rem] flex justify-between items-center group hover:bg-white/60 transition-all shadow-sm">
                    <div>
                      <h6 className="text-sm font-black text-[#3e473c] uppercase leading-none mb-1">{member.name}</h6>
                      <p className="text-[9px] font-bold text-[#8eb486] uppercase tracking-widest">{member.pos}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => { setIsPartyDetailOpen(false); setIsModalOpen(true); }} className="mt-12 w-full py-6 bg-[#4a5448] text-white rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-2xl transition-all">Open Full Official Ballot</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoterDashboard;