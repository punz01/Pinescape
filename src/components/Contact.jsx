import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='max-w-[1140px] mx-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700 text-3xl font-semibold mb-2'>Send us a message</h2>
      <p className='text-center text-gray-600 mb-8'>We're standing by!</p>
      
      <div className='grid md:grid-cols-2 gap-6'>
        <img
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-md shadow-md'
          src="https://images.pexels.com/photos/12914725/pexels-photo-12914725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Contact us"
        />
        
        <form className='max-w-lg mx-auto'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='firstName' className='mb-1 font-medium text-gray-700'>First Name</label>
              <input
                id='firstName'
                name='firstName'
                type='text'
                placeholder='First Name'
                required
                className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='flex flex-col'>
              <label htmlFor='lastName' className='mb-1 font-medium text-gray-700'>Last Name</label>
              <input
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
                required
                className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='flex flex-col col-span-2'>
              <label htmlFor='email' className='mb-1 font-medium text-gray-700'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                required
                className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='flex flex-col col-span-2'>
              <label htmlFor='phone' className='mb-1 font-medium text-gray-700'>Phone No.</label>
              <input
                id='phone'
                name='phone'
                type='tel'
                placeholder='Phone No.'
                className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='flex flex-col col-span-2'>
              <label htmlFor='address' className='mb-1 font-medium text-gray-700'>Address</label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Address'
                className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='flex flex-col col-span-2'>
              <label htmlFor='message' className='mb-1 font-medium text-gray-700'>Concern/Message/Inquiry</label>
              <textarea
                id='message'
                name='message'
                rows='6'
                placeholder='Your message here...'
                required
                className='border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></textarea>
            </div>
            
            <button
              type='submit'
              className='col-span-2 bg-blue-400 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 font-semibold'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
