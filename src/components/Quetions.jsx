//import React from 'react'

/* eslint-disable react/prop-types */
// import Button from './Button';
// import Progress
//  from './proggres';

// export default function Questions({
//   dispatch,
//   questions,
//   index,
//   answer,
//   length,
//   setDialog,
//   timeRemaining,
// }) {
//   const isAnswered = answer !== null;
//   console.log(questions)

//   return (
//     <>
//       <div className='container-quiz'>
//         <div className='container-quiz-qna'>
//           <h2 className='question'>
//             <span>0{index + 1}. </span>
//             {questions.question}
//           </h2>
//           <div className='container-ans'>
//             {questions.answers.map((ans, index) => (
//               <Button
//                 key={ans}
//                 onClick={() => {
//                   dispatch({ type: 'new', payload: index });
//                 }}
//                 disabled={isAnswered}
//                 className={`stroke-stone-500 ${
//                   isAnswered
//                     ? (answer === index &&
//                         answer !== questions.correctAnswer &&
//                         'wrong wrong-ans') ||
//                       (questions.correctAnswer === index &&
//                         'correct wrong-ans') ||
//                       (answer === index &&
//                         answer === questions.correctAnswer &&
//                         'correct wrong-ans')
//                     : ''
//                 }`}
//               >
//                 {ans}
//               </Button>
//             ))}
//           </div>
//         </div>

//         <Progress
//           timeRemaining={timeRemaining}
//           dispatch={dispatch}
//           length={length}
//           index={index}
//           answer={answer}
//         />
//       </div>
//       <div className='container-btns '>
//         <Button className='btn-end btn-sec' onClick={() => setDialog(true)}>
//           End
//         </Button>
//         {length === index + 1 ? (
//           <Button
//             className='bg-orange-600'
//             onClick={() => dispatch({ type: 'finish' })}
//             disabled={!isAnswered}
//           >
//             Finish
//           </Button>
//         ) : (
//           <Button
//             className='bg-red-800'
//             onClick={() => dispatch({ type: 'next' })}
//             disabled={!isAnswered}
//           >
//             Next
//           </Button>
//         )}
//       </div>
//     </>
//   );
// }

import Button from './button';
import Progress from './proggres';

export default function Questions({
  dispatch,
  questions,
  index,
  answer,
  length,
  setDialog,
  timeRemaining,
}) {
  const isAnswered = answer !== null;
  console.log(questions);

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg p-6 mb-6'>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>
            <span className='text-orange-600'>0{index + 1}. </span>
            {questions.question}
          </h2>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4'>
            {questions.answers.map((ans, i) => (
              <Button
                key={ans}
                onClick={() => dispatch({ type: 'new', payload: i })}
                disabled={isAnswered}
                className={`transition duration-300 ease-in-out transform hover:scale-90 ${
                  isAnswered
                    ? (answer === i && answer !== questions.correctAnswer
                        ? 'bg-red-700 text-white'
                        : '') ||
                      (questions.correctAnswer === i
                        ? 'bg-green-500 text-white'
                        : '') ||
                      (answer === i && answer === questions.correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-black text-white')
                    : 'bg-zinc-700 text-blue-600'
                }`}
              >
                {ans}
              </Button>
            ))}
          </div>
        </div>

        <Progress
          timeRemaining={timeRemaining}
          dispatch={dispatch}
          length={length}
          index={index}
          answer={answer}
        />
      </div>

      <div className='flex justify-between'>
        <Button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg' onClick={() => setDialog(true)}>
          End
        </Button>
        {length === index + 1 ? (
          <Button
            className='bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg'
            onClick={() => dispatch({ type: 'finish' })}
            disabled={!isAnswered}
          >
            Finish
          </Button>
        ) : (
          <Button
            className='bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg'
            onClick={() => dispatch({ type: 'next' })}
            disabled={!isAnswered}
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
}

