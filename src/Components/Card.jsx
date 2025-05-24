import React from 'react'

const Card = ({icon, title, image, context}) => {
  return (
    <div className='flex flex-col align-center justify-center mt-10 w-[345px]'>
      <div>
        <img src={image} alt="" className='rounded-3xl w-100' />
      </div>
      <div className='pt-6 font-semibold text-2xl'>
        <h1>{title}</h1>
      </div>
      <div className='pt-3'>
        <p className='text-[#4B4B4B]'>{context}</p>
      </div>
      <div className='pt-3'>
        <a href="" className='text-[#6A5ACD] font-medium'>Learn more</a>
      </div>
    </div>
  )
}

export default Card
