/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Button from './button';

export default function FinishScreen({
  dispatch,
  highScore,
  points,
  length,
  timeRemaining,
  prevGameHS,
}) {
  const convertedHS = highScore * 10;
  const convertedS = points * 10;
  const percentage = ((points / length) * 100).toFixed(2);
  const highestPer = ((highScore / length) * 100).toFixed(2);

  return (
    <>
      <div className='flex flex-col justify-between'>
        {timeRemaining === 0 && (
          <span className='m-5'>
            » Time is Up! 😓<span className='sec-message'> Try again...</span>
            <br />
          </span>
        )}
        {percentage > 90 && percentage >= 100 && (
          <span className='font-bold text-orange-400 m-5'>» You are a Champion 🏆</span>
        )}
        {percentage > 80 && percentage <= 90 && (
          <span className='font-bold text-orange-400 m-5'>» That's Impressive 🍾</span>
        )}
        {percentage > 60 && percentage <= 80 && (
          <span className='font-bold text-orange-400 m-5'>» Good Job! 🙂</span>
        )}
        {percentage > 40 && percentage <= 60 && (
          <span className='font-bold text-orange-400 m-5'>» You can do it Better! 😉</span>
        )}
        {percentage > 20 && percentage <= 40 && (
          <span className='font-bold text-orange-400 m-5'>» Time to read more Books! 🤨</span>
        )}
        {percentage <= 20 && (
          <span className='font-bold text-red-800 m-5'>» That's Dissapointing 😓</span>
        )}
        {points > highScore ||
          (points > prevGameHS && (
            <div>
              <span className='font-extrabold text-yellow-400 m-5'>
                <br /> » You have set the new High Score 🥳
              </span>
            </div>
          ))}
      </div>
      <div className='container-score m-5 pl-1 font-extrabold'>
        <span className='text-emerald-600'>
          Your Score:{' '}
          <span className='main-score'>
            {convertedS < Number(9) ? `0${convertedS}` : `${convertedS}`}
          </span>
          <span className='sec-score'>
            {percentage < Number(9) ? `/0${percentage}` : `/${percentage}`}%
          </span>
        </span>
      </div>
      <div className='container-highscore m-5 pl-1 text-rose-500 font-extrabold'>
        <span className='main-hs'>
          <span className='text-rose-500'>All time high:{` `}</span>
          {convertedHS < 9 ? `0${convertedHS}` : ` ${convertedHS}`}
          <span className='sec-hs'>
            {highestPer < 9 ? `/0${highestPer}` : ` / ${highestPer}`}%
          </span>
        </span>
      </div>
      <Button
        className='text-orange-400 bg-green-600 flex align-bottom m-5 rounded-lg text-center'
        bgColor=''
        outline='6px solid var(--dominant-secondary)'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Challenge Again
      </Button>
    </>
  );
}