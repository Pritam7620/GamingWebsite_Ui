import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Herosection from './Components/Herosection'
import Treading from './Components/Treading'
import Development from './Components/Development'
import Recent from './Components/Recent'
import Email from './Components/Email'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
<Route path='/' element={<><Home/><Header/><Herosection/><Treading/><Development/><Recent/><Email/></>}></Route>
<Route path='/Herosection' element={<Herosection/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
