import React from 'react'

function Email() {
  return (
    <div>
      <div className='bg-gray-900 ml-40 mr-40 mt-16 rounded-2xl'>
      <div className='flex justify-between items-center text-white' >
      <div className='p-8'>
        <h2 className='font-bold'>Stay in Loop</h2>
        <p>Subcribe to receive latest news and update about Gaming. <br />we promise not to spam you!</p>
      </div>

      <div className='p-8 relative'>
        <input className='bg-amber-50' type="text" name="email"  /> 
        <div className='absolute'> 
          <button className=' p-3 rounded-2xl'>subcribe</button>
        </div>
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default Email
