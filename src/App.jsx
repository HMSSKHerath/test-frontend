import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-screen bg-red-600'> 
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/about' element={<h1>About Page</h1>} />
          <Route path='/contact' element={<h1>Contact Page</h1>} />
          <Route path='/login' element={<h1>Login Page</h1>} />
          <Route path='/register' element={<h1>Register Page</h1>} />
          <Route path='/admin' element={<h1>Admin Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
   


