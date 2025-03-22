import React from 'react'
import Banner from '../Components/Banner'
import TodaysCard from '../Components/TodaysCard'
import Categories from '../Components/Categories'
import ThisMonth from '../Components/ThisMonth'
import Banner2 from '../Components/Banner2'
import OurProducts from '../Components/OurProducts'
import Featured from '../Components/Featured'
import Heading from '../Components/Heading'
const MainPage = () => {
  return (
    <div>
     <Banner/>
     <Heading className='ml-6'>Today's</Heading>
     <TodaysCard/>
     <Categories/>
     <ThisMonth/>
     <Banner2/>
     <OurProducts/>
     <Featured/>
    </div>
  )
}

export default MainPage
