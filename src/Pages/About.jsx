// import React from 'react'
// import aboutImg from '../assets/about.png'
// import Categories from '../Components/Categories'
// const About = () => {
//   return (
//     <div>
//       <div className='px-4 md:px-0 flex flex-col md:flex-row justify-between mt-10'>
//       <div className='max-w-md space-y-5 md:ml-20 md:mt-5 text-gray-600 leading-relaxed'>
//         <h1 className='text-2xl font-semibold md:mb-10'>Our Story</h1>
//         <p className=''>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
//         <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
//       </div>
// <div>
//   <img src={aboutImg} alt="" 
//   className='object-contain max-w-md w-full mx-auto rounded-l'/>
// </div>
//       </div>
// <Categories className/>
//     </div>
//   )
// }
// export default About



import React from 'react'
import aboutImg from '../assets/about.png'
import Categories from '../Components/Categories'

const About = () => {
  return (
    <div>
      <div className='px-4 md:px-0 flex flex-col md:flex-row justify-between mt-10'>
        <div className='max-w-md space-y-5 md:ml-20 md:mt-5 text-gray-600 leading-relaxed'>
          <h1 className='text-2xl font-semibold md:mb-10'>Our Story</h1>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <img src={aboutImg} alt="" className='object-contain max-w-md w-full mx-auto rounded-l'/>
        </div>
      </div>

      <Categories className />

      <div className="bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white mt-16 rounded-xl mx-4 md:mx-20 py-10 px-6 text-center shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Join the Exclusive Family!</h2>
        <p className="text-sm md:text-base mb-4">Sign up today and get access to member-only discounts, early product launches, and more exciting benefits.</p>
        <button className="mt-2 bg-white text-red-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
          Become a Member
        </button>
      </div>
    </div>
  )
}

export default About
