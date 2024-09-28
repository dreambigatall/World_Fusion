import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-stone-800 w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left section (Logo/Title) */}
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="logo" className="w-8 h-8 mr-2" />
          <a href="#" className="text-white text-lg font-semibold">World Countries</a>
        </div>

        {/* Middle Section (Search Input) */}
        <div className="flex-1 px-4">
          <input 
            type="text" 
            placeholder="Search Or Select Countries..." 
            className="w-full py-2 px-4 bg-stone-900 border border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        {/* Right Section (Language and Menu) */}
        <div className="flex items-center space-x-4 text-white">
          <div className="relative group">
            <button className="bg-stone-700 py-2 px-4 rounded-lg">
              ENG <span className="ml-1">&#9662;</span>
            </button>
            <div className="absolute left-0 mt-2 w-32 bg-white text-stone-800 hidden group-hover:block rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">ENG</li>
                <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">FRA</li>
                <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">ESP</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="bg-stone-700 py-2 px-4 rounded-lg">
              MENU <span className="ml-1">&#9662;</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white text-stone-800 hidden group-hover:block rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">About</li>
                <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">Contact</li>
                <li className="px-4 py-2 hover:bg-stone-200 cursor-pointer">Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
