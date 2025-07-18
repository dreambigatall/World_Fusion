/* eslint-disable react/prop-types */

import { HiMiniSun, HiMiniMoon } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
export default function Header({ theme, setTheme }) {
  function bgColorChange() {
    const color = theme === 'dark' ? '#100f1c' : '#ffffff';
    document.body.style.background = color;
  }
  bgColorChange();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 shadow-lg text-white">
      <div className='flex'>
      

<Link to="/"><img src=""  /></Link>

<h1 className="text-xl font-bold tracking-wide mt-3 font-serif">World  Fusion  </h1>
      </div>
        
      <div className="flex items-center space-x-4">
        {theme === 'light' ? (
          <HiMiniMoon className="w-6 h-6 text-gray-400" />
        ) : (
          <HiMiniSun className="w-6 h-6 text-yellow-400" />
        )}
        <div
          className="relative w-12 h-6 bg-gray-600 rounded-full cursor-pointer"
          onClick={() =>
            setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
          }
        >
          <div
            className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-in-out ${
              theme === 'light' ? 'translate-x-1' : 'translate-x-7'
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
}
