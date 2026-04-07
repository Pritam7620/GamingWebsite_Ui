import React from 'react'
import Game1 from "../Components/Game1.webp"
import robotwar from "../Components/robotwar.jpg"
import girlswar from "../Components/Girls-War-Z.jpg"
import alonewarrior from "../Components/AloneWarrior.avif"
import GamingBanner from "../Components/GamingBanner.png"

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
        <div className='text-2xl text-center text-white font-serif mt-16'>
 <p>Gaming is more than play—it’s passion, skill, and strategy combined. We rise after every <br /> defeat and celebrate every victory. In this digital battlefield, legends are made <br />and limits are broken. Together we compete, grow, and dominate. Controllers ready,<br /> focus sharp—this is our arena, our journey, our unstoppable gaming legacy. 🎮🔥</p>

        </div>
        <div className='text-left font-serif ml-50 mt-12 text-white'> 
 <h2 className='font-bold text-3xl'>🔥 Pixel Warriors United 🔥</h2>
<p className='text-2xl'>We don’t just play — we dominate every battlefield. <br />
Every loss is a lesson, every win a legacy. <br />
Born to game, built to conquer. 🎮🔥</p>

        </div>
        <div className='flex justify-center items-center mt-10 ml-6'>
          <img className='w-6xl' src={GamingBanner} alt="Gaming Banner" />
        </div>
      </div>
    </div>
  )
}

export default Treading
