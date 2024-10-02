/* eslint-disable react/prop-types */
// import { HiMiniSun, HiMiniMoon } from 'react-icons/hi2';

// export default function Header({ theme, setTheme }) {
//   function bgColorChange() {
//     const color = theme === 'dark' ? '#100f1c' : '#ffffff';
//     document.body.style.background = color;
//   }
//   bgColorChange();

//   return (
//     <header className='header'>
//       <h1 className='title'>‖FrontEnd Fusion</h1>
//       <div className='empty'></div>
//       <div className='container-switch'>
//         {theme === 'light' ? (
//           <HiMiniMoon className='icon' />
//         ) : (
//           <HiMiniSun className='icon' />
//         )}
//         <div
//           className='body-switch'
//           onClick={() =>
//             setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
//           }
//         >
//           <div className={`switch ${theme}`}></div>
//         </div>
//       </div>
//     </header>
//   );
// }
import { HiMiniSun, HiMiniMoon } from 'react-icons/hi2';

export default function Header({ theme, setTheme }) {
  function bgColorChange() {
    const color = theme === 'dark' ? '#100f1c' : '#ffffff';
    document.body.style.background = color;
  }
  bgColorChange();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 shadow-lg text-white">
      <h1 className="text-xl font-bold tracking-wide">‖FrontEnd Fusion</h1>
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
