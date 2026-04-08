import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-gray-900 text-white mt-32 border-b-2'>
      <div className='flex justify-between  ml-30 mr-30 mb-4 '>
        <div className='mt-12 flex flex-col gap-8'>
          <h2>LOGO</h2>
          <p>Play in shadows, strike without mercy. <br />
Fear the silence before your defeat.</p>
<p>@Logo</p>
        </div>
        <div className='mt-12 flex flex-col gap-5 '>
          <h2>About Us</h2>
<ul className='flex flex-col gap-2'>
<li>Zeux</li>
<li>PortFolio</li>
<li>Careers</li>
<li>Contact Us</li>
</ul>
        </div>
        <div className='mt-12 flex flex-col gap-8 mb-4'>
          <h2>Contact Us</h2>
         <p>Turning ideas into powerful, innovative, <br /> and impactful digital experiences.</p>
         <p>+7620552808</p>
        </div>
        <div className='flex gap-4 justify-center items-end mb-4'>
          <i className="fa-brands fa-facebook font-bold size-4 bg-gray-900 rounded-4xl"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
       
      </div>
     
    </div>
     <div className='bg-gray-900 flex justify-center items-center text-white h-12'>
<p>Copyright ® 2026 Prodesigner All rights received</p>
      </div>
    </>
  )
}

export default Footer
