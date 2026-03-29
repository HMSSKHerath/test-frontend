export default function Header()
{
    return (
        <header className="w-full h-[100px] bg-accent text-white px-[40px]">
            <div className="h-full w-full flex relative">
                <img src="/logo2.png" alt="Logo" className="h-full w-[115px] object-cover absolute left-0" />
            

                <div className="h-full w-full flex items-center justify-center gap-[20px] text-lg">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>


            
        </header>
    )
} 