import React from 'react'
import { Link } from 'react-router-dom'

function Preferences() {
  return (
    <div className='flex flex-col items-center justify-center space-y-16'>
      <div className='text-center text-2xl space-y-2 mt-5'>
      <h1>Multi-Step Registration Form</h1>
      <p>Step 3 of 3: <span className='font-medium'>Personel Information</span></p>
      </div>

      <div className='text-2xl mt-6 space-y-3'>
        <p>Receive Notifications?</p>
        <div className='flex space-x-6 justify-center items-center'>
        <label htmlFor="">No</label>
        <input type="radio"/>
        <label htmlFor="">Yes</label>
        <input type="radio"/>
        </div>
      </div>
      <div className='text-2xl space-x-4 mt-4'>
        <Link to='../address'>
        <button className='border-2 border-black bg-blue-500 px-4 py-2 rounded-lg mt-4'>Back</button>
        </Link>

        <Link to='/summary'>
        <button className='border-2 border-black bg-blue-500 px-4 py-2 rounded-lg mt-4'>Submit</button>
        </Link>
      </div>
    </div>
  )
}

export default Preferences