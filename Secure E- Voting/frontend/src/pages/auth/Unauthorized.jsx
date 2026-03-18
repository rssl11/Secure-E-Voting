import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center bg-[#e3f0e0] relative overflow-hidden">
      {/* 🌿 Soft Warning Underlay (Muted Peach/Orange instead of Red to keep it organic) */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-[#dcbca5] rounded-full filter blur-[100px] opacity-30"></div>

      <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-[40px] rounded-[3rem] shadow-2xl p-10 border border-white/80 overflow-hidden">
        {/* 💡 Glossy Shine Sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-white/50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/80 shadow-sm">
            <span className="text-4xl">🚫</span>
          </div>
          
          <h2 className="text-3xl font-black text-[#3e473c] mb-4 tracking-tight">Access Denied</h2>
          
          <p className="text-[#6b7c68] mb-10 leading-relaxed font-medium">
            Authorization required. Your identity does not have the permissions for this network segment.
          </p>
          
          <Link 
            to="/" 
            className="inline-block w-full px-8 py-4 bg-[#4a5448] text-[#e3f0e0] rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95"
          >
            Return to Terminal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;