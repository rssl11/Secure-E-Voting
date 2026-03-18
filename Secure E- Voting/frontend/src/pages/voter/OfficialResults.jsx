import React from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const OfficialResults = () => {
    const navigate = useNavigate();

    // Simulated Final Results Data
    const finalResults = {
        President: [
            { name: 'JHO NEIL POBLACION', party: 'Tech-Forward', votes: 15420, winner: true },
            { name: 'ALICE SANTOS', party: 'Independent', votes: 12100, winner: false },
            { name: 'ELENA CRUZ', party: 'New Leaders', votes: 8450, winner: false }
        ],
        VicePresident: [
            { name: 'MARK RIVERA', party: 'Tech-Forward', votes: 16000, winner: true },
            { name: 'SOFIA GARCIA', party: 'Independent', votes: 11500, winner: false },
            { name: 'MICHAEL TAN', party: 'New Leaders', votes: 9000, winner: false }
        ],
        Senators: [
            { name: 'SARAH CHEN', party: 'Tech-Forward', votes: 20100, winner: true },
            { name: 'CARLOS REYES', party: 'Independent', votes: 18500, winner: true },
            { name: 'LILY EVANS', party: 'New Leaders', votes: 17200, winner: true },
            { name: 'DAVID LIM', party: 'Tech-Forward', votes: 15000, winner: false }
        ]
    };

    const handleDownloadPDF = () => {
        const element = document.getElementById('results-pdf-container');

        const opt = {
            margin: 0.5,
            filename: 'Official_Election_Results_2026.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            // Tells html2pdf to respect our CSS page break rules
            pagebreak: { mode: ['css', 'legacy'] }
        };

        html2pdf().set(opt).from(element).save();
    };

    return (
        <div className="min-h-screen text-[#5d6d5a] p-8 md:p-12 pt-44 bg-[#e3f0e0] relative font-sans">

            {/* Background Animated Blobs for Atmosphere */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c5e1bc] rounded-full filter blur-[120px] opacity-60"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#bdcfbc] rounded-full filter blur-[100px] opacity-40"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Navigation & Actions Header */}
                <div className="flex justify-between items-center mb-12">
                    <button
                        onClick={() => navigate('/voter/dashboard')}
                        className="flex items-center gap-2 text-[#4a5448] hover:text-[#8eb486] font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                        ← Return to Dashboard
                    </button>

                    <button
                        onClick={handleDownloadPDF}
                        className="px-8 py-4 bg-[#4a5448] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg hover:-translate-y-1 transition-all active:translate-y-0"
                    >
                        Download PDF Report
                    </button>
                </div>

                {/* Printable Area Container */}
                <div id="results-pdf-container" className="bg-white/50 backdrop-blur-3xl border border-white/80 p-10 md:p-14 rounded-[4rem] shadow-2xl">

                    <header className="text-center mb-12 border-b border-[#8eb486]/30 pb-8 break-inside-avoid">
                        <h1 className="text-5xl font-black text-[#3e473c] uppercase tracking-tighter leading-none mb-4">Official <span className="text-[#8eb486] italic">Election Results</span></h1>
                        <p className="text-[11px] font-bold text-[#6b7c68] uppercase tracking-[0.4em]">Final Certified Tally • 2026 Academic Cycle</p>
                    </header>

                    <div className="space-y-10">

                        {/* Presidents Section */}
                        <section className="break-inside-avoid">
                            <h2 className="text-2xl font-black text-[#4a5448] uppercase tracking-widest mb-6 border-l-4 border-[#8eb486] pl-4">Presidential Tally</h2>
                            <div className="space-y-4">
                                {finalResults.President.map((candidate, idx) => (
                                    <div key={idx} className={`break-inside-avoid flex justify-between items-center p-6 rounded-3xl border ${candidate.winner ? 'bg-[#8eb486]/10 border-[#8eb486]/50' : 'bg-white/40 border-white/60'}`}>
                                        <div>
                                            <h3 className="text-lg font-black text-[#3e473c] uppercase leading-none mb-1 flex items-center gap-3">
                                                {candidate.name}
                                                {candidate.winner && <span className="bg-[#8eb486] text-white text-[9px] px-3 py-1 rounded-full tracking-widest">Elected</span>}
                                            </h3>
                                            <p className="text-[10px] font-bold text-[#6b7c68] uppercase tracking-widest">{candidate.party}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-black text-[#4a5448]">{candidate.votes.toLocaleString()}</p>
                                            <p className="text-[9px] font-bold text-[#8eb486] uppercase tracking-widest">Total Votes</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Vice Presidents Section */}
                        <section className="break-inside-avoid">
                            <h2 className="text-2xl font-black text-[#4a5448] uppercase tracking-widest mb-6 border-l-4 border-[#8eb486] pl-4">Vice Presidential Tally</h2>
                            <div className="space-y-4">
                                {finalResults.VicePresident.map((candidate, idx) => (
                                    <div key={idx} className={`break-inside-avoid flex justify-between items-center p-6 rounded-3xl border ${candidate.winner ? 'bg-[#8eb486]/10 border-[#8eb486]/50' : 'bg-white/40 border-white/60'}`}>
                                        <div>
                                            <h3 className="text-lg font-black text-[#3e473c] uppercase leading-none mb-1 flex items-center gap-3">
                                                {candidate.name}
                                                {candidate.winner && <span className="bg-[#8eb486] text-white text-[9px] px-3 py-1 rounded-full tracking-widest">Elected</span>}
                                            </h3>
                                            <p className="text-[10px] font-bold text-[#6b7c68] uppercase tracking-widest">{candidate.party}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-black text-[#4a5448]">{candidate.votes.toLocaleString()}</p>
                                            <p className="text-[9px] font-bold text-[#8eb486] uppercase tracking-widest">Total Votes</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Senators Section */}
                        <section className="break-inside-avoid">
                            <h2 className="text-2xl font-black text-[#4a5448] uppercase tracking-widest mb-6 border-l-4 border-[#8eb486] pl-4">Senatorial Tally (Top Ranked)</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {finalResults.Senators.map((candidate, idx) => (
                                    <div key={idx} className={`break-inside-avoid flex justify-between items-center p-6 rounded-3xl border ${candidate.winner ? 'bg-[#8eb486]/10 border-[#8eb486]/50' : 'bg-white/40 border-white/60'}`}>
                                        <div>
                                            <h3 className="text-sm font-black text-[#3e473c] uppercase leading-tight mb-1 flex items-center gap-2">
                                                {candidate.name}
                                                {candidate.winner && <span className="text-[#8eb486]">✓</span>}
                                            </h3>
                                            <p className="text-[9px] font-bold text-[#6b7c68] uppercase tracking-widest">{candidate.party}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-black text-[#4a5448]">{candidate.votes.toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    <footer className="mt-12 pt-6 border-t border-[#8eb486]/30 text-center break-inside-avoid">
                        <p className="text-[9px] font-mono text-[#6b7c68] uppercase tracking-widest">Document Generated: {new Date().toLocaleString()} • Authorized by Boac Commission on Elections</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default OfficialResults;