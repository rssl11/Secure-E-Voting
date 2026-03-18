import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  // Form States
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  // UI States
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when the user starts typing again
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // Removed the complex regex validation. 
    // Just making sure the fields aren't completely empty.
    if (!formData.newPassword) {
      newErrors.newPassword = "Please enter a new password.";
    }

    // Validate Passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Password successfully updated to: ", formData.newPassword);
      // Backend logic goes here, then redirect to login
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0] flex items-center justify-center p-6">

      {/* Background Animated Blobs for Atmosphere */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c5e1bc] rounded-full filter blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#bdcfbc] rounded-full filter blur-[100px] opacity-40"></div>

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-md bg-white/40 backdrop-blur-[50px] rounded-[3.5rem] shadow-[0_32px_64px_rgba(74,84,72,0.15)] p-10 md:p-12 border border-white/80">

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#8eb486]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#8eb486]/30 shadow-inner">
            <span className="text-3xl">🔐</span>
          </div>
          <h2 className="text-4xl font-black text-[#3e473c] tracking-tighter leading-none mb-3">
            New <span className="text-[#8eb486] italic font-medium">Password</span>
          </h2>
          <p className="text-[#6b7c68] text-xs font-bold uppercase tracking-widest">Generate a new security key.</p>
        </div>

        <form className="space-y-6 text-left" onSubmit={handleSubmit}>

          <div className="relative">
            <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">New Security Key</label>
            <input
              name="newPassword"
              type={showPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={handleInputChange}
              className={`w-full px-5 py-4 bg-white/50 border rounded-2xl outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50
                ${errors.newPassword ? 'border-red-400 focus:border-red-500 focus:bg-white' : 'border-white/60 focus:border-[#8eb486] focus:bg-white'}
              `}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[2.4rem] text-[#8eb486] hover:text-[#4a5448] font-bold text-sm transition-colors"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.newPassword && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.newPassword}</p>}
          </div>

          <div className="relative">
            <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Verify Key</label>
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full px-5 py-4 bg-white/50 border rounded-2xl outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50
                ${errors.confirmPassword ? 'border-red-400 focus:border-red-500 focus:bg-white' : 'border-white/60 focus:border-[#8eb486] focus:bg-white'}
              `}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[2.4rem] text-[#8eb486] hover:text-[#4a5448] font-bold text-sm transition-colors"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-[#4a5448] text-white rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl hover:bg-[#8eb486] hover:-translate-y-1 transition-all active:translate-y-0 mt-8"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;