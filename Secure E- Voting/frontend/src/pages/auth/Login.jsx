import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#e3f0e0] relative overflow-hidden font-sans">

      {/* 🌿 Floating Organic Background Elements */}
      <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-[#c5e1bc] rounded-full filter blur-[80px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-[#bdcfbc] rounded-full filter blur-[100px] opacity-60"></div>
      <div className="absolute top-[40%] right-[20%] w-32 h-32 bg-[#8eb486] rounded-full filter blur-[60px] opacity-20 animate-bounce duration-[10s]"></div>

      {/* Main Glass Slider Container */}
      <div className="relative w-full max-w-5xl h-[650px] bg-white/20 backdrop-blur-[50px] rounded-[4rem] border border-white/50 shadow-[0_32px_64px_rgba(74,84,72,0.1)] overflow-hidden flex">

        {/* --- FORM PANEL --- */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) z-[5] flex items-center justify-center p-16
          ${isAdminMode ? 'left-0 opacity-100 translate-x-full' : 'left-0 opacity-100 translate-x-0'}`}>

          <div className="w-full max-w-sm">
            <header className="mb-10 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/40 border border-white/60 text-[#8eb486] text-[9px] font-black uppercase tracking-[0.4em] mb-4">
                Secure Protocol 0.4
              </div>
              <h2 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter leading-none mb-3">
                {isAdminMode ? 'Authorize' : 'Identify'}
              </h2>
              <p className="text-[#6b7c68] text-sm font-medium italic opacity-70">Enter institutional credentials</p>
            </header>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/auth/otp-verification'); }}>
              <div className="space-y-4">
                <div className="relative group">
                  <label className="absolute -top-2 left-4 px-2 bg-[#eaf4e8] text-[9px] font-black text-[#8eb486] uppercase tracking-widest z-10 rounded-sm">
                    {isAdminMode ? 'Admin Hash' : 'Access Identity'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-5 bg-white/30 border border-white/60 rounded-[1.5rem] focus:border-[#8eb486] outline-none transition-all placeholder:text-[#9fb09c]/50 text-[#3e473c] font-medium"
                    placeholder={isAdminMode ? "••••-••••-••••" : "LU-2026-XXXX"}
                  />
                </div>

                {/* Password Input & Forgot Password Link Wrapper */}
                <div className="space-y-2">
                  <div className="relative group">
                    <label className="absolute -top-2 left-4 px-2 bg-[#eaf4e8] text-[9px] font-black text-[#8eb486] uppercase tracking-widest z-10 rounded-sm">
                      Passcode
                    </label>
                    <input
                      type="password"
                      className="w-full px-6 py-5 bg-white/30 border border-white/60 rounded-[1.5rem] focus:border-[#8eb486] outline-none transition-all placeholder:text-[#9fb09c]/50 text-[#3e473c]"
                      placeholder="••••••••"
                    />
                  </div>

                  {/* 🆕 Forgot Password Link */}
                  <div className="flex justify-end px-2">
                    <Link
                      to="/auth/forgot-password"
                      className="text-[9px] font-bold text-[#6b7c68] hover:text-[#8eb486] uppercase tracking-[0.2em] transition-colors"
                    >
                      Forgot Passcode?
                    </Link>
                  </div>
                </div>

              </div>

              <button className="group relative w-full py-5 bg-[#4a5448] text-[#e3f0e0] rounded-2xl font-black uppercase tracking-[0.3em] text-xs overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#4a5448]/20">
                <span className="relative z-10">{isAdminMode ? 'Authorize Node' : 'Initialize Session'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            {/* Conditional Buttons (Only visible to Voters) */}
            {!isAdminMode && (
              <div className="mt-8 text-center space-y-4">
                <p className="text-[10px] font-bold text-[#5d6d5a] uppercase tracking-widest opacity-60">
                  New to the registry?
                  <Link to="/register" className="ml-2 text-[#8eb486] hover:text-[#4a5448] transition-colors underline decoration-2 underline-offset-4">
                    Create Voter Account
                  </Link>
                </p>
                <div className="pt-2 border-t border-[#bdcfbc]/30">
                  <Link
                    to="/candidate/register-party"
                    className="inline-block w-full py-3 bg-white/40 border border-[#8eb486] text-[#8eb486] rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#8eb486] hover:text-white transition-all shadow-sm"
                  >
                    Create Party
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- DYNAMIC OVERLAY PANEL --- */}
        <div className={`absolute top-0 left-0 w-1/2 h-full overflow-hidden transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) z-[100]
          ${isAdminMode ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className={`relative left-[-100%] h-full w-[200%] transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
            ${isAdminMode ? 'translate-x-1/2' : 'translate-x-0'}`}>

            <div className="flex h-full">
              {/* Admin Side Backdrop with Image */}
              <div
                className="w-1/2 h-full flex flex-col items-center justify-center p-16 text-center text-[#e3f0e0] relative bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(74, 84, 72, 0.85), rgba(74, 84, 72, 0.85)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')` }}
              >
                <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 relative z-10 leading-none">Root<br /><span className="text-[#8eb486]">Access</span></h1>
                <p className="mb-12 opacity-80 leading-relaxed font-medium max-w-xs relative z-10 text-sm italic">"Security is not a product, but a process."</p>
                <button
                  onClick={() => setIsAdminMode(false)}
                  className="relative z-10 px-12 py-4 bg-transparent border border-white/30 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all active:scale-95"
                >
                  ← Voter Portal
                </button>
              </div>

              {/* User Side Backdrop with Image */}
              <div
                className="w-1/2 h-full flex flex-col items-center justify-center p-16 text-center text-[#e3f0e0] relative bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(74, 84, 72, 0.85), rgba(74, 84, 72, 0.85)), url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070')` }}
              >
                <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 relative z-10 leading-none">Voter<br /><span className="text-[#8eb486]">Portal</span></h1>
                <p className="mb-12 opacity-80 leading-relaxed font-medium max-w-xs relative z-10 text-sm italic">Empowering institutional integrity through decentralized technology.</p>
                <button
                  onClick={() => setIsAdminMode(true)}
                  className="relative z-10 px-12 py-4 bg-white text-[#4a5448] rounded-full font-black uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all active:scale-95"
                >
                  Admin Access →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;