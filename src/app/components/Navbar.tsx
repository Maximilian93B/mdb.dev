'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className='fixed top-0 left-0 w-full flex justify-between items-center p-4 z-10 shadow-sm transition-shadow duration-300 navbar-animated-bg'>
      <div className='logo'>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="space-x-4">
        <Link href="#about"
           className="text-black hover:text-gray-300 transition-all duration-300 hover:shadow-lg">
            About
          
        </Link>
        <Link href="#projects"
          className="text-black hover:text-gray-300 transition-all duration-300 hover:shadow-lg">
            Projects
        </Link>
        <Link href="#contact"
          className="text-black hover:text-gray-300 transition-all duration-300 hover:shadow-lg">
            Contact
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
