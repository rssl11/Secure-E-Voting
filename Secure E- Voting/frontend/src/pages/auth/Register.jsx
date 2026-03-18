import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // Form States
    const [formData, setFormData] = useState({
        fullName: '',
        idNumber: '',
        mobile: '',
        email: '',
        blockSection: '',
        birthday: '',
        age: '',
        password: '',
        confirmPassword: ''
    });

    // UI States
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Helper to calculate age dynamically (kept as a convenience feature, not a validation)
    const calculateAge = (dob) => {
        if (!dob) return '';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Auto-calculates Age when birthday changes
        if (name === 'birthday') {
            setFormData({ ...formData, birthday: value, age: calculateAge(value) });
            return;
        }

        // Completely unrestricted input setting
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Registration Payload: ", formData);
        // Proceed immediately to the next screen without checking anything
        navigate('/auth/otp-verification');
    };

    return (
        <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0] flex items-center justify-center p-6 py-12">

            {/* Background Animated Blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c5e1bc] rounded-full filter blur-[120px] opacity-60 animate-pulse"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#bdcfbc] rounded-full filter blur-[100px] opacity-40"></div>

            {/* Main Glass Container */}
            <div className="relative z-10 w-full max-w-4xl bg-white/40 backdrop-blur-[50px] rounded-[3.5rem] shadow-[0_32px_64px_rgba(74,84,72,0.15)] p-10 md:p-14 border border-white/80">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-[#3e473c] tracking-tighter leading-none mb-3">
                        Voter <span className="text-[#8eb486] italic font-medium">Registration</span>
                    </h2>
                    <p className="text-[#6b7c68] text-xs font-bold uppercase tracking-widest">Enroll to participate in the upcoming elections</p>
                </div>

                {/* Added noValidate to stop HTML5 browser popups */}
                <form onSubmit={handleRegister} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

                    {/* Section: Personal Information */}
                    <div className="md:col-span-2 border-b border-[#8eb486]/30 pb-2 mb-2">
                        <h3 className="text-sm font-black text-[#4a5448] uppercase tracking-widest">Personal Information</h3>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Full Name</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="Juan Dela Cruz"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">ID Number</label>
                        <input
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="241-0000"
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <div className="w-2/3">
                                <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Birthday</label>
                                <input
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleInputChange}
                                    type="date"
                                    className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm"
                                />
                            </div>
                            <div className="w-1/3">
                                <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Age</label>
                                <input
                                    name="age"
                                    value={formData.age}
                                    type="number"
                                    readOnly
                                    className="w-full px-5 py-4 bg-white/30 border border-white/40 rounded-2xl outline-none text-[#6b7c68] font-bold cursor-not-allowed"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Block/Section</label>
                        <input
                            name="blockSection"
                            value={formData.blockSection}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="BSIT 2B"
                        />
                    </div>

                    {/* Section: Account Security */}
                    <div className="md:col-span-2 border-b border-[#8eb486]/30 pb-2 mb-2 mt-4">
                        <h3 className="text-sm font-black text-[#4a5448] uppercase tracking-widest">Account Security</h3>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Mobile Number</label>
                        <input
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="09123456789"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Email Address</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="juan@example.com"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Password</label>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            type={showPassword ? "text" : "password"}
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-[2.4rem] text-[#8eb486] hover:text-[#4a5448] font-bold text-sm transition-colors"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <div className="relative">
                        <label className="block text-[10px] font-black text-[#8eb486] uppercase tracking-widest ml-1 mb-2">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:border-[#8eb486] focus:bg-white outline-none transition-all text-[#3e473c] font-medium shadow-sm placeholder-[#6b7c68]/50"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-[2.4rem] text-[#8eb486] hover:text-[#4a5448] font-bold text-sm transition-colors"
                        >
                            {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 mt-8">
                        <button
                            type="submit"
                            className="w-full py-5 bg-[#4a5448] text-white rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl hover:bg-[#8eb486] hover:-translate-y-1 transition-all active:translate-y-0"
                        >
                            Authorize Identity
                        </button>
                        <p className="text-center mt-6 text-[10px] font-bold text-[#6b7c68] uppercase tracking-widest">
                            Already initialized?
                            <Link to="/login" className="ml-2 text-[#8eb486] hover:text-[#4a5448] transition-colors underline decoration-2 underline-offset-4">
                                Access Node
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;