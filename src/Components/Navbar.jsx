import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex align-center justify-around'>
      <div className='flex gap-5'>
        <img src="/src/assets/Truck.png" alt="" />
        <h3 className='mt-10 text-[#6A5ACD] font-bold text-3xl'>LOGISTICA</h3>
      </div>
      <div className='mt-8 text-[#4B4B4B]'>
        <a href="" className='pr-10 hover:underline hover:text-[#6A5ACD]'>Home</a>
        <a href="" className='pr-10 hover:underline hover:text-[#6A5ACD]'>About</a>
        <a href="" className='pr-10 hover:underline hover:text-[#6A5ACD]'>Services &#9654;</a>
        <a href="" className='pr-10 hover:underline hover:text-[#6A5ACD]'>Packages</a>
        <a href="" className='pr-10 hover:underline hover:text-[#6A5ACD]'>News</a>
        <a href="" className='pr-10 hover:underline hover:text-[#6A5ACD]'>Cart[]</a>
      </div>
      <div className='mt-8'>
        <Link to="/signup">Get started</Link>
        <hr className='border-blue-500 border-2'/>
      </div>
    </div>

  )
}

export default Navbar
