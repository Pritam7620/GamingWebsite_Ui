import React from 'react'
import futuristic from "../Components/futuristic.png"
import gimg from "../Components/girlimg.png"

function AboutUs() {


  const team = [
    {
      name: "Pritam",
      role: "CEO",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John1",
    },
    {
      name: "Naman",
      role: "CTO",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emma",
    },
    {
      name: "Tejas",
      role: "Designer",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
    },
    {
      name: "Sahil",
      role: "Developer",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Michael",
    },
  ];



  return (
    <div>
      <div className='flex justify-between gap-40 ml-50 mr-10 mt-12 text-white'>
        <div  className='flex flex-col gap-10'>
          <h2 className='font-bold text-4xl font-serif'>Neon lights whisper stories untold, <br />
Where humans and machines  share <br /> the cold.</h2>

<p className='font-serif font-medium ' >In a rain-soaked cyberpunk street, glowing neon lights paint stories of a futuristic world. <br />
Humans and machines stand side by side, blurring the line between reality and technology. <br />

Amidst the chaos, a silent observer watches—where every shadow hides a deeper truth.</p>

<button className='bg-amber-500 w-32 p-2 rounded-2xl '>get in touch<i class="fa-solid fa-arrow-right"></i></button>
        </div>
<div>
  <img className='w-5/6 rounded-2xl' src={futuristic} alt="futuristic image" />
</div>

      </div>

{/* work work with us */}
<div className='ml-30 mr-10 mt-12 text-white'>
  <h2 className='text-white text-2xl font-bold mt-12'>why work with us</h2>
<div className='flex justify-between mt-10 '>
<div className='bg-black h-90 w-90 rounded-2xl '>
<button className='p-2 bg-violet-500 rounded-2xl mt-10 ml-8 font-serif'>Career Growth</button>
<h2 className='mt-5 ml-8 font-serif'>Grow With Us</h2>
<p className='mt-5 ml-8 font-semibold mr-6'>We believe in continuous learning and development. <br /> Our team gets access to real-world projects,mentorship,  <br />  and opportunities to upgrade skills regularly. </p>
</div>
<div className='bg-black h-90 w-90 rounded-2xl'>
<button className='p-2 bg-amber-900 rounded-2xl mt-10 ml-8 font-serif'>Innovation</button>
<h2 className='mt-5 ml-8 font-serif'>Make a Differences</h2>
<p className='mt-5 ml-8 font-semibold mr-6'>Be part of a team that focuses on innovation and real impact. We work on modern technologies and deliver solutions that matter, helping you grow while contributing to something bigger.</p>

</div>
<div className='bg-black h-90 w-90 rounded-2xl'>

  <button className='p-2 bg-green-600 rounded-2xl mt-10 ml-8 font-serif'>Team Culture</button>
<h2 className='mt-5 ml-8 font-serif'>Work With Great People</h2>
<p className='mt-5 ml-8 font-semibold mr-6'>Our workplace encourages collaboration, <br /> creativity, and respect. We value every idea and ensure a positive environment where <br /> everyone feels heard and motivated to perform their best.</p>
</div>
</div>
</div>


{/*img inside text  */}

<div className='bg-black w-full h-[500px] mt-10 text-white flex justify-between'>
<div className='ml-40 flex flex-col justify-end'>
  <img  src={gimg} alt="gaming girl img" />
</div>
<div className='mr-40 ml-28 mt-34'>
<h2 className='mb-10 font-bold font-serif text-2xl'>Our Story</h2>

<h3 className='mt-8 font-serif mb-12'> We build creative solutions that shape the future of digital experiences.</h3>
<p>Our team is dedicated to delivering high-quality, user-focused solutions that make a real <br /> difference. We combine creativity with technology to design experiences that are both <br />functional and visually engaging. With a passion for innovation, we continuously <br />explore new ideas to help businesses grow and succeed in a competitive digital world.</p>
</div>
</div>



{/*our team */}
 <div className="  py-16 px-6">
      {/* Title */}
      <h2 className="text-white text-3xl font-semibold mb-10">
        Our Team
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#1a0f0a] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Avatar */}
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 mb-4"
            />

            {/* Name */}
            <h3 className="text-white text-lg font-semibold">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-gray-400 text-sm mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>


    <div className=' text-white  py-10 px-6'>

      <div className='ml-38 mt-8' >
        <h2 className='font-bold text-2xl font-serif'>Meet Our Creative Team</h2>
        <p className='mt-8 font-bold'>Different minds, one shared vision, <br />
Creating ideas that make a lasting impression.</p>
      </div>
    </div>

    </div>
  )
}

export default AboutUs
