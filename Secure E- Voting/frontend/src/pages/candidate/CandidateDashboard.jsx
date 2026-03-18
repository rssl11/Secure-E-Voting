import React, { useState } from 'react';

const CandidateDashboard = () => {
  // Mock data for the logged-in candidate
  const [candidateInfo, setCandidateInfo] = useState({
    name: "Jho Neil Poblacion",
    candidateId: "LU-2026-001",
    position: "President",
    bio: "A passionate leader dedicated to enhancing student life through technology and transparent governance.",
  });

  // Mock data for the candidate's party context
  const [partyInfo, setPartyInfo] = useState({
    name: "Tech-Forward Party",
    tagline: "Digitizing Campus Integrity",
    objective: "To implement a decentralized feedback loop and transparent resource allocation.",
    members: [
      { name: "Jho Neil Poblacion", position: "President", status: "Active" },
      { name: "Mark Rivera", position: "Vice President", status: "Active" },
      { name: "Sarah Chen", position: "Secretary", status: "Pending Verification" }
    ]
  });
  
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend API
    console.log("Updated Profile:", candidateInfo);
    alert("Your profile has been updated!");
  };

  return (
    <div className="min-h-screen text-[#5d6d5a] p-8 md:p-12 pt-44 bg-[#e3f0e0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- 1. LEFT COLUMN: EDITABLE PERSONAL PROFILE --- */}
        <div className="space-y-6">
          <div className="bg-white/30 backdrop-blur-3xl border border-white/80 p-8 rounded-[3rem] shadow-xl text-center">
            <div className="w-24 h-24 bg-white/60 border-2 border-[#8eb486] rounded-3xl mx-auto mb-6 flex items-center justify-center text-4xl shadow-inner">👤</div>
            <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.3em] mb-6">Candidate ID: {candidateInfo.candidateId}</p>
            
            <form onSubmit={handleProfileUpdate} className="text-left space-y-4">
              <div>
                <label className="text-[9px] font-black text-[#5d6d5a] uppercase tracking-widest block mb-1">Full Name</label>
                <input 
                  type="text"
                  value={candidateInfo.name}
                  onChange={(e) => setCandidateInfo({...candidateInfo, name: e.target.value})}
                  className="w-full bg-white/40 border border-white/60 p-3 rounded-xl text-lg font-black text-[#3e473c] outline-none uppercase text-center"
                />
              </div>
               <div>
                <label className="text-[9px] font-black text-[#5d6d5a] uppercase tracking-widest block mb-1">Your Bio / Motto</label>
                <textarea 
                  value={candidateInfo.bio}
                  onChange={(e) => setCandidateInfo({...candidateInfo, bio: e.target.value})}
                  className="w-full bg-white/40 border border-white/60 p-3 rounded-xl text-xs text-[#3e473c] outline-none h-24"
                  placeholder="Tell everyone a bit about yourself..."
                />
              </div>
              <div>
                <label className="text-[9px] font-black text-[#5d6d5a] uppercase tracking-widest block mb-1">Run for Position</label>
                <select 
                  value={candidateInfo.position}
                  onChange={(e) => setCandidateInfo({...candidateInfo, position: e.target.value})}
                  className="w-full bg-white/40 border border-white/60 p-3 rounded-xl text-xs font-bold text-[#3e473c] outline-none"
                >
                  <option>President</option>
                  <option>Vice President</option>
                  <option>Senator</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-[#4a5448] text-[#e3f0e0] rounded-xl text-[9px] font-black uppercase tracking-widest hover:shadow-lg transition-all">Update Profile</button>
            </form>
          </div>

        </div>

        {/* --- 2. CENTER/RIGHT: PARTY INFORMATION (VIEW-ONLY) --- */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/30 backdrop-blur-3xl border border-white/80 p-10 rounded-[3.5rem] shadow-xl">
            <header className="flex justify-between items-center mb-8 border-b border-[#bdcfbc] pb-6">
              <div className="text-left">
                <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em] mb-1">Your Official Slate</p>
                <h2 className="text-4xl font-black text-[#3e473c] uppercase tracking-tighter">{partyInfo.name}</h2>
              </div>
              <span className="text-[9px] font-bold bg-[#8eb486] text-white px-4 py-1.5 rounded-full uppercase tracking-widest">Official Slate</span>
            </header>
            <div className="text-left space-y-4">
               <div>
                  <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest ml-1 block mb-2">Slate Tagline</label>
                  <p className="text-[#3e473c] font-bold text-lg">{partyInfo.tagline}</p>
               </div>
               <div>
                  <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest ml-1 block mb-2">Core Party Objective</label>
                  <p className="text-[#3e473c] leading-relaxed">{partyInfo.objective}</p>
               </div>
            </div>
          </div>

          {/* Member Roster Section */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/80 p-10 rounded-[3.5rem] shadow-lg">
            <h4 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-8 text-left">Your Fellow Party Members</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {partyInfo.members.map((member, i) => (
                 <div key={i} className="bg-white/50 border border-white/70 p-6 rounded-3xl text-left">
                    <p className="text-[8px] font-black text-[#8eb486] uppercase tracking-widest mb-1">{member.position}</p>
                    <h5 className="text-sm font-black text-[#3e473c] uppercase leading-tight mb-4">{member.name}</h5>
                    <span className={`text-[8px] font-bold px-3 py-1 rounded-full uppercase ${member.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                      {member.status}
                    </span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;