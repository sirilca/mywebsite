import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Aboutme from './components/Aboutme';
import Home from './components/Home';
import Contactme from './components/Contactme';
function App() {


  return (


    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<Aboutme />} ></Route>
        <Route path='/contact' element={<Contactme/> } />
      </Routes>
    </div>
  )
}

export default App