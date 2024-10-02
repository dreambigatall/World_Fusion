/* eslint-disable react/prop-types */

// import Timer from './Timer';

// export default function Progress({
//   length,
//   index,
//   answer,
//   timeRemaining,
//   dispatch,
// }) {
//   const isAnswered = answer !== null;
//   let completed;
//   function fillProgress(index, length) {
//     completed = (Number(isAnswered ? index + 1 : index) / Number(length)) * 100;
//   }
//   fillProgress(index, length);

//   return (
//     <div className='container-quiz-progress'>
//       <h3>FRONTEND FUSION</h3>
//       <div className='container-progress'>
//         <span className='progress-title'>Question</span>
//         <span className='main'>
//           0{index + 1}
//           <span className='sec'>/0{length}</span>
//         </span>
//       </div>
//       <Timer timeRemaining={timeRemaining} dispatch={dispatch} />
//       <div className='container-progress-bar'>
//         <span className='progress-title' htmlFor='progress'>
//           Progress
//         </span>
//         <div className={`progress-bar ${completed === 100 && 'full'}`}>
//           <div
//             className={`progress-bar-fill`}
//             style={{ width: `${completed}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Timer from './Timer';

export default function Progress({
  length,
  index,
  answer,
  timeRemaining,
  dispatch,
}) {
  const isAnswered = answer !== null;
  let completed;
  function fillProgress(index, length) {
    completed = (Number(isAnswered ? index + 1 : index) / Number(length)) * 100;
  }
  fillProgress(index, length);

  return (
    <div className='mt-6'>
      <h3 className='text-lg font-semibold text-gray-800'>FRONTEND FUSION</h3>
      <div className='flex justify-between items-center mt-4'>
        <span className='font-semibold'>Question</span>
        <span className='text-gray-700'>
          0{index + 1}/0{length}
        </span>
      </div>

      <Timer timeRemaining={timeRemaining} dispatch={dispatch} />

      <div className='mt-4'>
        <span className='font-semibold'>Progress</span>
        <div className='relative w-full h-4 bg-gray-300 rounded-lg mt-2'>
          <div
            className={`h-full bg-orange-500 rounded-lg transition-all duration-500 ease-in-out ${completed === 100 && 'bg-green-500'}`}
            style={{ width: `${completed}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
