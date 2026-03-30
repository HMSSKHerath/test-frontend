import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage'
import TestPage from './pages/test'
import LoginPage from './pages/loginPage'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-screen'> 
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/register' element={<h1>Register Page</h1>}></Route>
          <Route path='/login' element={<LoginPage />} ></Route>
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
   


