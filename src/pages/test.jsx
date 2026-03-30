import { useState } from "react";

export default function TestPage()
{
    const [count,setCount] = useState(50);
    const [status,setStatus] = useState("Online");

    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-[#fff1c4] flex flex-col items-center justify-center gap-[30px]">
                <div className="flex items-center justify-center gap-[40px] text-[50px] text-white">
                    <button className="w-[100px] h-[100px] bg-accent rounded-lg" onClick={
                        ()=>{
                            console.log("Decreasing.....");
                            setCount(count-1 );
                        }
                    }>-</button>

                    <span className="text-8xl text-black">{count}</span>

                    <button className="w-[100px] h-[100px] bg-accent rounded-lg" onClick={
                        ()=>{
                            console.log("Increasing.....");
                            setCount(count+1);
                        }
                    }>+</button>
                </div>

                <div className="flex flex-col items-center justify-center gap-[30px] text-white">
                    <span className="text-6xl text-black">{status}</span>

                    <div className="flex flex-row gap-[20px] text-lg">
                        <button className="w-[120px] h-[50px] bg-accent rounded-lg" onClick={()=>{setStatus('Online');}
                        }>Online</button>
                        <button className="w-[120px] h-[50px] bg-accent rounded-lg" onClick={()=>{setStatus('Offline');}
                        }>Offline</button>
                        <button className="w-[120px] h-[50px] bg-accent rounded-lg" onClick={()=>{setStatus('DeActivated');}
                        }>DeActivated</button>
                    </div>

                </div>
            </div> 
        </div>
    )
}