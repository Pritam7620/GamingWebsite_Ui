import React from 'react'

function Email() {
  return (
    <div>
      <div className='bg-gray-900 ml-40 mr-40 mt-16 rounded-2xl'>
      <div className='flex justify-between items-center text-white' >
      <div className='p-8'>
        <h2 className='font-bold text-3xl'>Stay in Loop</h2>
        <p className='text-2xl'>Subcribe to receive latest news and update about Gaming. <br />we promise not to spam you!</p>
      </div>

      <div className='p-8'>
        <input className='bg-amber-50 text-black p-3 rounded-2xl mr-5'  type="text" name="email" placeholder='Enter Email Address...'  /> 
          <button className=' p-3 rounded-2xl text-white font-bold bg-amber-300'>subcribe</button>
       
      </div>
      </div>
      </div>
    </div>
  )
}

export default Email
