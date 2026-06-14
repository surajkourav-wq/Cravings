import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
