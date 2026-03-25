import './App.css'
import ProductCard from './components/productCard'

function App() {

  console.log("Product Card Is Displayed");

  return (
    <>
      <div className='h-175 w-175 border-[5px] flex flex-col justify-center items-center'>
        <div className='h-50 w-100 bg-blue-600 flex justify-center items-center relative'>
          <h1>Your Time Has Over.</h1>
          <button className='h-12.5 w-12.5 bg-red-700 text-[30px] absolute top-0 right-0'>X</button>
          <button className='bg-green-600 text-white h-12.5 w-25 fixed bottom-2.5 right-2.5'>Whatsapp</button>
        </div>
      </div>
    </>
  )
}

export default App
   



