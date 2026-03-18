import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl overflow-hidden bg-white/40 backdrop-blur-2xl border-[1.5px] border-white/70 py-3 px-8 rounded-3xl flex justify-between items-center shadow-[0_8px_32px_0_rgba(142,180,134,0.15)]">
      {/* 💡 Constant Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"></div>

      <div className="flex items-center gap-3 relative z-10">
        <div className="w-9 h-9 bg-[#8eb486] rounded-xl flex items-center justify-center text-white font-black shadow-sm">
          S
        </div>
        <span className="text-xl font-bold tracking-tight text-[#4a5448]">
          SECURE<span className="text-[#8eb486]">VOTE</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 relative z-10">
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[#5d6d5a]">
          <Link to="/" className="hover:text-[#8eb486] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#8eb486] transition-colors">About</Link>
          {/* Added Customer Support link below */}
          <Link to="/contact" className="hover:text-[#8eb486] transition-colors whitespace-nowrap">Customer Support</Link>
        </div>
        
        <Link 
          to="/login" 
          className="bg-[#8eb486] text-white px-7 py-2.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[#8eb486]/20"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;