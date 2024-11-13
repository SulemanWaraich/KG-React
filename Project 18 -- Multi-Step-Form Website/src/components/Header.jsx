import React from 'react';
import image1 from '../../public/image1.png';

function Header() {
  return (
    <header className='flex justify-between items-center bg-gray-500 w-full'>
      <div className='p-2 pl-4'>
        <img src={image1} className='w-24'/>
      </div>

    <div className='text-4xl font-medium text-center ml-24'>
      <h1>Header</h1>
    </div>

      <nav className='flex list-none justify-between w-full max-w-60 p-2 pr-4 font-semibold'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Visit</li>
      </nav>
    </header>
  )
}

export default Header