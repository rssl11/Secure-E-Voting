import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0] flex items-center justify-center p-6">
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[#d7ecd0] rounded-full filter blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-[40px] rounded-[3rem] shadow-2xl p-10 border border-white/80 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

        <h2 className="text-3xl font-black text-[#3e473c] mb-4 tracking-tight relative z-10">Recovery</h2>
        <p className="text-[#6b7c68] mb-8 leading-relaxed font-medium relative z-10">Enter your registered ID to receive a secure recovery link.</p>
        
        <form className="space-y-6 relative z-10">
          <div className="text-left">
            <label className="block text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest ml-1 mb-2">Voter Identity</label>
            <input 
              type="text" 
              className="w-full px-5 py-4 bg-white/40 border border-white/60 rounded-2xl focus:border-[#8eb486] outline-none transition-all font-medium text-[#3e473c] placeholder:text-[#9fb09c]" 
              placeholder="LU-2026-XXXX" 
            />
          </div>
          <button className="w-full py-4 bg-[#4a5448] text-white rounded-2xl font-black uppercase tracking-widest hover:shadow-xl transition-all active:scale-95">
            Send Reset Link
          </button>
        </form>
        
        <Link to="/login" className="relative z-10 inline-block mt-8 text-xs font-bold text-[#8eb486] hover:text-[#6a8a62] transition-colors uppercase tracking-[0.2em]">
          ← Return to Terminal
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;