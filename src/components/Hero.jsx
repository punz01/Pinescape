import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1605665099545-3a54179da134?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 max-w-[600px] w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Explore City Of Pines</h1>
        <h2 className="text-3xl md:text-4xl italic py-4 drop-shadow-md">With <span className='text-blue-400'>Pine</span>scape</h2>
        <p className="text-md md:text-lg leading-relaxed drop-shadow-sm mb-6">
          Discover the beauty and charm of Baguio with us. Plan your unforgettable escape to the City of Pines today!
        </p>

        {/* CTA Button */}
        <button className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  )
}

export default Hero
