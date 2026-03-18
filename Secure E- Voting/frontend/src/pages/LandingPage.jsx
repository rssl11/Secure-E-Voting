import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    // Background: Deeper Mint-Sage Gradient to make white glass pop
    <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0]">
      
      {/* 🌿 High-Contrast Mesh Background */}
      {/* These shapes move behind the glass to make the blur effect visible */}
      <div className="absolute top-[-5%] left-[-10%] w-[700px] h-[700px] bg-[#c5e1bc] rounded-full filter blur-[100px] opacity-80 animate-pulse"></div>
      <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#d7ecd0] rounded-full filter blur-[120px] opacity-90"></div>
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[#8eb486] rounded-full filter blur-[150px] opacity-20"></div>

      <header className="relative pt-48 pb-32 px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Reflective Hero Card */}
          <div className="group relative overflow-hidden bg-white/30 backdrop-blur-[40px] border-[1px] border-white/80 p-16 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            
            {/* 💡 Animated Shine Sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/50 border border-white/80 text-[#556b53] text-[11px] font-bold tracking-[0.2em] uppercase mb-10">
                <span className="h-2 w-2 rounded-full bg-[#8eb486] animate-pulse"></span>
                Protocol Verified
              </div>
              
              <h1 className="text-7xl font-bold tracking-tighter text-[#3e473c] mb-8 leading-[1]">
                Secure the <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#8eb486] to-[#6a8a62]">Digital Frontier.</span>
              </h1>
              
              <p className="text-xl text-[#6b7c68] mb-12 max-w-2xl mx-auto leading-relaxed">
                A high-integrity voting architecture designed with an organic aesthetic for modern institutional transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/login" className="px-12 py-5 bg-[#4a5448] text-[#e3f0e0] rounded-3xl font-bold hover:shadow-2xl transition-all active:scale-95">
                  Get Started
                </Link>
                <Link to="/about" className="px-12 py-5 bg-white/40 backdrop-blur-md border border-white/80 text-[#4a5448] rounded-3xl font-bold hover:bg-white/60 transition-all">
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Section with "Floating Glass" items */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 relative z-10">
        {[
          { title: "Quantum-Safe", desc: "Future-proof cryptographic primitives ensuring long-term privacy." },
          { title: "Zero-Knowledge", desc: "Prove your identity without ever revealing sensitive personal data." },
          { title: "Immutable Ledger", desc: "Every vote is cryptographically anchored to an unchangeable log." }
        ].map((feature, i) => (
          <div 
            key={i} 
            className="group relative overflow-hidden p-10 bg-white/20 backdrop-blur-2xl border border-white/70 rounded-[3rem] hover:-translate-y-2 transition-all duration-500 shadow-xl"
          >
            {/* Glossy Reflection (Diagonal) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/40 rounded-2xl flex items-center justify-center mb-8 border border-white/60">
                <span className="text-[#8eb486] font-bold">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3e473c]">{feature.title}</h3>
              <p className="text-[#6b7c68] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LandingPage;