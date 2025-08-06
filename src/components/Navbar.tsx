'use client';

import { Menu, Search, Grid3X3 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 h-15 px-20 z-50">
      <div className="flex items-center justify-between h-full py-3">
        <div className="flex items-center space-x-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-md lg:hidden"
          >
            <Menu size={18} />
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-semibold">
              F
            </div>
            <span className="font-semibold text-blue-600">FinTrack</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-md text-gray-600">
            <Search size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md text-gray-600">
            <Grid3X3 size={18} />
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
