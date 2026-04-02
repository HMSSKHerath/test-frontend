import { useState } from 'react'
import axios from 'axios'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        try
        {
            // Logic remains exactly as you provided
            const response = await axios.post(import.meta.env.VITE_API_URL + '/api/users/login', 
            {email, password});
            const user = response.data.user;
            if (user.role == 'admin')
            {
                window.location.href = '/admin'
            }
            else
            {
                window.location.href = '/home'
            }

        }
        catch(err)
        {
                console.log("Login Failed !",err);
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
                {/* Background Decorative Element - Subtle Glow */}
                <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37] opacity-[0.05] blur-[100px]" />

                {/* Top Section: Logo & Brand */}
                <div className="relative z-10">
                    <div className="flex items-center gap-5 group cursor-default">
        
                        {/* Logo Container with Design Effects */}
                        <div className="relative">
                            {/* Background Glow behind the logo */}
                            <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            {/* The Logo Frame */}
                            <div className="relative w-16 h-16 p-1 rounded-full border border-[#D4AF37]/30 bg-black/20 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/60 transition-all duration-500">
                                <img 
                                    src="./logo3.png" 
                                    alt="Gloss Beauty Logo" 
                                    className="w-full h-full object-contain p-1 transform group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                        </div>

                        {/* Brand Name Text */}
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold tracking-[0.2em] text-[#FAF7F2] uppercase font-serif group-hover:text-[#D4AF37] transition-colors duration-500">
                                Gloss Beauty
                            </h1>
                            <div className="flex items-center gap-2">
                                {/* Small gold line next to sub-text */}
                                <div className="w-4 h-[1px] bg-[#D4AF37]/50"></div>
                                <p className="text-[9px] tracking-[0.4em] text-[#D4AF37] uppercase font-medium">
                                    Cosmetic & Skincare Excellence
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

                    {/* Improved Stats with Glassmorphism Cards */}
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

                {/* Bottom Section: Footer / Socials Placeholder */}
                <div className="relative z-10 flex justify-between items-center">
                    <p className="text-[10px] tracking-widest text-white/30 uppercase">
                        © 2026 Gloss Beauty International
                    </p>
                    <div className="flex gap-4">
                        {/* Simple visual dividers for a pro look */}
                        <div className="w-8 h-[1px] bg-white/20" />
                        <div className="w-8 h-[1px] bg-white/20" />
                    </div>
                </div>
            </div>

            {/* Right half — login card */}
            <div className="w-full md:w-[50%] h-full flex items-center justify-center p-6">
                <div
                    className="relative w-full max-w-[500px] rounded-[40px] overflow-hidden flex flex-col gap-0 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                    style={{
                        // Darker overlay for high contrast against the bright background
                        background: 'rgba(15, 15, 15, 0.55)', 
                        backdropFilter: 'blur(35px)',
                        WebkitBackdropFilter: 'blur(35px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    {/* Accent bar top */}
                    <div
                        className="w-full h-[6px]"
                        style={{ background: 'linear-gradient(90deg, #FA812F, #f5a461)' }}
                    />

                    <div className="flex flex-col gap-10 px-10 py-14 md:px-14">
                        {/* Header */}
                        <div className="flex flex-col gap-2">
                            <span
                                className="text-[12px] font-bold tracking-[0.3em] uppercase"
                                style={{ color: '#FA812F' }}
                            >
                                Welcome back
                            </span>
                            <h1
                                className="text-[38px] font-bold leading-tight"
                                style={{ color: '#FFFFFF', fontFamily: "'Georgia', serif" }}
                            >
                                Sign in to your<br />account
                            </h1>
                        </div>

                        {/* Fields */}
                        <div className="flex flex-col gap-6">

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[11px] font-bold tracking-widest uppercase ml-1"
                                    style={{ color: 'rgba(255,255,255,0.6)' }}
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="you@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-[58px] rounded-[18px] px-5 text-[15px] outline-none transition-all duration-300 shadow-inner"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.07)',
                                        border: '1.5px solid rgba(255,255,255,0.1)',
                                        color: '#FFFFFF',
                                    }}
                                    onFocus={e => {
                                        e.target.style.border = '1.5px solid #FA812F'
                                        e.target.style.background = 'rgba(255,255,255,0.12)'
                                        e.target.style.boxShadow = '0 0 20px rgba(250,129,47,0.25)'
                                    }}
                                    onBlur={e => {
                                        e.target.style.border = '1.5px solid rgba(255,255,255,0.1)'
                                        e.target.style.background = 'rgba(255,255,255,0.07)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[11px] font-bold tracking-widest uppercase ml-1"
                                    style={{ color: 'rgba(255,255,255,0.6)' }}
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-[58px] rounded-[18px] px-5 text-[15px] outline-none transition-all duration-300 shadow-inner"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.07)',
                                        border: '1.5px solid rgba(255,255,255,0.1)',
                                        color: '#FFFFFF',
                                    }}
                                    onFocus={e => {
                                        e.target.style.border = '1.5px solid #FA812F'
                                        e.target.style.background = 'rgba(255,255,255,0.12)'
                                        e.target.style.boxShadow = '0 0 20px rgba(250,129,47,0.25)'
                                    }}
                                    onBlur={e => {
                                        e.target.style.border = '1.5px solid rgba(255,255,255,0.1)'
                                        e.target.style.background = 'rgba(255,255,255,0.07)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {/* Forgot password */}
                            <div className="flex justify-end -mt-2 mr-1">
                                <span
                                    className="text-[12px] font-semibold cursor-pointer hover:underline transition-all"
                                    style={{ color: '#FA812F' }}
                                >
                                    Forgot password?
                                </span>
                            </div>
                        </div>

                        {/* Login Button */}
                        <div className="pt-2">
                            <button
                                onClick={handleLogin}
                                className="w-full h-[60px] rounded-[20px] font-black text-[16px] tracking-[0.15em] transition-all duration-300 active:scale-[0.96] uppercase"
                                style={{
                                    background: 'linear-gradient(135deg, #FA812F 0%, #f5a461 100%)',
                                    color: '#FFFFFF',
                                    boxShadow: '0 12px 35px rgba(250,129,47,0.45)',
                                }}
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Sign up link */}
                        <p className="text-center text-[14px] mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Don't have an account?{' '}
                            <span
                                className="cursor-pointer font-bold hover:text-white transition-colors"
                                style={{ color: '#FA812F' }}
                            >
                                Create one
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}