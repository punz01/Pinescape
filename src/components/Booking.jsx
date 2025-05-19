import React from 'react';

const Booking = () => {
  return (
    <section className='relative z-20 max-w-[1140px] mx-auto w-full p-4'>
      <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end'>
        
        {/* Destination Dropdown */}
        <div className='flex flex-col'>
          <label htmlFor='destination' className='mb-1 font-medium'>Destination</label>
          <select
            id='destination'
            className='border rounded-md p-2 shadow-sm'
            defaultValue=""
          >
            <option value="" disabled>Select a destination</option>
            <option>Burnham Park</option>
            <option>La Trinidad Strawberry Farm</option>
            <option>Botanical Garden</option>
            <option>The Mansion & Wright Park</option>
            <option>Mines View Park</option>
            <option>Camp John Hay</option>
            <option>Baguio Cathedral</option>
          </select>
        </div>

        {/* Check-In */}
        <div className='flex flex-col'>
          <label htmlFor='checkin' className='mb-1 font-medium'>Check-In</label>
          <input
            id='checkin'
            className='border rounded-md p-2 shadow-sm'
            type='date'
          />
        </div>

        {/* Check-Out */}
        <div className='flex flex-col'>
          <label htmlFor='checkout' className='mb-1 font-medium'>Check-Out</label>
          <input
            id='checkout'
            className='border rounded-md p-2 shadow-sm'
            type='date'
          />
        </div>

        {/* Submit Button */}
        <div className='flex flex-col'>
          <label className='mb-1 font-medium invisible'>Search</label>
          <button className='bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200 w-full'>
            Rates & Availabilities
          </button>
        </div>
      </form>
    </section>
  );
};

export default Booking;
