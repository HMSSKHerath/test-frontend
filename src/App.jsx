import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage'
import TestPage from './pages/test'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-screen bg-accent'> 
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
   


