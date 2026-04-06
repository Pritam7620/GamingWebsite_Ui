import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-between ml-30 mr-30 mt-8 text-white'>
        <div className='font-bold text-3xl'><h2>LOGO</h2></div>
        <div className='flex gap-12 justify-center items-center'>
          <p>Home</p>
          <p>About Us</p>
          <p>Portfolio</p>
          <p>News</p>
          <p className='p-2 bg-amber-400 rounded-2xl font-bold '>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Header
