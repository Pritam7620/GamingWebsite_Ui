import React from 'react'
import Game1 from "../Components/Game1.webp"
import robotwar from "../Components/robotwar.jpg"
import girlswar from "../Components/Girls-War-Z.jpg"
import alonewarrior from "../Components/AloneWarrior.avif"
function Treading() {
  return (
    <div>
      <div>
<div className='text-white text-2xl flex justify-between font-bold ml-30 mr-30 mt-8 items-center'>
  <p>CURRENT TREADING GAMES</p>
<p className='p-2 bg-gray-500 rounded-2xl '>SEE ALL</p>
</div>

        <div className='flex items-center justify-center mt-12 gap-36 text-white'> 
          <div>
            <img className='w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-gray-300' src={Game1} alt="Game1" />
            <p className='mt-4 text-center'>🔥 40 Followers</p>
          </div>
          <div>
             <img className='w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-gray-300' src={robotwar} alt="robotwar" />
             <p className='mt-4 text-center'>🔥 40 Followers</p>
          </div>
       
       <div> 
        <img className='w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-gray-300' src={girlswar} alt="girlswargame" />
        <p className='mt-4 text-center'>🔥 40 Followers</p>
       </div>
       
       <div>
        <img className='w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-gray-300' src={alonewarrior} alt="alonewariour" />
       <p className='mt-4 text-center'>🔥 40 Followers</p>
       </div>
        
        </div>
      </div>
    </div>
  )
}

export default Treading
