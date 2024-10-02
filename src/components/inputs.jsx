import { useState } from 'react';

/* eslint-disable react/prop-types */


export default function Input({ setInputs, id, value, name }) {
  const [input, setInput] = useState('');

  return (
    <div className="flex items-center mb-2 cursor-pointer" onClick={() => setInputs((ps) => ({ ...ps, mode: input }))}>
      <input
        className="form-radio h-5 w-5 text-blue-600 transition duration-200 ease-in-out"
        type="radio"
        id={id}
        value={value}
        name="mode"
        onChange={(e) => {
          setInput(e.target.value);
          setInputs((ps) => ({ ...ps, mode: e.target.value }));
        }}
      />
      <label className="ml-3 text-gray-700 font-medium p-4" htmlFor={id}>
        {name}
      </label>
    </div>
  );
}
