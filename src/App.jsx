import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-screen bg-red-600'> 
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
   


