import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', code: '01' },
    { name: 'Elections', path: '/admin/elections', code: '02' },
    // 🏛️ Unified Registry Hub replaces separate Candidate/Position links
    { name: 'Registry Hub', path: '/admin/registryhub', code: '03' }, 
    { name: 'Voter Registry', path: '/admin/voters', code: '04' },
    { name: 'Analytics', path: '/admin/analytics', code: '05' },
    { name: 'Audit Logs', path: '/admin/audit-logs', code: '06' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/30 backdrop-blur-3xl border-r border-white/60 p-8 z-50 shadow-xl">
      <div className="mb-12 border-b border-[#bdcfbc] pb-8 relative z-10">
        <h1 className="text-2xl font-black text-[#3e473c] uppercase tracking-tighter">
          Admin <span className="italic font-medium text-[#8eb486]">Console</span>
        </h1>
        <p className="text-[9px] font-black text-[#8eb486] uppercase tracking-[0.4em] mt-2">Institutional Access</p>
      </div>

      <nav className="space-y-2 relative z-10">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
              location.pathname === item.path 
              ? 'bg-[#8eb486] text-white shadow-md shadow-[#8eb486]/20' 
              : 'text-[#6b7c68] hover:bg-white/40 hover:text-[#3e473c]'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.name}</span>
            <span className="font-mono text-[9px] opacity-40 group-hover:opacity-100">{item.code}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-10 left-8 right-8 pt-8 border-t border-[#bdcfbc] z-10">
        <Link to="/" className="text-[9px] font-black text-red-700 uppercase tracking-widest hover:text-red-500 transition-colors">
          Terminate Session
        </Link>
      </div>
      
      {/* Subtle Sidebar Gloss */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
    </aside>
  );
};

export default AdminSidebar;