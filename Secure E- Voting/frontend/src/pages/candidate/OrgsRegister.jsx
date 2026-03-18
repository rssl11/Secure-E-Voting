import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrgsRegister = () => {
  const navigate = useNavigate();
  const [partyDetails, setPartyDetails] = useState({
    name: '',
    acronym: '',
    managerName: '',
    managerEmail: '',
    platform: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartyDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!partyDetails.name || !partyDetails.acronym || !partyDetails.platform || !partyDetails.managerName || !partyDetails.managerEmail) {
      alert("Please fill out all fields to create your party.");
      return;
    }
    // Simulate API call to register the organization
    console.log("Creating Party with details:", partyDetails);
    alert(`Party "${partyDetails.name}" created successfully! You are now the manager.`);
    // Navigate to the manager dashboard for the newly created party
    navigate('/candidate/manager-dashboard');
  };

  return (
    <div className="min-h-screen text-[#5d6d5a] p-8 md:p-12 flex items-center justify-center bg-[#e3f0e0]">
      <div className="w-full max-w-4xl bg-white/30 backdrop-blur-[40px] border border-white/80 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>

        <header className="text-left mb-12 border-b border-[#bdcfbc] pb-10 relative z-10">
          <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.5em]">Party Portal // Formation</p>
          <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter">Register a New <span className="text-[#8eb486] italic font-medium">Slate</span></h2>
        </header>

        <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest mb-2 ml-1" htmlFor="partyName">Party Name</label>
                  <input 
                    id="partyName"
                    name="name"
                    type="text" 
                    className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl focus:border-[#8eb486] outline-none text-[#3e473c]" 
                    placeholder="e.g., Buklod" 
                    value={partyDetails.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest mb-2 ml-1" htmlFor="partyAcronym">Party Acronym</label>
                  <input 
                    id="partyAcronym"
                    name="acronym"
                    type="text" 
                    className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl focus:border-[#8eb486] outline-none text-[#3e473c]" 
                    placeholder="e.g., BUK" 
                    value={partyDetails.acronym}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest mb-2 ml-1" htmlFor="managerName">Manager's Name</label>
                  <input 
                    id="managerName"
                    name="managerName"
                    type="text" 
                    className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl focus:border-[#8eb486] outline-none text-[#3e473c]" 
                    placeholder="e.g., Juan Dela Cruz" 
                    value={partyDetails.managerName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest mb-2 ml-1" htmlFor="managerEmail">Manager's Email</label>
                  <input 
                    id="managerEmail"
                    name="managerEmail"
                    type="email" 
                    className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl focus:border-[#8eb486] outline-none text-[#3e473c]" 
                    placeholder="e.g., juandelacruz@example.com" 
                    value={partyDetails.managerEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest mb-2 ml-1" htmlFor="partyPlatform">Party Platform</label>
                <textarea 
                  id="partyPlatform"
                  name="platform"
                  className="w-full bg-white/40 border border-white/80 p-4 rounded-2xl focus:border-[#8eb486] outline-none h-40 text-[#3e473c]" 
                  placeholder="Describe your party's vision, mission, and goals..."
                  value={partyDetails.platform}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          <div className="flex gap-4 pt-8">
            <button 
              type="submit"
              className="flex-1 py-4 bg-[#4a5448] text-[#e3f0e0] rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95"
            >
              Create Party & Proceed to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgsRegister;