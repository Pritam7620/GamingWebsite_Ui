import React from 'react'
import HomeProject from "../Components/HomeProject.png" 
import palyhouse from "../Components/PlayHouse.png"
import  playgames from "../Components/PlayGames.png"
import Playlimit from "../Components/PlayLimit.png"
import pchardware from "../Components/PcHardware.png"
import gameroom from "../Components/GamingRoom.png"

function Recent() {
  return (
    <div>
      <div className='font-bold text-3xl text-white  text-center mt-16  font-sans'>
        <p className='mb-8'>Our Recent Projects</p>
        <p className='text-white font-normal text-1xl'>Transforming innovative ideas into powerful, scalable digital experiences that <br /> inspire users, solve real problems, and create lasting impact.
</p>
      </div>
      <div className='flex flex-wrap ml-50 gap-21 mt-10  justify-center'>
 <img className='rounded-3xl' src={gameroom} alt="gameroom" />
 <img  className='rounded-3xl' src={playgames} alt="" />
 <img  className='rounded-3xl' src={pchardware} alt="" />
 <img  className='rounded-3xl' src={Playlimit} alt="" />
 <img  className='rounded-3xl' src={palyhouse} alt="" />
 <img  className='rounded-3xl' src={HomeProject} alt="" />

      </div>
      <div className='flex justify-center mt-16'>
        <button className='text-white p-4 bg-gray-600 rounded-3xl font-bold'>SEE ALL</button>
      </div>
      <div className='mt-16 ml-50 text-white'>
        <h2 className='font-bold'>🔥 Built to Impress</h2>
        <p className='mt-8'>Where creativity meets code, turning bold ideas into immersive digital  <br />experiences that stand out, perform flawlessly, and leave a lasting impression. 🎮✨</p>
      </div>
    </div>
  )
}

export default Recent
