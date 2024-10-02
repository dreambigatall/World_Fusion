/* eslint-disable react/prop-types */
// import { useEffect } from 'react';

// export default function Timer({ dispatch, timeRemaining }) {
//   useEffect(() => {
//     const timeInterval = setInterval(() => {
//       dispatch({ type: 'runnng' });
//     }, 1000);
//     return () => clearInterval(timeInterval);
//   }, [dispatch]);

//   const mins = Math.floor(timeRemaining / 60);
//   const secs = timeRemaining % 60;
//   const alert = timeRemaining < 60;

//   return (
//     <div className='container-progress'>
//       <span className='progress-title timing'>Time Remaining</span>
//       <span>
//         <span className={`main ${alert && 'alert-main'}`}>
//           {mins < 10 && 0}
//           {mins}:
//         </span>

//         <span className={`sec ${alert && 'alert-sec'}`}>
//           {secs < 10 && 0}
//           {secs}
//         </span>
//       </span>
//     </div>
//   );
// }
import { useEffect } from 'react';

export default function Timer({ dispatch, timeRemaining }) {
  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch({ type: 'runnng' });
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [dispatch]);

  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  const alert = timeRemaining < 60;

  return (
    <div className='flex justify-between items-center mt-6'>
      <span className='text-lg font-semibold text-gray-800'>Time Remaining</span>
      <span className='text-2xl font-bold'>
        <span
          className={`mr-1 ${
            alert ? 'text-red-600 animate-pulse' : 'text-gray-800'
          }`}
        >
          {mins < 10 && '0'}
          {mins}:
        </span>
        <span
          className={`${alert ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}
        >
          {secs < 10 && '0'}
          {secs}
        </span>
      </span>
    </div>
  );
}
