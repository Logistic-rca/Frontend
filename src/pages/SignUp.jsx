import React from 'react'
import Input from '../Components/Input'

const SignUp = () => {
  return (
    <div className='flex items-center justify-center gap-15 mt-30'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-4xl'>Register to <span className='text-blue-600'>inziraLink</span></h1>
        <img src="/src/assets/Blue-truck-with-white-trailer-realistic-3D-model-removebg-preview.png" alt="" srcset="" />
        <p>Reliable logistic for a growing Rwanda</p>
      </div>
      <div className='bg-white shadow-md p-10 rounded-lg flex flex-col gap-5'>
        <h1 className='font-semibold text-center '>Register as a transporter</h1>
        <form action="" className='flex flex-col gap-2 max-h-100 max-w-100'>
          <Input name='Name'/>
          <Input name='Type of vehicle'/>
          <Input name='Plate number'/>
          <Input name='Email'/>
          <Input name='Telephone'/>
          <Input name='Password'/>
          <button type='submit' className='bg-blue-600 text-white py-2 hover:border-2 hover:border-blue-600 hover:text-blue-600 hover:bg-white'>Register</button>
          <p>Already have an account? <a href="" className='text-blue-500'>Login</a></p>
        </form>

      </div>
    </div>
  )
}

export default SignUp
