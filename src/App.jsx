import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import HomePage from './pages/HomePage'
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
