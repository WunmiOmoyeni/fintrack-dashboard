'use client';

import { Menu, Search, Grid3X3 } from 'lucide-react';
import logo from '@/images/logo.png'
import menu from '@/images/menu.png'
import person from '@/images/A professional-looking individual with short dark hair and glasses smiling in a modern office setting..png'
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 h-16 z-50">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-20">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile hamburger - only show on mobile */}
          <button
            className="p-2 hover:bg-gray-100 rounded-md lg:hidden transition-colors duration-200"
          >
            <Menu size={20} className="text-gray-600" />
          </button>

          {/* Logo section */}
          <div className="flex items-center space-x-2">
            <Image 
              src={menu} 
              alt='menu' 
              className='mr-4 sm:mr-6 lg:mr-10 hidden sm:block' // Hide on very small screens
              width={24}
              height={24}
            />
            <Image 
              src={logo} 
              alt='logo'
              className="h-8 w-auto sm:h-10" // Responsive logo size
            />
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors duration-200">
            <Search size={18} className="sm:w-5 sm:h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors duration-200">
            <Grid3X3 size={18} className="sm:w-5 sm:h-5" />
          </button>
          <div />
          <Image src ={person} alt='person'></Image>
        </div>
      </div>
    </nav>
  );
}