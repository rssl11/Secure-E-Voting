import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// General Pages
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';

// Authentication Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import OTPVerification from './pages/auth/OTPVerification';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Unauthorized from './pages/auth/Unauthorized';

// Voter Pages
import VoterDashboard from './pages/voter/VoterDashboard';
import OfficialResults from './pages/voter/OfficialResults'; // NEW IMPORT HERE


// Candidate Pages
import OrgsRegister from './pages/candidate/OrgsRegister';
import ManagerDashboard from './pages/candidate/ManagerDashboard';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AuditLogs from './pages/admin/AuditLogs';
import CandidateManager from './pages/admin/CandidateManager';
import ElectionManager from './pages/admin/ElectionManager';
import PositionManager from './pages/admin/PositionManager';
import ResultsAnalytics from './pages/admin/ResultsAnalytics';
import VoterRegistry from './pages/admin/VoterRegistry';
import CandidateDashboard from './pages/candidate/CandidateDashboard';
import RegistryHub from './pages/admin/RegistryHub';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Routes>

          {/* 🌿 Public, Auth, Voter, and Candidate Routes */}
          {/* Wrapped in PublicLayout to provide the Matcha Glass background */}
          <Route element={<PublicLayout />}>
            {/* Public Navigation */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Authentication Flow */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth/otp-verification" element={<OTPVerification />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Voter Portal */}
            <Route path="/voter/dashboard" element={<VoterDashboard />} />
            <Route path="/voter/results" element={<OfficialResults />} />


            {/* Candidate Portal (Navbar is hidden automatically via PublicLayout logic) */}
            <Route path="/candidate/register-party" element={<OrgsRegister />} />
            <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
            <Route path="/candidate/manager-dashboard" element={<ManagerDashboard />} />
          </Route>

          {/* 🔘 Admin Management Suite */}
          {/* Wrapped in AdminLayout for the Glassmorphic Sidebar */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/audit-logs" element={<AuditLogs />} />

            <Route path="/admin/elections" element={<ElectionManager />} />

            <Route path="/admin/analytics" element={<ResultsAnalytics />} />
            <Route path="/admin/voters" element={<VoterRegistry />} />
            <Route path="/admin/registryhub" element={<RegistryHub />} />
          </Route>

          {/* 404 - Themed Catch-all */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#e3f0e0] text-[#3e473c]">
              <h1 className="text-6xl font-black tracking-tighter mb-2">404</h1>
              <p className="font-bold uppercase tracking-[0.4em] text-[10px] opacity-60">Terminal Offline</p>
              <a href="/" className="mt-8 px-6 py-3 border border-[#bdcfbc] rounded-xl text-[#8eb486] font-bold uppercase text-[10px] tracking-widest hover:bg-white/50 transition-all">
                Return to Home
              </a>
            </div>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;