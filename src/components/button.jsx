/* eslint-disable react/prop-types */

// export default function Button({
//     children,
//     className,
//     onClick,
//     disabled,
//     bgColor,
//     color = 'white',
//     outline,
//   }) {
//     return (
//       <div className='container-btn'>
//         <button
//           style={{
//             backgroundColor: bgColor,
//             color: color,
//             outline: outline,
//           }}
//           className={`btn ${className}`}
//           disabled={disabled}
//           onClick={onClick}
//         >
//           {children}
//         </button>
//       </div>
//     );
//   }
export default function Button({
  children,
  className,
  onClick,
  disabled,
  bgColor,
  color = 'white',
  outline,
}) {
  return (
    <div className='inline-block'>
      <button
        style={{
          backgroundColor: bgColor,
          color: color,
          outline: outline,
        }}
        className={`w-full text-center py-2 px-4 rounded-lg focus:outline-none transition ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
