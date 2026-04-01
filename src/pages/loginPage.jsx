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

            {/* Left half */}
            <div className='hidden md:block w-[50%] h-full' />

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