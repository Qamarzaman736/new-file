'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebiners'
import HeroSection from '@/components/HeroSection'
import Instructor from '@/components/instructors'
import Navbar from '@/components/Navbar'
import TestiMonialCard from '@/components/TestiMovingCard.tsx'

import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
       <WhyChooseUs/>
       <FeaturedCourses/>
       <TestiMonialCard/>
       <FeaturedWebinars/>
       
       <Instructor/>
    </div>
  )
}

export default page