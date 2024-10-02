// export default function Footer() {
//     return (
//       <footer className='footer'>
//         <div className='container-footer'>
//           <span className='developer-title'>Designed and Developed by ⚡</span>
//           <span className='developer-name'>
//             <a
//               href='https://www.linkedin.com/in/sujaygowda/'
//               target='_blank'
//               rel='noreferrer'
//             >
//               SUJAY GOWDA 💀
//             </a>
//           </span>
//           <span className='last-updated'>LAST UPDATED | 06 DEC 2023 🕛</span>
//         </div>
//       </footer>
//     );
//   }

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 flex flex-col justify-end mt-28">
      <div className="container mx-auto text-center">
        <span className="block text-lg font-semibold">
          Designed and Developed by ⚡
        </span>
        <span className="block text-xl font-bold mt-2">
          <a
            href="https://www.linkedin.com/in/sujaygowda/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            SUJAY GOWDA 💀
          </a>
        </span>
        <span className="block text-sm text-gray-400 mt-4">
          LAST UPDATED | 06 DEC 2023 🕛
        </span>
      </div>
    </footer>
  );
}
