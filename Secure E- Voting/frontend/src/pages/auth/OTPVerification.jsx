import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const OTPVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (location.state && location.state.email) {
            setEmail(location.state.email);
        } else {
            setError("Email not found. Please register again.");
            // navigate('/register'); // Redirect if no email is found
        }
    }, [location, navigate]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        const otpCode = otp.join("");
        if (otpCode.length !== 6) {
            setError("Please enter the 6-digit code.");
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/api/verify-otp/', {
                email,
                otp: otpCode,
            });
            navigate('/login');
        } catch (err) {
            setError('Invalid or expired OTP. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen text-[#5d6d5a] font-sans relative overflow-hidden bg-[#e3f0e0] flex items-center justify-center p-6">
            {/* Mesh Background Blobs */}
            <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#8eb486] rounded-full filter blur-[120px] opacity-20"></div>

            <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-[40px] rounded-[3rem] shadow-2xl p-10 border border-white/80 text-center overflow-hidden">
                {/* Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"></div>

                <div className="mb-8 relative z-10">
                    <div className="w-20 h-20 bg-white/50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/80 shadow-sm">
                        <span className="text-4xl text-[#8eb486]">🌿</span>
                    </div>
                    <h2 className="text-2xl font-black text-[#3e473c] tracking-tight">Verify Identity</h2>
                    <p className="text-[#6b7c68] mt-2 font-medium">Enter the 6-digit decryption code sent to {email}.</p>
                </div>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleVerifyOTP}>
                    <div className="flex justify-center gap-3 mb-8 relative z-10">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="w-12 h-14 bg-white/40 border border-white/60 rounded-xl text-center text-xl font-bold text-[#4a5448] focus:border-[#8eb486] outline-none transition-all shadow-sm"
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[#4a5448] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#3e473c] transition-all active:scale-95 shadow-lg relative z-10"
                    >
                        Confirm Code
                    </button>
                </form>

                <p className="mt-8 text-[10px] font-black text-[#5d6d5a] uppercase tracking-widest relative z-10">
                    No signal? <button className="text-[#8eb486] hover:text-[#6a8a62] ml-1">Request Resend</button>
                </p>
            </div>
        </div>
    );
};

export default OTPVerification;