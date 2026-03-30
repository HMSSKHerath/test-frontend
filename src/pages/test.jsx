export default function TestPage()
{

    let count = 10;

    return(
        <div className="w-full h-full text-2xl flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-pink-400  text-white flex items-center justify-center gap-[30px]">
                <button className="w-[100px] h-[100px] bg-red-600 rounded-lg" onClick={
                    ()=>{
                        console.log("Decreasing.....");
                        count--; 
                        console.log(count);                    
                    }
                }>-</button>

                <span className="text-8xl">{count}</span>

                <button className="w-[100px] h-[100px] bg-red-600 rounded-lg" onClick={
                    ()=>{
                        console.log("Increasing.....");
                        count++;
                        console.log(count);
                    }
                }>+</button>
            </div>
        </div>
    )
}