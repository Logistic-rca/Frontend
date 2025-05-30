import React from 'react'

const Input = ({name}) => {
  return (
    <div>
      <input type="text" className='px-4 py-2 rounded-lg border-2 border-blue-200 focus:shadow-xl focus:border-blue-700 focus:outline-0' placeholder={name} />
    </div>
  )
}

export default Input
