import React from 'react';
import Button from './Button';
import { FaArrowRight } from "react-icons/fa";

const Banner = ({ 
  image, 
  title, 
  subtitle, 
  buttonText, 
  theme = 'dark', 
  highlightText,
  className = '' 
}) => {
  const themes = {
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-transparent border-white hover:bg-white hover:text-black',
      highlight: 'text-blue-50'
    },
    light: {
      bg: 'bg-white',
      text: 'text-black',
      button: 'bg-green-500 hover:bg-white hover:text-black',
      highlight: 'text-green-500 font-semibold'
    }
  };

  const currentTheme = themes[theme];

  return (
    <div className={`${className}`}>
      <div className={`space-y-4 grid grid-cols-1 md:grid-cols-2 ${currentTheme.bg} ${currentTheme.text} mx-auto sm:mt-5 max-w-3xl md:max-w-4xl`}>
        <div className='flex flex-col items-center space-y-3 text-center mt-7'>
          <p className={`${currentTheme.highlight} text-sm`}>{highlightText}</p>
          <p className='text-4xl font-semibold'>{title}</p>
          <Button className={`group flex flex-row items-center gap-2 border rounded-md ${currentTheme.button} transition duration-300`}>
            {buttonText} <FaArrowRight className='transition-transform group-hover:translate-x-2' />
          </Button>
        </div>
        <div><img src={image} alt="banner" className="object-cover w-full h-full" /></div>
      </div>
    </div>
  );
};

export default Banner;