import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const handleNav = () => {
    setNav(!nav)
  }

  const handleSetActive = (link) => {
    setActiveLink(link)
    setNav(false) // close mobile menu on click
  }

  const linkClasses = (name) =>
    `px-4 py-2 ${activeLink === name ? 'text-blue-400 font-bold' : ''} hover:text-blue-400 transition`

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center sticky top-0 z-50 bg-gray-700/80 text-white backdrop-blur-md">
      <ul className='hidden sm:flex'>
        <li><a href="/" onClick={() => handleSetActive('home')} className={linkClasses('home')}>Home</a></li>
        <li><a href="#deals" onClick={() => handleSetActive('deals')} className={linkClasses('deals')}>Activities</a></li>
        <li><a href="#gallery" onClick={() => handleSetActive('gallery')} className={linkClasses('gallery')}>Gallery</a></li>
        <li><a href="#contact" onClick={() => handleSetActive('contact')} className={linkClasses('contact')}>Contact</a></li>
      </ul>

      <div className='flex justify-between'>
        <a href="#" className='mx-4 hover:text-blue-500 transition'><FaFacebookF /></a>
        <a href="#" className='mx-4 hover:text-blue-400 transition'><FaTwitter /></a>
        <a href="#" className='mx-4 hover:text-red-500 transition'><FaGooglePlusG /></a>
        <a href="#" className='mx-4 hover:text-pink-500 transition'><FaInstagram /></a>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>

      {/* Mobile Menu */}
      <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
        : 'absolute top-0 h-screen left-[100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'><a href="/" onClick={() => handleSetActive('home')} className={linkClasses('home')}>Home</a></li>
          <li><a href="#deals" onClick={() => handleSetActive('deals')} className={linkClasses('deals')}>Activities</a></li>
          <li className='text-2xl py-8'><a href="#gallery" onClick={() => handleSetActive('gallery')} className={linkClasses('gallery')}>Gallery</a></li>
          <li className='text-2xl py-8'><a href="#contact" onClick={() => handleSetActive('contact')} className={linkClasses('contact')}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
