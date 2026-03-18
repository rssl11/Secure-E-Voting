import React, { useState } from 'react';

// Mock-up for a modal component
const EditMemberModal = ({ member, onClose, onSave }) => {
  const [position, setPosition] = useState(member.position);

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-[#e3f0e0] p-10 rounded-3xl shadow-2xl w-full max-w-md border border-[#a2bfaa]">
        <h3 className="text-2xl font-black text-[#3e473c] uppercase mb-6">Edit Member</h3>
        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest">Member Name</label>
            <p className="font-bold text-lg text-[#3e473c]">{member.name}</p>
          </div>
          <div>
            <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest block mb-2">Position</label>
            <select 
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full bg-white/60 border border-white/80 p-4 rounded-xl text-sm font-bold text-[#3e473c] outline-none"
            >
              <option>President</option>
              <option>Vice President</option>
              <option>Secretary</option>
              <option>Treasurer</option>
              <option>Senator</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={() => onSave(member.id, position)} className="w-full py-3 bg-[#4a5448] text-[#e3f0e0] rounded-xl text-[10px] font-black uppercase tracking-widest">Save Changes</button>
          <button onClick={onClose} className="w-full py-3 bg-white/70 text-[#4a5448] rounded-xl text-[10px] font-black uppercase tracking-widest">Cancel</button>
        </div>
      </div>
    </div>
  );
};


const ManagerDashboard = () => {
  const [partyInfo, setPartyInfo] = useState({
    name: "Tech-Forward Party",
    tagline: "Digitizing Campus Integrity",
    objective: "To implement a decentralized feedback loop and transparent resource allocation.",
  });
  
  const [members, setMembers] = useState([
    { id: 1, name: "Jho Neil Poblacion", position: "President", status: "Active" },
    { id: 2, name: "Mark Rivera", position: "Vice President", status: "Active" },
    { id: 3, name: "Sarah Chen", position: "Secretary", status: "Pending Verification" }
  ]);
  
  const [editingMember, setEditingMember] = useState(null);

  const handleUpdatePartyInfo = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the party info
    console.log("Updated Party Info:", partyInfo);
    alert("Party manifesto updated!");
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    const newMemberName = e.target.elements.memberName.value;
    if (!newMemberName) {
      alert("Please enter a name.");
      return;
    }
    const newMember = {
      id: members.length + 1,
      name: newMemberName,
      position: "Awaiting Assignment",
      status: "Pending Verification"
    };
    setMembers([...members, newMember]);
    e.target.reset();
  };

  const handleSaveChanges = (memberId, newPosition) => {
    setMembers(members.map(m => m.id === memberId ? { ...m, position: newPosition } : m));
    setEditingMember(null);
  };
  
  return (
    <div className="min-h-screen text-[#5d6d5a] p-8 md:p-12 pt-44 bg-[#e3f0e0]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* --- 1. PARTY MANIFESTO & INFORMATION --- */}
        <div className="bg-white/30 backdrop-blur-3xl border border-white/80 p-10 rounded-[3.5rem] shadow-xl">
          <header className="flex justify-between items-center mb-8 border-b border-[#bdcfbc] pb-6">
            <h2 className="text-4xl font-black text-[#3e473c] uppercase tracking-tighter">Manage Your Slate</h2>
            <span className="text-[9px] font-bold bg-[#8eb486] text-white px-4 py-1.5 rounded-full uppercase tracking-widest">Manager Portal</span>
          </header>
          <form onSubmit={handleUpdatePartyInfo} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest ml-1 block mb-2">Slate Name</label>
                <input type="text" value={partyInfo.name} onChange={e => setPartyInfo({...partyInfo, name: e.target.value})} className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl outline-none focus:border-[#8eb486] text-[#3e473c] font-bold" />
              </div>
              <div>
                <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest ml-1 block mb-2">Slate Tagline</label>
                <input type="text" value={partyInfo.tagline} onChange={e => setPartyInfo({...partyInfo, tagline: e.target.value})} className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl outline-none focus:border-[#8eb486] text-[#3e473c] font-bold" />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest ml-1 block mb-2">Core Party Objective</label>
              <textarea value={partyInfo.objective} onChange={e => setPartyInfo({...partyInfo, objective: e.target.value})} className="w-full bg-white/40 border border-white/80 p-6 rounded-3xl h-32 outline-none focus:border-[#8eb486] text-[#3e473c] leading-relaxed" />
            </div>
            <button type="submit" className="px-8 py-4 bg-[#4a5448] text-[#e3f0e0] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:shadow-2xl transition-all">Update Manifesto</button>
          </form>
        </div>

        {/* --- 2. MEMBERS MANAGEMENT --- */}
        <div className="bg-white/20 backdrop-blur-xl border border-white/80 p-10 rounded-[3.5rem] shadow-lg">
          <h4 className="text-xs font-black text-[#8eb486] uppercase tracking-[0.3em] mb-4 text-left">Party Roster Management</h4>
          <p className="text-sm text-[#5d6d5a] mb-8 text-left max-w-2xl">Add new candidates to your slate, assign their positions, and monitor their verification status. Click on a member to edit their role.</p>
          
          {/* Add Member Form */}
          <form onSubmit={handleAddMember} className="flex gap-4 mb-8">
            <input name="memberName" type="text" placeholder="Enter new member's full name..." className="flex-grow bg-white/40 border border-white/80 p-4 rounded-2xl outline-none focus:border-[#8eb486] text-[#3e473c] font-bold" />
            <button type="submit" className="px-8 py-4 bg-[#4a5448] text-[#e3f0e0] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:shadow-lg">Add Member</button>
          </form>

          {/* Member List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {members.map(member => (
               <div key={member.id} onClick={() => setEditingMember(member)} className="bg-white/50 border border-white/70 p-6 rounded-3xl text-left cursor-pointer group hover:bg-white/80 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[9px] font-black text-[#8eb486] uppercase tracking-widest mb-1">{member.position}</p>
                      <h5 className="text-md font-black text-[#3e473c] uppercase leading-tight">{member.name}</h5>
                    </div>
                    <span className={`text-[8px] font-bold px-3 py-1 rounded-full uppercase ${member.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                      {member.status}
                    </span>
                  </div>
                  <div className="text-right mt-4">
                     <span className="text-[8px] font-bold text-[#5d6d5a] opacity-0 group-hover:opacity-100 transition-opacity">Click to Edit</span>
                  </div>
               </div>
             ))}
          </div>
        </div>

      </div>

      {/* --- MODAL --- */}
      {editingMember && (
        <EditMemberModal 
          member={editingMember}
          onClose={() => setEditingMember(null)}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default ManagerDashboard;