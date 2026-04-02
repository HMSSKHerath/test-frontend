export default function Header() {
    return (
        <header className="w-full h-[100px] px-[60px] sticky top-0 z-50 transition-all duration-300"
            style={{
                background: 'rgba(20, 20, 20, 0.8)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
            }}
        >
            <div className="h-full w-full flex items-center justify-between relative">
                
                {/* Left Side: Logo & Brand Name */}
                <div className="flex items-center gap-6 group cursor-pointer">
                    {/* White Logo Monogram */}
                    <div className="w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center text-white font-serif text-xl font-bold bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:border-[#D4AF37]/50">
                        GB
                    </div>

                    {/* Brand Text */}
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-[0.2em] text-[#FAF7F2] uppercase font-serif group-hover:text-[#D4AF37] transition-colors duration-500">
                            Gloss Beauty
                        </h1>
                        <p className="text-[8px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
                            Cosmetic Excellence
                        </p>
                    </div>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex items-center gap-[40px] text-[13px] uppercase tracking-[0.2em] font-medium text-white/70">
                    <a href="/" className="hover:text-[#D4AF37] hover:tracking-[0.3em] transition-all duration-300">Home</a>
                    <a href="/product" className="hover:text-[#D4AF37] hover:tracking-[0.3em] transition-all duration-300">Products</a>
                    <a href="/about" className="hover:text-[#D4AF37] hover:tracking-[0.3em] transition-all duration-300">About</a>
                    <a href="/contact" className="hover:text-[#D4AF37] hover:tracking-[0.3em] transition-all duration-300">Contact</a>
                </div>

                {/* Right Side: Subtle Accent (Optional) */}
                <div className="hidden md:block">
                    <div className="w-10 h-[1px] bg-[#D4AF37]/40"></div>
                </div>
            </div>
        </header>
    )
}