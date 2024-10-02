/* eslint-disable react/prop-types */

import { useState } from 'react';
import Input from './inputs';
import Button from './Button';
import Topic from './Topic';

export default function Form({ dispatch, highScore }) {
  const [selected, setSelected] = useState(null);
  const [inputs, setInputs] = useState({
    topic: '',
    mode: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'start', payload: { inputs, highScore } });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h2 className='ml-4 text-red-700 font-extrabold font-serif mt-10 text-xl'>Select Topic</h2>
        <div className=' p-4 justify-evenly rounded-lg relative w-28 flex mt-5'>
          <Topic
            topic='City'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
            
          />
          <Topic
            topic='Country'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
          />
          <Topic
            topic='Flag'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
          />
          
        </div>
      </div>
      <div>
        <h2 className='text-red-700 font-extrabold p-4 font-serif text-xl'>Select Mode</h2>
        <div className='flex justify-evenly  w-32 p-4 m-4'>
          <Input
            id='EASY'
            value='EASY'
            name='Easy'
            setInputs={setInputs}
            inputs={inputs}
          />
          <Input
            id='MEDIUM'
            value='MEDIUM'
            name='Medium'
            inputs={inputs}
            setInputs={setInputs}
          />
          <Input
            id='HARD'
            value='HARD'
            name='Hard'
            setInputs={setInputs}
            inputs={inputs}
          />
        </div>
      </div>
      <Button
        bgColor="bg-stone-900"
        outline='6px solid var(--dominant-secondary)'
        type='submit'
        className='bg-blue-700 ml-3 mt-[-6px]'
      >
       Let'Go
      </Button>
    </form>
  );
}