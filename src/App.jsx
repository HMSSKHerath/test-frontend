import './App.css'
import ProductCard from './components/productCard'

function App() {

  console.log("Product Card Is Displayed");

  return (
    <>
      <div className='h-[700px] w-[700px] border-[5px] flex flex-col justify-center items-center'>
        <div className='h-[200px] w-[400px] bg-blue-600 flex justify-center items-center relative'>
          <h1>Your Time Has Over.</h1>
          <button className='h-[50px] w-[50px] bg-red-700 text-[30px] absolute top-0 right-0'>X</button>
          <button className='bg-green-600 text-white h-[50px] w-[100px] fixed bottom-[10px] right-[10px]'>Whatsapp</button>
        </div>
      </div>
    </>
  )
}

export default App
   



