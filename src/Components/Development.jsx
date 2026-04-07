import React from 'react'
import blackford from "../Components/BlackFord.jpg"
import ford from "../Components/ford.jpg"
import phone from "../Components/phones.webp"
import pc from "../Components/pc.webp"
import ps4 from "../Components/ps4.webp"
import arvr  from  "../Components/arvr.webp"
import arvrdesign from "../Components/arvrdesign.webp"
import model from "../Components/3dmodeling.webp" 

function Development() {
  return (
    <div className='mt-16 relative w-full'>
      <div className='w-100vh'>
        <img className='w-full h-[700px] object-cover blur-[3px] opacity-95' src={ford} alt="" />

<div className='absolute inset-0 flex flex-col text-white px-4'>

   <p className='text-center font-bold text-3xl font-serif mt-12'>Play fearless, think sharp, conquer every challenge. <br />
This is not just a game, it’s your ultimate battleground where legends rise.</p>

<p className='text-center mt-4'>We rise from darkness, unseen and unstoppable, striking fear into every opponent. <br />
In this ruthless battlefield, mercy is weakness and power is everything—only the fearless <br />survive, and legends are carved in shadows.</p>

<div className='flex flex-wrap'>
<div  className='flex flex-col  gap-4 justify-center mt-16 ml-20'>
  <img  className='rounded-4xl  w-16' src={phone} alt="" />
  <p>Mobile Game Development</p>
 <i className="fa-solid fa-arrow-right-long text-yellow-600"></i>

 </div>
 <div  className='flex flex-col  gap-4 justify-center mt-16 ml-50'>
  <img  className='rounded-4xl  w-16' src={pc} alt="" />
  <p>PC Game Development</p>
 <i className="fa-solid fa-arrow-right-long text-yellow-600"></i>
 
 </div>
 <div  className='flex flex-col  gap-4 justify-center mt-16 ml-50'>
  <img  className='rounded-4xl  w-16' src={ps4} alt="" />
  <p>PS4 Game Development</p>
 <i className="fa-solid fa-arrow-right-long text-yellow-600"></i>
 
 </div>
 <div  className='flex flex-col  gap-4 justify-center mt-16 ml-50'>
  <img  className='rounded-4xl  w-16' src={arvr} alt="" />
  <p>AR/VR Solutions</p>
 <i className="fa-solid fa-arrow-right-long text-yellow-600"></i>
 
 </div>
 <div className='flex ml-70'>
 <div  className='flex flex-col  gap-4 justify-center mt-16 ml-50'>
  <img  className='rounded-4xl  w-16' src={arvrdesign} alt="" />
  <p>AR/VR Design</p>
 <i className="fa-solid fa-arrow-right-long text-yellow-600"></i>
 
 </div>
 <div  className='flex flex-col  gap-4 justify-center mt-16 ml-50'>
  <img  className='rounded-4xl  w-16' src={model} alt="" />
  <p>3D Modelings</p>
 <i className="fa-solid fa-arrow-right-long text-yellow-600"></i>
 
 </div>
 </div>
</div>


</div>

    
     
      </div>
      
    </div>
  )
}

export default Development
