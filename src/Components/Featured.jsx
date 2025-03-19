import React from 'react'
import Heading from './Heading'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'

const Featured = () => {
  return (
    <div>
      <Heading className='ml-6' children={"Featured"}/>
      <h1 className='text-3xl font-bold ml-6 mt-10 sm:text-4xl'>New Arrival</h1>
{/* grid */}
      <div className='grid grid-cols-4 grid-rows-2 gap-6 p-6 max-w-6xl mx-auto mt-6'>
        <div className='col-span-2 row-span-2 rounded-lg bg-black shadow-lg flex items-center justify-center p-2'>
        <img src={g1} alt=""
        className='h-full w-full max-h-64 object-contain ' />  
        </div>
        <div className='col-span-2 row-span-1 rounded-lg bg-black flex items-center justify-center p-2'>
        <img src={g2} alt=""
        className='h-full w-full max-h-64 object-contain' />  
        </div>
        <div className='col-span-1 row-span-1 rounded-lg bg-black flex items-center justify-center p-2'>
        <img src={g3} alt=""
        className='h-full w-full object-contain'
        />  
        </div>
        <div className='col-span-1 row-span-1 rounded-lg bg-black flex items-center justify-center p-2'>
        <img src={g4} alt="" 
        className='h-full w-full object-contain'/>  
        </div>
      </div>
    </div>
  )
}

export default Featured
