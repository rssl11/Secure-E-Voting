import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicLayout = () => {
  const location = useLocation();

  // Define the paths where you want the Navbar to be visible
  const showNavbarPaths = ['/', '/about', '/contact'];
  const shouldShowNavbar = showNavbarPaths.includes(location.pathname);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e3f0e0]">
      {/* Mesh Background Blobs */}
      <div className="absolute top-[-5%] left-[-10%] w-[700px] h-[700px] bg-[#c5e1bc] rounded-full filter blur-[100px] opacity-80 animate-pulse"></div>
      <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#d7ecd0] rounded-full filter blur-[120px] opacity-90"></div>

      {/* Conditionally render the Navbar */}
      {shouldShowNavbar && <Navbar />}

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;