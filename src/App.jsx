import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import NavBar from './Components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
     <div className='container'>
     <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
     </Routes>
     </div>
     </BrowserRouter>
     
     
    </>
  )
}

export default App
