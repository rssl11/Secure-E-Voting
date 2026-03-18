import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0] pt-32 pb-16 px-6 flex items-center justify-center">

      {/* Background Animated Blobs for Atmosphere */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c5e1bc] rounded-full filter blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#bdcfbc] rounded-full filter blur-[100px] opacity-40"></div>

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-white/40 backdrop-blur-[50px] rounded-[4rem] overflow-hidden border border-white/80 flex flex-col md:flex-row shadow-[0_32px_64px_rgba(74,84,72,0.15)]">

        {/* Left Side: Support Info */}
        <div className="bg-gradient-to-br from-[#8eb486]/20 to-transparent p-12 md:p-16 md:w-2/5 border-b md:border-b-0 md:border-r border-white/40 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-5xl font-black mb-6 text-[#3e473c] tracking-tighter leading-none">
              Voters <br /><span className="text-[#8eb486] italic font-medium">Support</span>
            </h3>
            <p className="text-[#6b7c68] mb-12 leading-relaxed font-medium">
              Encountering encryption errors or verification delays? Contact the Boac election security desk.
            </p>
          </div>

          <div className="space-y-4 relative z-10 bg-white/30 p-8 rounded-[2rem] border border-white/50 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#8eb486] animate-ping"></span>
              <p className="text-[10px] font-black text-[#8eb486] uppercase tracking-[0.4em]">Help Desk Active</p>
            </div>
            <div className="text-sm font-bold text-[#4a5448] space-y-2">
              <p>Email: <span className="font-black text-[#3e473c]">support@evote.edu</span></p>
              <p>Contact: <span className="font-black text-[#3e473c]">(049) 123-4567</span></p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="p-12 md:p-16 md:w-3/5 space-y-8 bg-white/10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest mb-3">Voter Identity</label>
              <input
                type="text"
                className="w-full bg-white/50 border border-white/60 p-5 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                placeholder="Juan Dela Cruz"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest mb-3">Voter Email</label>
              <input
                type="email"
                className="w-full bg-white/50 border border-white/60 p-5 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                placeholder="juan@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest mb-3">Technical Category</label>
            <select className="w-full bg-white/50 border border-white/60 p-5 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-black shadow-sm cursor-pointer appearance-none">
              <option value="auth_error">Authentication Error</option>
              <option value="otp_fail">OTP Verification Fail</option>
              <option value="ballot_access">Ballot Access Restriction</option>
              <option value="id_registration">ID Registration Issue</option>
              <option value="incorrect_info">Incorrect Voter Information</option>
              <option value="network_timeout">Connection / Network Timeout</option>
              <option value="suspicious_activity">Suspicious Activity Report</option>
              <option value="accessibility">Accessibility Request</option>
              <option value="other">Other System Query</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest mb-3">Issue Description</label>
            <textarea
              className="w-full bg-white/50 border border-white/60 p-5 rounded-3xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50 min-h-[140px] resize-y custom-scrollbar"
              placeholder="Please describe the problem you are experiencing in detail..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-[#4a5448] text-white rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl hover:bg-[#8eb486] hover:-translate-y-1 transition-all active:translate-y-0"
          >
            Submit Ticket
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;