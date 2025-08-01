import React from 'react';
import Heading from './Heading';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';

const Featured = () => {
  const featuredItems = [
    { image: g1, span: 'col-span-2 row-span-2', maxHeight: 'max-h-64' },
    { image: g2, span: 'col-span-2 row-span-1', maxHeight: 'max-h-64' },
    { image: g3, span: 'col-span-1 row-span-1' },
    { image: g4, span: 'col-span-1 row-span-1' }
  ];

  return (
    <div>
      <Heading className='ml-6'>Featured</Heading>
      <h1 className='mt-10 ml-6 text-3xl font-bold sm:text-4xl'>New Arrival</h1>
      
      <div className='grid max-w-6xl grid-cols-4 grid-rows-2 gap-6 p-6 mx-auto mt-6'>
        {featuredItems.map((item, index) => (
          <div 
            key={index}
            className={`${item.span} rounded-lg bg-black shadow-lg flex items-center justify-center p-2`}
          >
            <img 
              src={item.image} 
              alt="" 
              className={`h-full w-full ${item.maxHeight || ''} object-contain`} 
            />  
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;