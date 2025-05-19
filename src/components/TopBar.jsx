import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import { LuTreePine } from "react-icons/lu";

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <LuTreePine size={30} className='text-blue-500 mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'><span className='font-bold text-blue-400'>PINE</span>SCAPE</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-blue-500' aria-label="Business hours icon" />
                <p className='text-sm text-gray-700'>9AM - 5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-blue-500' aria-label="Phone icon" />
                <p className='text-sm text-gray-700'>1-888-817-1234</p>
            </div>
            <button className='bg-blue-400 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition'>
                Travel With Us
            </button>

        </div>
    </div>
  )
}

export default TopBar