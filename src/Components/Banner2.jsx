import React from 'react'
import banner2 from '../assets/b2.png'
import Button from '../Components/Button'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className='mb-20'>
       <div className=' space-y-4 grid grid-cols-1 md:grid-cols-2 bg-black text-white mx-auto sm:mt-5 max-w-4xl'>
        <div className='text-center flex items-center flex-col space-y-3 mt-7'>
          <p className='text-green-500 font-semibold text-sm'>Categories</p>
         <p className='text-4xl font-semibold '>
            Enhance Your <br />Music Experience
         </p>
         <Button className='group flex flex-row items-center gap-2 border rounded-md bg-green-500 font-semibold hover:bg-white hover:text-black transition duration-300'>
         Buy Now <FaArrowRight className='transition-transform group-hover:translate-x-2' /></Button>
          </div>
        <div><img src={banner2} alt="" /></div>
      </div>

    </div>
  )
}

export default Banner
