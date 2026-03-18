import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = () => {
  return (
    // Root container inheriting the Matcha background
    <div className="flex bg-[#e3f0e0] min-h-screen relative overflow-hidden">
      {/* Background Mesh Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#c5e1bc] rounded-full filter blur-[120px] opacity-70"></div>
      
      {/* Sidebar with Glassmorphism */}
      <div className="relative z-20">
        <AdminSidebar />
      </div>

      <main className="flex-1 ml-64 min-h-screen relative z-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;