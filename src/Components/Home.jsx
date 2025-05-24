import React from 'react'

const Home = () => {
  return (
    <div className='mt-30 flex align-center justify-around'>
      <div>
        <h1 className='font-bold text-5xl w-80 leading-normal'>Elevating the world of <span className='text-[#6A5ACD]'>Logistics.</span></h1>
        <p className='pt-3.5 text-[#4B4B4B]'>We set the standard for transporting goods from A to B</p>
        <div className='flex mt-15 gap-7'>
            <div>
        <a href="" className='text-[#6A5ACD] '>Get started</a>
        <hr className='border-blue-500 border-2 w-23'/>
        </div>
        <div className='flex gap-5 ' >
       <img src="/src/assets/phone-call.png" className='h-13  text-white '  alt="" srcset="" />
       <h2 className='pt-5 font-semibold'>Call us: <span className='text-[#6A5ACD]'>+0788502760285</span></h2>
       </div>
        </div>
      </div>
      <div>
        <img src="\src\assets\truck-removebg-preview.png" alt="" />
      </div>
    </div>
  )
}

export default Home
