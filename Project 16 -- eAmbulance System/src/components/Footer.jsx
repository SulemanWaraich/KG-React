import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-700 flex justify-center items-center flex-col h-28'>
      <p className='text-white mb-2'><span> &copy; 2024 LifeLink.</span> All rights reserved</p>
      <ul className='flex space-x-3 text-slate-300'>
      <li>Facebook</li>
      <li>Twitter</li>
      <li>LinkedIn</li>
      </ul>
    </footer>  )
}

export default Footer