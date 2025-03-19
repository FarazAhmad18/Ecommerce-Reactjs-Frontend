import React from 'react';
import Button from './Button';
import StarRatings from 'react-star-ratings';
import { FaRegHeart } from "react-icons/fa";


const Card = ({ title, price, src, rating }) => {
  return (
    <div className="mb-5 border space-y-5 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center bg-white w-full">
    <div className='relative w-full'>
    <FaRegHeart className='absolute top-2 right-2 cursor-pointer hover:text-red-500 translation' />
      <img
        src={src}
        alt={title}
        className="w-full h-32 object-contain p-2 bg-slate-100"
      />
    </div>
     

      <div className="px-3 py-1 text-center space-y-0.5 w-full">
        <p className="font-medium text-sm text-gray-800">{title}</p>
        <p className="text-gray-600 text-xs">Rs: {price}</p>
        {/* <p className="text-yellow-500 text-xs font-medium">Rating: {rating}/5</p> */}
        <StarRatings
        rating={rating}
        starRatedColor="gold"
        starDimension="20px"
        starSpacing="1px"
      />
       
      </div>
      <Button className="w-full rounded-none bg-black text-white py-1 text-sm">
        Add To Cart
      </Button>
    </div>
  );
};

export default Card;
