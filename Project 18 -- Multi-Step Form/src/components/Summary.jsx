import React from 'react'
import { useForm } from '../contexts/FormContext'
import {Link} from 'react-router-dom'

function Summary() {
  const {data} = useForm();
  const storage = () => {
    localStorage.setItem("Data", JSON.stringify(data));
    const retrievedData = JSON.parse(localStorage.getItem("Data"));
  }

  return (
    <div className='flex flex-col items-center justify-center text-2xl space-y-8'>
      <div className='text-center mt-2 space-y-2'>
      <h1>Multi-Step Registration Form</h1>
      <p className='font-semibold'>Summary Page</p>
      </div>
      <div className='mt-4 border-2 border-black p-4 flex flex-col'>
        <p className='text-center font-semibold'>Complete Information</p>
        <div className='flex flex-col mt-4'>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Country: {data.country}</p>
          <p>City: {data.city}</p>
          <p>Notification: {typeof data.notification === 'boolean' ? (data.notification ? "Yes" : "No") : "Not set"}
          </p>
        </div>
      </div>
      <div className='mt-2'>
        <button className='bg-blue-500 border-2 border-black rounded-lg px-4 py-2' onClick={storage}>Confirm</button>
      </div>

      <Link to="/">
          <button className="text-2xl border-2 border-black rounded-lg px-4 py-2 bg-blue-500">
            Back To Home Page
          </button>
        </Link>
    </div>
  )
}

export default Summary