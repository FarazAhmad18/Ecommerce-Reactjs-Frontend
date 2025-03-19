import React from 'react';
import Button from './Button';

const Card = ({ title, price, src, rating }) => {
  return (
    <div className="mb-5 border space-y-5 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center bg-white w-full sm:w-[180px] md:w-[220px] lg:w-[250px]">
      <img
        src={src}
        alt={title}
        className="w-full h-32 object-contain p-2 bg-slate-100"
      />
      <div className="px-3 py-1 text-center space-y-0.5 w-full">
        <p className="font-medium text-sm text-gray-800">{title}</p>
        <p className="text-gray-600 text-xs">Rs: {price}</p>
        <p className="text-yellow-500 text-xs font-medium">Rating: {rating}/5</p>
       
      </div>
      <Button className="w-full rounded-none bg-black text-white py-1 text-sm">
        Add To Cart
      </Button>
    </div>
  );
};

export default Card;
