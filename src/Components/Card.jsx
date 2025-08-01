import React from 'react';
import Button from './Button';
import StarRatings from 'react-star-ratings';
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    }));
    toast.success(`${item.title} added to cart!`, {
      position: "top-left",
      autoClose: 1000,
    });
  };

  return (
    <div className="flex flex-col items-center w-full mb-5 space-y-5 overflow-hidden transition-all duration-300 bg-white border rounded-md shadow-sm hover:shadow-md">
      <div className='relative w-full'>
        <FaRegHeart className='absolute transition cursor-pointer top-2 right-2 hover:text-red-500' />
        <img
          src={item.image}
          alt={item.title}
          className="object-contain w-full h-64 p-2 bg-slate-100"
        />
      </div>

      <div className="px-3 py-1 text-center space-y-0.5 w-full">
        <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</p>
        <p className="text-xs text-gray-600">Rs: {item.price}</p>
        <StarRatings
          rating={item.rating?.rate || 4}
          starRatedColor="gold"
          starDimension="20px"
          starSpacing="1px"
        />
      </div>

      <Button 
        onClick={handleAddToCart} 
        className="w-full py-1 text-sm text-white bg-black rounded-none"
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default Card;
