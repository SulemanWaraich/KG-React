import React from 'react'
import logo from '../../public/logo.png'

function Navbar() {
  return (
    <header className='flex justify-around items-center bg-slate-200 h-32'>
      <div className='p-2'>
        <img src={logo} alt="img" className='h-auto w-24'/>
      </div>
      <nav className='flex list-none w-full max-w-xs justify-between'>
        <li>Home</li>
        <li>How It Works</li>
        <li>Contact</li>
        <li>About</li>
      </nav>
      <div className='flex w-full max-w-32 justify-between space-x-4'>
        <button className='text-blue-500'>Login</button>
        <button className='bg-blue-700 px-4 py-2 rounded-md text-white text-lg'>Register</button>
      </div>
    </header>  )
}

export default Navbar