import { useState } from 'react'
import Quiz from './Pages/Quiz'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Instructions from './Pages/Instructions'

function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/instructions' element={<Instructions />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
