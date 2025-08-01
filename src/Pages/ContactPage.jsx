import React from 'react'
import Button from '../Components/Button'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 md:px-10 mt-10'>
      <div className='flex flex-col md:flex-row justify-between'>

        {/* Left Section */}
        <div className='w-full md:max-w-sm'>
          <div className="border border-black px-3 py-2">
            <div className="flex items-center gap-x-2">
              <IoCallOutline className="h-10 w-7" />
              <p className="font-semibold">Call to Us</p>
            </div>
            <p className="break-words">We are available 24/7, 7 days a week.</p>
          </div>
          <div className="border border-black px-3 py-2 border-t-0">
            <div className="flex items-center gap-x-2">
              <CiMail className="h-10 w-7" />
              <p className="font-semibold">Write to Us</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className='mt-10 md:mt-0 md:px-10 shadow-lg md:ml-5 pb-5 w-full'>
          <div className='flex flex-col gap-y-3 md:flex-row md:space-x-3 items-center justify-center'>
            <input type="text" placeholder='Your Name' className='flex-1 w-full rounded px-2 py-2 border bg-gray-200 text-black' />
            <input type="text" placeholder='Your Email' className='flex-1 w-full rounded px-2 py-2 border bg-gray-200 text-black' />
            <input type="text" placeholder='Your Phone' className='flex-1 w-full rounded px-2 py-2 border bg-gray-200 text-black' />
          </div>

          <div>
            <input type="text" placeholder='Your Message'
              className='h-32 px-2 py-2 border bg-gray-200 text-black mt-5 w-full rounded' />
          </div>

          <div className='flex justify-end'>
            <Button className='mt-5'>Send Message</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactPage
