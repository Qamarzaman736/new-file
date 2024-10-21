"use client";


import { AnimatedTooltip } from "./ui/animated-tooltip";
import qamarImage from '@/components/Image/img.jpg'
import zamanImage from '@/components/Image/asif.jpeg'
import farhanImage from '@/components/Image/f.jpg'
import amirImage from '@/components/Image/amir.jpg'
import ahadImage from '@/components/Image/a.jpg'
import logoImage from '@/components/Image/gif.jpeg'
const Instructors = [
  {
    id: 1,
    name: ' Mehran Mehar',
    designation: ' web Development Mentor',
    image: ahadImage, 
  },
  {
    id: 2,
    name: 'Qamarzaman',
    designation: 'web Development Mentor',
    image: qamarImage, 
  },
  {
    id: 3,
    name: 'farhan',
    designation: 'web Development Mentor',
    image: farhanImage, 
  },
  {
    id: 4,
    name: 'amir Nazeer',
    designation: 'web Development Mentor',
    image: amirImage, 
  },
  {
    id: 5,
    name: 'Asif Langrah',
    designation: 'AI Generative Mentor',
    image: zamanImage, 
  },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${logoImage.src})`,
        backgroundSize: 'contain', // Change to 'contain' to fit the logo
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10"> {/* Text above overlay */}
        <h2 className="text-2xl bg-gradient md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 drop-shadow">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-center mb-4 text-white drop-shadow">
          Discover the talented professionals who will guide your coding journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructor