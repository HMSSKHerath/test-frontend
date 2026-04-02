import { useState } from 'react'
import axios from 'axios'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + '/api/users/login', 
            { email, password });
            const user = response.data.user;
            if (user.role == 'admin') {
                window.location.href = '/admin'
            } else {
                window.location.href = '/home'
            }
        } catch (err) {
            console.log("Login Failed!", err);
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/bg4.jpg')] bg-cover bg-center flex overflow-hidden">

            {/* Left half - Visual Branding Side */}
            <div
                className="relative w-[45%] h-full hidden lg:flex flex-col justify-between overflow-hidden"
                style={{
                    background: 'linear-gradient(165deg, rgba(20, 20, 20, 0.85) 0%, rgba(45, 30, 20, 0.75) 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    padding: '60px 55px',
                    borderRight: '1px solid rgba(212, 175, 55, 0.15)',
                }}
            >
                {/* Background Decorative Element */}
                <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37] opacity-[0.05] blur-[100px]" />

                {/* Top Section: Logo & Brand (Modified for White Logo & Space) */}
                <div className="relative z-10">
                    <div className="flex items-center gap-7 group cursor-default">
                        
                        {/* White Logo Monogram Circle */}
                        <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center text-white font-serif text-2xl font-bold bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                            GB
                        </div>

                        {/* Brand Name with increased spacing */}
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold tracking-[0.25em] text-[#FAF7F2] uppercase font-serif transition-colors duration-500 group-hover:text-[#D4AF37]">
                                Gloss Beauty
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                                <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-semibold">
                                    Cosmetic Excellence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Hero Text */}
                <div className="relative z-10 mb-10">
                    <div className="w-16 h-[2px] bg-[#D4AF37] mb-8 shadow-[0_0_10px_#D4AF37]" />
                    
                    <h2 className="text-[58px] font-light leading-[1.1] text-white font-serif mb-6">
                        Redefine <br />
                        <span className="italic text-[#D4AF37] font-serif">Your Glow</span> <br />
                        Every Day
                    </h2>

                    <p className="text-[14px] leading-relaxed text-white/60 max-w-[360px] font-light tracking-wide">
                        Experience the pinnacle of luxury skincare. Our curated collection brings out the natural brilliance in you, crafted with premium ingredients for timeless beauty.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 mt-12">
                        {[
                            { num: '500+', label: 'Products' },
                            { num: '12K', label: 'Clients' },
                            { num: '98%', label: 'Rating' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[100px] hover:bg-white/10 transition-colors">
                                <span className="text-xl font-semibold text-[#D4AF37]">{stat.num}</span>
                                <span className="text-[9px] uppercase tracking-widest text-white/40 mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 flex justify-between items-center">
                    <p className="text-[10px] tracking-widest text-white/30 uppercase">
                        © 2026 Gloss Beauty International
                    </p>
                    <div className="flex gap-4 opacity-20">
                        <div className="w-8 h-[1px] bg-white" />
                        <div className="w-8 h-[1px] bg-white" />
                    </div>
                </div>
            </div>

            {/* Right half — Login Card (Unchanged) */}
            <div className="w-full md:w-[50%] h-full flex items-center justify-center p-6">
                <div
                    className="relative w-full max-w-[500px] rounded-[40px] overflow-hidden flex flex-col gap-0 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                    style={{
                        background: 'rgba(15, 15, 15, 0.55)', 
                        backdropFilter: 'blur(35px)',
                        WebkitBackdropFilter: 'blur(35px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <div className="w-full h-[6px]" style={{ background: 'linear-gradient(90deg, #FA812F, #f5a461)' }} />
                    <div className="flex flex-col gap-10 px-10 py-14 md:px-14">
                        <div className="flex flex-col gap-2">
                            <span className="text-[12px] font-bold tracking-[0.3em] uppercase" style={{ color: '#FA812F' }}>Welcome back</span>
                            <h1 className="text-[38px] font-bold leading-tight text-white font-serif">Sign in to your<br />account</h1>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-widest uppercase ml-1 text-white/60">Email address</label>
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="you@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-[58px] rounded-[18px] px-5 text-[15px] outline-none transition-all duration-300 text-white bg-white/5 border border-white/10 focus:border-[#FA812F]"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-widest uppercase ml-1 text-white/60">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-[58px] rounded-[18px] px-5 text-[15px] outline-none transition-all duration-300 text-white bg-white/5 border border-white/10 focus:border-[#FA812F]"
                                />
                            </div>
                            <div className="flex justify-end -mt-2 mr-1">
                                <span className="text-[12px] font-semibold cursor-pointer hover:underline text-[#FA812F]">Forgot password?</span>
                            </div>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="w-full h-[60px] rounded-[20px] font-black text-[16px] tracking-[0.15em] transition-all duration-300 active:scale-[0.96] uppercase text-white"
                            style={{
                                background: 'linear-gradient(135deg, #FA812F 0%, #f5a461 100%)',
                                boxShadow: '0 12px 35px rgba(250,129,47,0.45)',
                            }}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}