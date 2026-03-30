import { useState} from 'react'
import axios from 'axios'

export default function LoginPage()
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin()
    {
        const response = await axios.post( import.meta.env.VITE_API_URL +'/api/users/login',{
            email: email,
            password: password
        })

        console.log(response.data);
    }   

    return(
        <div className="w-full h-full bg-[url('/bg2.jpg')] bg-cover bg-center flex">
            <div className='w-[50%] h-full'></div>

            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[600px] h-[600px] backdrop-blur-lg shadow-xl rounded-[30px] flex flex-col gap-[20px] justify-center items-center">
                    <input className="w-[400px] h-[40px] bg-white p-[10px]" onChange={
                        (e)=>
                        {
                            setEmail(e.target.value)
                            
                        }
                    }/>
                    <input className="w-[400px] h-[40px] bg-white p-[10px]" onChange={
                        (e)=>
                        {
                            setPassword(e.target.value)
                        }
                    }/>
                    <button className="w-[400px] h-[40px] bg-red-600 text-white p-[10px]" onClick={handleLogin}>Login</button>
                </div>
            </div>

        </div>
    )
}