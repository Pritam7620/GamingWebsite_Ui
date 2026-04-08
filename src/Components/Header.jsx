import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <div className='flex justify-between ml-30 mr-30 mt-8 text-white'>
        <div className='font-bold text-3xl'><h2>LOGO</h2></div>
        <div className='flex gap-12 justify-center items-center'>
         <Link to="/">Home</Link> 
         <Link to="/AboutUs">About Us</Link>
         <Link to="/Portfolio">Portfolio</Link>
          <Link to="/News">News</Link> 
     <Link to="/Contact"> <p className='p-2 bg-amber-400 rounded-2xl font-bold '>Contact Us</p></Link>
         
        </div>
      </div>
    </div>
  )
}

export default Header
