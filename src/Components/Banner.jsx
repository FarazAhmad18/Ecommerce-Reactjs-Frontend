import React from 'react'
import banner from '../assets/banner.png'
import Button from '../Components/Button'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
       <div className=' space-y-4 grid grid-cols-1 md:grid-cols-2 bg-black text-white mx-auto sm:mt-5 max-w-3xl'>
        <div className='text-center flex items-center flex-col space-y-3 mt-7'>
          <p className='text-blue-50 text-sm'>iphone 16 series</p>
         <p className='text-4xl font-semibold '>
            Upto 10% <br />off voucher
         </p>
         <Button className='group bg-transparent flex flex-row items-center gap-2 border rounded-md border-white hover:bg-white hover:text-black transition duration-300'>
         Shop Now <FaArrowRight className='transition-transform group-hover:translate-x-2' /></Button>
          </div>
        <div><img src={banner} alt="" /></div>
      </div>
    </div>
  )
}

export default Banner
