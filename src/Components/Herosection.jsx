import React from 'react'
import Gaming from '../assets/Gaming.png'

function Herosection() {
  return (
    <div>
      <div className='flex justify-between text-white ml-50 mr-30 mt-12'>
        <div className='mt-8'>
        <h4 className='text-amber-500 font-bold text-2xl'>Proved By Prodesigner</h4>
        <p className='font-bold text-4xl mt-6 mb-12'>Work that we <br />produce for our <br />Clients</p>
        <p className='font-serif'>Join the ultimate gaming community where passion meets skill, players become <br />legends, teamwork drives victory, and every battle pushes you closer to greatness <br />and glory</p>
        <button className='p-4 bg-amber-700 rounded-2xl font-bold mt-16'>Get More Details</button>
        </div>
        <div>
        <img src={Gaming} alt="Gaminglogo" />
      </div>
      
      </div>
      
    </div>
  )
}

export default Herosection
