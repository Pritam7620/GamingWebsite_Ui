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
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Portfolio from './Components/PortFolios/Portfolio'
import News from './Components/News/News'
import Contact from './Components/ContactUs/Contact'


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
<Route path='/' element={<><Home/><Header/><Herosection/><Treading/><Development/><Recent/><Email/><Footer/></>}></Route>
<Route path='/Herosection' element={<Herosection/>}></Route>
<Route path='/AboutUs' element={ <><Header/><AboutUs/><Email/><Footer/></> }></Route>
<Route path='/Portfolio' element={ <><Portfolio/><Header/></>}></Route>
<Route path='/News' element={<><News/><Header/></>}></Route>
<Route path='/Contact' element={<><Contact/><Header/></>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
