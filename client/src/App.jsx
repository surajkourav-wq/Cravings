import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Navbar' element={<Navbar />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
