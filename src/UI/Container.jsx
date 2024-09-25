import React from 'react'



import Nation from '../components/Nation'
import Map from '../components/Map'

export default function Container() {
  return (
    <>
    <div className='bg-stone-800 flex justify-evenly '>
      <span>
        <a href="#" className='text-white'>Map</a>
      </span>
      <input type='text' className='border-white my-3 border-spacing-3 pl-10'/>
    </div>
    <div className='h-screen w-screen flex'>
        <Nation/>
        <Map/>

    </div>
    </>
  )
}
